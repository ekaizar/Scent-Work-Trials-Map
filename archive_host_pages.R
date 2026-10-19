################################################################################
# Archive NACSW host trial pages in the Wayback Machine
#
# Why: hosts take their trial page (and the premium linked from it) down once
# the trial is over. While a trial is still upcoming, ask the Internet Archive's
# Save Page Now (SPN2) API to capture its host page plus the pages/PDFs it links
# to (capture_outlinks=1), so the premium survives. Results are recorded in
# archive_log.csv; Trialmaps_Interactive.R reads that log and adds an
# ArchiveLink to past trials on the map.
#
# Runs after Trialmaps_Interactive.R (reads trials_for_google_sheets.csv).
# Needs archive.org S3-style keys in env vars IA_ACCESS_KEY / IA_SECRET_KEY
# (GitHub repository secrets). Without them it does nothing.
################################################################################

library(dplyr)

# How often to re-capture a page that is already archived. Premiums get revised,
# so a trial coming up soon is captured again if its last capture predates the
# final stretch before the trial.
RECAPTURE_DAYS  <- 30   # re-capture anything whose last capture is older
FINAL_DAYS      <- 14   # ...and capture once more within this many days of the trial
MAX_PER_RUN     <- 150  # cap on new capture requests per run (first run has a backlog)
REQUEST_DELAY   <- 12   # seconds between requests (SPN2 is rate-limited)
STATUS_WAIT     <- 120  # seconds to wait before checking this run's jobs
LOG_FILE        <- "archive_log.csv"

cat("\n============================================================\n")
cat("🗄️  Archiving NACSW host pages in the Wayback Machine\n")
cat("============================================================\n\n")

access <- Sys.getenv("IA_ACCESS_KEY")
secret <- Sys.getenv("IA_SECRET_KEY")
if (!nzchar(access) || !nzchar(secret)) {
  cat("⚠️  IA_ACCESS_KEY / IA_SECRET_KEY not set; skipping archiving.\n")
  quit(save = "no", status = 0)
}
auth_headers <- httr::add_headers(
  Accept        = "application/json",
  Authorization = paste0("LOW ", access, ":", secret)
)

# Per https://archive.org/developers/bots.html: identify the bot with a
# descriptive User-Agent, authenticate, go one request at a time with delays,
# and honor 429 Too Many Requests / Retry-After.
USER_AGENT <- paste0("ScentWorkTrialsMap-Archiver/1.0 ",
                     "(+https://github.com/ekaizar/Scent-Work-Trials-Map; ",
                     "weekly GitHub Actions job saving dog-trial host pages)")
MAX_RETRY_WAIT <- 600   # never sleep longer than this on one Retry-After

# Seconds to wait from a Retry-After header (delta-seconds or HTTP date).
retry_after_seconds <- function(resp, default = 60) {
  h <- httr::headers(resp)[["retry-after"]]
  if (is.null(h)) return(default)
  secs <- suppressWarnings(as.numeric(h))
  if (is.na(secs)) {
    when <- suppressWarnings(httr::parse_http_date(h))
    secs <- if (is.na(when)) default else as.numeric(difftime(when, Sys.time(), units = "secs"))
  }
  max(1, secs)
}

# One request to the Archive. On 429/503 it waits as told by Retry-After and
# retries (twice); if still throttled it returns attr "throttled" = TRUE so the
# caller stops for this run. Transport errors come back as an error object.
ia_request <- function(method, url, ...) {
  for (attempt in 1:3) {
    resp <- tryCatch(
      httr::VERB(method, url, auth_headers, httr::user_agent(USER_AGENT),
                 httr::timeout(60), ...),
      error = function(e) e
    )
    if (inherits(resp, "error")) return(resp)
    code <- httr::status_code(resp)
    if (!code %in% c(429, 503)) return(resp)
    wait <- retry_after_seconds(resp)
    if (attempt == 3 || wait > MAX_RETRY_WAIT) break
    cat(sprintf("    HTTP %d from the Archive; waiting %d s (Retry-After)\n",
                code, round(wait)))
    Sys.sleep(wait)
  }
  attr(resp, "throttled") <- TRUE
  resp
}

today <- Sys.Date()

# --- Archive log -------------------------------------------------------------
# One row per NACSW trial (Date + Location) and its host page URL: the latest
# capture made before the trial, plus the last request and its outcome.
# Keyed by trial, not URL, because the NACSW calendar drops a trial's link once
# the trial is over, and hosts reuse one page for several trials.
# Snapshot timestamps are Wayback's YYYYMMDDhhmmss.
empty_log <- data.frame(
  Date = character(), Location = character(),
  url = character(), last_success = as.Date(character()),
  snapshot_timestamp = character(), last_requested = as.Date(character()),
  last_status = character(), last_message = character(),
  stringsAsFactors = FALSE
)
archive_log <- if (file.exists(LOG_FILE)) {
  read.csv(LOG_FILE, stringsAsFactors = FALSE, colClasses = "character") %>%
    mutate(last_success   = as.Date(na_if(last_success, "")),
           last_requested = as.Date(na_if(last_requested, "")))
} else {
  empty_log
}
cat("  • Archive log:", nrow(archive_log), "trials\n")

# --- Which pages need a capture ----------------------------------------------
trials <- read.csv("trials_for_google_sheets.csv", stringsAsFactors = FALSE)

upcoming <- trials %>%
  filter(Org == "NACSW", !is.na(EventLink), grepl("^https?://", EventLink),
         as.Date(Date) >= today) %>%
  distinct(Date, Location, url = EventLink)

# NA-safe max of a Date vector
max_date <- function(x) if (all(is.na(x))) as.Date(NA) else max(x, na.rm = TRUE)

candidates <- upcoming %>%
  left_join(archive_log, by = c("Date", "Location", "url")) %>%
  group_by(url) %>%
  summarize(
    next_trial     = min(as.Date(Date)),
    last_success   = max_date(last_success),
    last_requested = max_date(last_requested),
    last_status    = last(last_status[order(last_requested)]),
    .groups = "drop"
  ) %>%
  filter(
    is.na(last_success) |
      last_success < today - RECAPTURE_DAYS |
      (next_trial - today <= FINAL_DAYS & last_success < next_trial - FINAL_DAYS)
  ) %>%
  # Don't hammer a URL that was requested (and failed) in the last week
  filter(is.na(last_requested) | last_requested < today - 6 |
           last_status == "success") %>%
  arrange(next_trial) %>%   # soonest trials first: they disappear first
  head(MAX_PER_RUN)

cat("  • Upcoming NACSW host pages needing a capture:", nrow(candidates), "\n\n")

# --- Submit capture requests -------------------------------------------------
submit_capture <- function(url) {
  resp <- ia_request(
    "POST", "https://web.archive.org/save",
    body = list(url = url, capture_outlinks = "1",
                if_not_archived_within = "7d"),
    encode = "form"
  )
  if (inherits(resp, "error")) {
    return(list(job_id = NA, message = conditionMessage(resp)))
  }
  if (isTRUE(attr(resp, "throttled"))) {
    return(list(job_id = NA, throttled = TRUE,
                message = sprintf("HTTP %d (rate-limited)", httr::status_code(resp))))
  }
  body <- tryCatch(httr::content(resp, as = "parsed", type = "application/json"),
                   error = function(e) NULL)
  if (!is.null(body$job_id)) return(list(job_id = body$job_id, message = ""))
  list(job_id = NA,
       message = if (!is.null(body$message)) body$message else
         sprintf("HTTP %d", httr::status_code(resp)))
}

check_status <- function(job_id) {
  resp <- ia_request("GET", paste0("https://web.archive.org/save/status/", job_id))
  if (inherits(resp, "error")) return(list(status = "pending"))
  if (isTRUE(attr(resp, "throttled"))) return(list(status = "pending", throttled = TRUE))
  tryCatch(httr::content(resp, as = "parsed", type = "application/json"),
           error = function(e) list(status = "pending"))
}

jobs <- list()
for (i in seq_len(nrow(candidates))) {
  url <- candidates$url[i]
  r <- submit_capture(url)
  cat(sprintf("  [%d/%d] %s -> %s\n", i, nrow(candidates), url,
              if (is.na(r$job_id)) paste("not submitted:", r$message) else "submitted"))
  jobs[[url]] <- r
  if (isTRUE(r$throttled) ||
      grepl("too many|rate|limit", r$message, ignore.case = TRUE)) {
    cat("  ⚠️  Rate-limited by the Archive; stopping submissions for this run.\n")
    break
  }
  Sys.sleep(REQUEST_DELAY)
}

# --- Collect results ---------------------------------------------------------
results <- list()
status_throttled <- FALSE
if (length(jobs) > 0) {
  cat("\n  • Waiting", STATUS_WAIT, "s for captures to finish...\n")
  Sys.sleep(STATUS_WAIT)

  for (url in names(jobs)) {
    j <- jobs[[url]]
    if (is.na(j$job_id)) {
      results[[url]] <- list(status = "error", message = j$message, timestamp = NA)
      next
    }
    # Once the Archive throttles status checks, stop asking this run; the
    # remaining jobs are logged as pending and retried next week.
    st <- if (status_throttled) list(status = "pending") else check_status(j$job_id)
    if (isTRUE(st$throttled)) status_throttled <- TRUE
    # Give slow captures (many outlinks) a few more chances
    tries <- 0
    while (identical(st$status, "pending") && !status_throttled && tries < 6) {
      Sys.sleep(20); tries <- tries + 1
      st <- check_status(j$job_id)
      if (isTRUE(st$throttled)) status_throttled <- TRUE
    }
    results[[url]] <- list(
      status    = if (is.null(st$status)) "pending" else st$status,
      message   = paste(c(st$status_ext, st$message), collapse = " "),
      timestamp = if (is.null(st$timestamp)) NA else st$timestamp
    )
    Sys.sleep(1)
  }
}

# --- Update the log ----------------------------------------------------------
if (length(results) > 0) {
  updates <- bind_rows(lapply(names(results), function(url) {
    r <- results[[url]]
    ok <- identical(r$status, "success") && !is.na(r$timestamp)
    data.frame(
      url = url,
      new_success   = if (ok) as.Date(substr(r$timestamp, 1, 8), "%Y%m%d") else as.Date(NA),
      new_timestamp = if (ok) r$timestamp else NA_character_,
      new_status    = r$status,
      new_message   = substr(trimws(r$message), 1, 200),
      stringsAsFactors = FALSE
    )
  }))

  # A capture of a URL applies to every upcoming trial that uses it. Rows of
  # past trials are left alone, so they keep their last pre-trial capture.
  archive_log <- archive_log %>%
    full_join(inner_join(upcoming, updates, by = "url"),
              by = c("Date", "Location", "url")) %>%
    mutate(
      in_run             = !is.na(new_status),
      last_success       = coalesce(new_success, last_success),
      snapshot_timestamp = coalesce(new_timestamp, snapshot_timestamp),
      last_requested     = if_else(in_run, today, last_requested),
      last_status        = if_else(in_run, new_status, last_status),
      last_message       = if_else(in_run, new_message, last_message)
    ) %>%
    select(names(empty_log)) %>%
    arrange(Date, Location)

  write.csv(archive_log, LOG_FILE, row.names = FALSE, na = "")

  counts <- table(updates$new_status)
  cat("\n✓ Archive results:",
      paste(names(counts), counts, sep = " = ", collapse = ", "), "\n")
} else {
  cat("✓ Nothing to archive this run.\n")
}
cat("  • Archive log now holds", nrow(archive_log), "trials,",
    sum(!is.na(archive_log$last_success)), "with a successful capture\n\n")
