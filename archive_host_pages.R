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
MAX_PER_RUN     <- 60   # cap on new capture requests per run (a backlog clears over several weeks)
REQUEST_DELAY   <- 12   # seconds between requests (SPN2 is rate-limited)
STATUS_WAIT     <- 120  # seconds to wait before checking this run's jobs
STATUS_ROUND    <- 60   # seconds between rounds of status checks
# Time budget. The workflow step is killed at 90 min, so stop well before:
# submissions end at SUBMIT_BUDGET, status checks at TOTAL_BUDGET. Jobs still
# pending then are logged with their job id and checked on the next run.
SUBMIT_BUDGET   <- 40   # minutes
TOTAL_BUDGET    <- 60   # minutes
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
started <- Sys.time()
minutes_used <- function() as.numeric(difftime(Sys.time(), started, units = "mins"))

# --- Archive log -------------------------------------------------------------
# One row per NACSW trial (Date + Location) and its host page URL: the latest
# capture made before the trial, plus the last request, its outcome and SPN2
# job id. Keyed by trial, not URL, because the NACSW calendar drops a trial's
# link once the trial is over, and hosts reuse one page for several trials.
# Snapshot timestamps are Wayback's YYYYMMDDhhmmss. The log is written after
# every change, so a run that is cut short keeps what it did.
LOG_COLS <- c("Date", "Location", "url", "last_success", "snapshot_timestamp",
              "last_requested", "last_status", "last_message", "job_id")

archive_log <- if (file.exists(LOG_FILE)) {
  read.csv(LOG_FILE, stringsAsFactors = FALSE, colClasses = "character")
} else {
  setNames(data.frame(matrix(character(), 0, length(LOG_COLS)),
                      stringsAsFactors = FALSE), LOG_COLS)
}
for (col in setdiff(LOG_COLS, names(archive_log))) archive_log[[col]] <- ""
archive_log <- archive_log[LOG_COLS]
archive_log[is.na(archive_log)] <- ""
cat("  • Archive log:", nrow(archive_log), "trials\n")

save_log <- function() {
  archive_log <<- archive_log[order(archive_log$Date, archive_log$Location), ]
  write.csv(archive_log, LOG_FILE, row.names = FALSE)
}

# Record a capture request for every upcoming trial that uses this URL.
log_request <- function(url, status, message = "", job_id = "") {
  rows <- upcoming %>% filter(url == !!url) %>% select(Date, Location, url)
  new_rows <- anti_join(rows, archive_log, by = c("Date", "Location", "url"))
  if (nrow(new_rows) > 0) {
    archive_log <<- bind_rows(archive_log, mutate(new_rows,
      last_success = "", snapshot_timestamp = "", last_requested = "",
      last_status = "", last_message = "", job_id = ""))
  }
  hit <- paste(archive_log$Date, archive_log$Location, archive_log$url) %in%
    paste(rows$Date, rows$Location, rows$url)
  archive_log$last_requested[hit] <<- format(today)
  archive_log$last_status[hit]    <<- status
  archive_log$last_message[hit]   <<- substr(trimws(message), 1, 200)
  archive_log$job_id[hit]         <<- job_id
  save_log()
}

# Record the outcome of a job on every trial row waiting on it.
log_result <- function(job_id, st) {
  hit <- archive_log$job_id == job_id
  status <- if (is.null(st$status)) "pending" else st$status
  if (identical(status, "pending")) return(invisible(FALSE))
  ok <- identical(status, "success") && !is.null(st$timestamp)
  if (ok) {
    archive_log$last_success[hit]       <<- format(as.Date(substr(st$timestamp, 1, 8), "%Y%m%d"))
    archive_log$snapshot_timestamp[hit] <<- st$timestamp
  }
  archive_log$last_status[hit]  <<- status
  archive_log$last_message[hit] <<- substr(trimws(paste(c(st$status_ext, st$message),
                                                         collapse = " ")), 1, 200)
  archive_log$job_id[hit]       <<- ""
  save_log()
  invisible(TRUE)
}

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
  mutate(last_success   = as.Date(na_if(last_success, "")),
         last_requested = as.Date(na_if(last_requested, ""))) %>%
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
  # Don't re-request a URL requested in the last week (failed, or still pending)
  filter(is.na(last_requested) | last_requested < today - 6 |
           last_status == "success") %>%
  arrange(next_trial) %>%   # soonest trials first: they disappear first
  head(MAX_PER_RUN)

cat("  • Upcoming NACSW host pages needing a capture:", nrow(candidates), "\n\n")

# --- SPN2 calls ----------------------------------------------------------------
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

# Check every pending job once per round until all are done or time runs out.
poll_jobs <- function(job_ids, budget_min) {
  pending <- unique(job_ids[job_ids != ""])
  while (length(pending) > 0 && minutes_used() < budget_min) {
    still <- character()
    for (j in pending) {
      if (minutes_used() >= budget_min) { still <- c(still, j); next }
      st <- check_status(j)
      if (isTRUE(st$throttled)) {
        cat("  ⚠️  Status checks rate-limited; leaving the rest for next run.\n")
        return(invisible(NULL))
      }
      if (!log_result(j, st)) still <- c(still, j)
      Sys.sleep(1)
    }
    pending <- still
    if (length(pending) > 0 && minutes_used() < budget_min) Sys.sleep(STATUS_ROUND)
  }
  if (length(pending) > 0) {
    cat("  •", length(pending), "captures still pending; will check next run.\n")
  }
}

# --- 1. Results of jobs left pending by earlier runs ---------------------------
old_jobs <- unique(archive_log$job_id[archive_log$last_status == "pending" &
                                        archive_log$job_id != ""])
if (length(old_jobs) > 0) {
  cat("  • Checking", length(old_jobs), "captures pending from earlier runs...\n")
  poll_jobs(old_jobs, budget_min = 10)
}

# --- 2. Submit new capture requests ------------------------------------------
submitted <- character()
for (i in seq_len(nrow(candidates))) {
  if (minutes_used() >= SUBMIT_BUDGET) {
    cat("  • Submission time budget used; remaining pages wait for next run.\n")
    break
  }
  url <- candidates$url[i]
  r <- submit_capture(url)
  cat(sprintf("  [%d/%d] %s -> %s\n", i, nrow(candidates), url,
              if (is.na(r$job_id)) paste("not submitted:", r$message) else "submitted"))
  if (is.na(r$job_id)) {
    log_request(url, "error", r$message)
  } else {
    log_request(url, "pending", job_id = r$job_id)
    submitted <- c(submitted, r$job_id)
  }
  if (isTRUE(r$throttled) ||
      grepl("too many|rate|limit", r$message, ignore.case = TRUE)) {
    cat("  ⚠️  Rate-limited by the Archive; stopping submissions for this run.\n")
    break
  }
  Sys.sleep(REQUEST_DELAY)
}

# --- 3. Results of this run's jobs ---------------------------------------------
if (length(submitted) > 0) {
  cat("\n  • Waiting", STATUS_WAIT, "s for captures to finish...\n")
  Sys.sleep(STATUS_WAIT)
  poll_jobs(submitted, budget_min = TOTAL_BUDGET)
}

counts <- table(archive_log$last_status[archive_log$last_requested == format(today)])
cat("\n✓ Requests made today:",
    if (length(counts)) paste(names(counts), counts, sep = " = ", collapse = ", ") else "none",
    "\n")
cat("  • Archive log holds", nrow(archive_log), "trials,",
    sum(archive_log$snapshot_timestamp != ""), "with a successful capture",
    sprintf("(%.0f min)\n\n", minutes_used()))
