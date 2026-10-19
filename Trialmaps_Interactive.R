################################################################################
# Scent Work Trials Map Data Collection Script (NACSW + AKC Scent Work)
# Updated 2026: now captures COMPLETED (past) trials as well as upcoming ones.
#
# Why this update:
#   /calendar/trials already lists every trial back to 2012 on a single page,
#   sorted newest-first. Upcoming trials render in a "rich" format (a main row
#   plus a detail row with the event website link). Completed trials collapse
#   to a single bare row: <tr class="outertr"><div class="views-row">
#   <td>DATE</td><td>EVENT TEXT</td></div></tr> -- no classes, no link.
#
#   The previous parser only matched td.event-start / td.event-name, so it saw
#   upcoming trials only. This version detects an event row by "first cell looks
#   like a YYYY-MM-DD date," which works for BOTH layouts from the same single
#   request. No search form, no pagination, no per-year fetching needed.
################################################################################

# Load required libraries
library(rvest)
library(dplyr)
library(tidyr)
library(tidygeocoder)

# Set options
options(timeout = 300)
options(chromote.timeout = 120)

################################################################################
# CONFIGURATION
################################################################################

# How far back to keep trials. The page contains everything to 2012, but the
# map only needs ~1 year of history (its default window is 1 year past ->
# 2 years future), and geocoding 14 years of unique locations on the first run
# would be very slow against OSM/Nominatim. 2 years gives a comfortable buffer.
#
# To pull the ENTIRE archive instead, set YEARS_BACK <- 100 (expect a long
# first run while new locations are geocoded; subsequent runs use the cache).
YEARS_BACK <- 2

# Drop trials whose listing is marked "TRIAL CANCELLED".
DROP_CANCELLED <- TRUE

# Also pull AKC Scent Work trials from the AKC Event Search API (Step 2b).
# A failure there is logged and skipped, so the NACSW map still updates.
INCLUDE_AKC <- TRUE
AKC_YEARS_AHEAD <- 2   # how far into the future to query AKC
AKC_WINDOW_DAYS <- 90  # one request per window; the API caps at 1000 events

cat("\n============================================================\n")
cat("🗺️  Scent Work Trials Map - Data Collection (NACSW + AKC)\n")
cat("============================================================\n\n")

################################################################################
# STEP 1: SCRAPE TRIAL DATA FROM NACSW WEBSITE
################################################################################

cat("📥 Step 1: Scraping trial data from NACSW website...\n")

# URL of the NACSW trials calendar.
# No trailing slash: that form serves the calendar directly (the trailing-slash
# variant can add a redirect hop).
url <- "https://www.nacsw.net/calendar/trials"

# Fetch the page. The NACSW server tends to serve a different (non-calendar)
# response to generic library user-agents, so request with a browser-like UA.
ua <- paste0("Mozilla/5.0 (Windows NT 10.0; Win64; x64) ",
             "AppleWebKit/537.36 (KHTML, like Gecko) ",
             "Chrome/124.0.0.0 Safari/537.36")

# The page now lists the FULL archive (back to 2012), which the server can be
# slow to render. It is also fronted by SiteGround anti-bot protection that may
# serve a CAPTCHA challenge instead of the calendar (especially to shared/cloud
# IPs such as GitHub Actions runners). Allow plenty of time, send a browser-like
# request, detect the challenge, and retry with backoff.
FETCH_TIMEOUT <- 240   # seconds per attempt
FETCH_TRIES   <- 5     # attempts before giving up

# Headless-browser fallback (Option 1). When the lightweight httr request is met
# with SiteGround's sgcaptcha challenge, re-fetch with a real headless Chrome
# (via the 'chromote' package). Chrome executes the challenge's JavaScript,
# solves the proof-of-work, follows the redirect, and returns the real calendar
# HTML -- exactly as a normal browser would.
#   Requirements on the runner:
#     * the 'chromote' R package installed, and
#     * a Chrome/Chromium binary (GitHub's ubuntu-latest images ship one;
#       chromote finds it automatically, or point it at one via env var
#       CHROMOTE_CHROME=/path/to/chrome).
TRY_LIGHTWEIGHT_FIRST <- TRUE  # attempt one quick httr GET before going headless
HEADLESS_SETTLE       <- 8     # extra seconds to let calendar rows finish rendering

# True if the returned HTML is SiteGround's bot challenge rather than the page.
is_blocked_page <- function(txt) {
  grepl("sgcaptcha|/\\.well-known/sgcaptcha|captcha|Are you human",
        txt, ignore.case = TRUE)
}

# Fetch the calendar HTML as text, retrying on transport errors, HTTP errors,
# and anti-bot challenges. Returns the HTML text, or NULL tagged "blocked".
fetch_calendar_text <- function(url, ua, tries, timeout) {
  if (!requireNamespace("httr", quietly = TRUE)) {
    stop("Package 'httr' is required for a browser-like request. Add \"httr\" ",
         "to the workflow's install.packages() list.")
  }
  last_txt <- NULL
  for (k in seq_len(tries)) {
    resp <- tryCatch(
      httr::GET(
        url,
        httr::user_agent(ua),
        httr::add_headers(
          Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          `Accept-Language` = "en-US,en;q=0.9",
          `Upgrade-Insecure-Requests` = "1"
        ),
        httr::timeout(timeout)
      ),
      error = function(e) e
    )

    if (inherits(resp, "error")) {
      cat(sprintf("  • Attempt %d/%d: request error: %s\n",
                  k, tries, conditionMessage(resp)))
    } else {
      txt  <- httr::content(resp, as = "text", encoding = "UTF-8")
      code <- httr::status_code(resp)
      if (is_blocked_page(txt)) {
        cat(sprintf("  • Attempt %d/%d: host returned an anti-bot challenge ",
                    k, tries),
            "(SiteGround sgcaptcha)\n", sep = "")
        last_txt <- txt
      } else if (code >= 400) {
        cat(sprintf("  • Attempt %d/%d: HTTP %d\n", k, tries, code))
        last_txt <- txt
      } else {
        return(txt)  # success
      }
    }

    if (k < tries) Sys.sleep(min(60, 10 * k))  # linear backoff, capped at 60s
  }
  attr(last_txt, "blocked") <- TRUE
  last_txt
}

# --- Headless-browser fetch (Option 1: pass the SiteGround JS challenge) ------

# Configure Chrome for CI/container environments: GitHub Actions runs as root
# (Chrome then needs --no-sandbox), and containers often have a tiny /dev/shm
# (--disable-dev-shm-usage avoids crashes). Wrapped defensively so that a
# differing chromote version can never hard-stop the run here.
if (requireNamespace("chromote", quietly = TRUE)) {
  tryCatch(
    chromote::set_chrome_args(c(
      chromote::get_chrome_args(),
      "--no-sandbox",
      "--disable-dev-shm-usage"
    )),
    error = function(e) invisible(NULL)
  )
}

# Render the calendar in headless Chrome and return the fully-rendered HTML as
# text. Same contract as fetch_calendar_text(): returns HTML text on success,
# or a string tagged attr(, "blocked") = TRUE if the challenge never cleared.
fetch_calendar_text_live <- function(url, tries, timeout, settle) {
  if (!requireNamespace("chromote", quietly = TRUE)) {
    stop("Package 'chromote' is required for the headless-browser fallback. ",
         "Add \"chromote\" to the workflow's install.packages() list, and make ",
         "sure a Chrome/Chromium binary is available on the runner.")
  }

  # TRUE once the rendered DOM is the real calendar: no challenge markers left,
  # and at least one YYYY-MM-DD date (i.e. event rows) is present.
  looks_ready <- function(html) {
    !is.null(html) && nzchar(html) &&
      !is_blocked_page(html) && grepl("\\d{4}-\\d{2}-\\d{2}", html)
  }

  # Serialize the current live DOM (post-JavaScript) to an HTML string.
  get_html <- function(b) {
    tryCatch(
      b$Runtime$evaluate("document.documentElement.outerHTML")$result$value,
      error = function(e) NULL
    )
  }

  last_html <- NULL
  for (k in seq_len(tries)) {
    b <- tryCatch(chromote::ChromoteSession$new(), error = function(e) e)
    if (inherits(b, "error")) {
      cat(sprintf("  • Headless attempt %d/%d: could not start Chrome: %s\n",
                  k, tries, conditionMessage(b)))
      if (k < tries) Sys.sleep(min(60, 10 * k))
      next
    }

    html <- tryCatch({
      b$Page$navigate(url, wait_ = TRUE)
      # Chrome auto-solves the sgcaptcha challenge and redirects to the real
      # page. Poll the live DOM until that has happened (or time runs out).
      deadline <- Sys.time() + timeout
      cur <- get_html(b)
      while (!looks_ready(cur) && Sys.time() < deadline) {
        Sys.sleep(2)
        cur <- get_html(b)
      }
      Sys.sleep(settle)   # let any late-rendering rows settle
      get_html(b)         # final snapshot
    }, error = function(e) e)

    tryCatch(b$close(), error = function(e) invisible(NULL))

    if (inherits(html, "error")) {
      cat(sprintf("  • Headless attempt %d/%d: render error: %s\n",
                  k, tries, conditionMessage(html)))
    } else if (looks_ready(html)) {
      cat(sprintf("  • Headless attempt %d/%d: challenge cleared, page rendered\n",
                  k, tries))
      return(html)  # success
    } else {
      cat(sprintf("  • Headless attempt %d/%d: challenge did not clear ",
                  k, tries), "(SiteGround sgcaptcha)\n", sep = "")
      last_html <- html
    }

    if (k < tries) Sys.sleep(min(60, 10 * k))
  }

  if (is.null(last_html)) last_html <- ""   # so the attribute can attach
  attr(last_html, "blocked") <- TRUE
  last_html
}

# Fetch strategy: try one quick lightweight request first (works whenever the
# runner IP is not flagged), then fall back to headless Chrome, which can pass
# the SiteGround JavaScript challenge.
page_text <- NULL

if (TRY_LIGHTWEIGHT_FIRST) {
  cat("  • Trying a lightweight request first...\n")
  page_text <- tryCatch(
    fetch_calendar_text(url, ua, tries = 1, timeout = 60),
    error = function(e) {
      cat("  • Lightweight request errored:", conditionMessage(e), "\n")
      NULL
    }
  )
}

if (is.null(page_text) || isTRUE(attr(page_text, "blocked"))) {
  cat("  • Falling back to a headless browser to pass the anti-bot challenge...\n")
  page_text <- tryCatch(
    fetch_calendar_text_live(url, FETCH_TRIES, FETCH_TIMEOUT, HEADLESS_SETTLE),
    error = function(e) {
      stop("❌ Error: headless-browser fetch could not run: ",
           conditionMessage(e))
    }
  )
}

if (is.null(page_text) || isTRUE(attr(page_text, "blocked"))) {
  stop("❌ Blocked: even a headless browser could not get past SiteGround's\n",
       "   anti-bot challenge on every attempt. The challenge is served before\n",
       "   the calendar, so nothing could be scraped from this IP.\n",
       "   Remaining options:\n",
       "   (1) re-run later (the challenge is often intermittent, and GitHub\n",
       "       rotates runner IPs between runs);\n",
       "   (2) run from a non-flagged IP (self-hosted runner or a local cron\n",
       "       job on a residential connection) -- the most reliable fix;\n",
       "   (3) ask NACSW to allowlist your scraper or provide a data export.")
}

webpage <- read_html(page_text)

# --- Helpers ---------------------------------------------------------------

# Matches a date at the start of a cell, e.g. "2026-06-27".
date_pat <- "^\\s*\\d{4}-\\d{2}-\\d{2}"

# Get the trimmed text of every descendant <td> of a row. Using descendant
# (not direct-child) selection is essential: completed-trial rows nest their
# <td> cells inside a <div class="views-row">, so the cells are one level
# deeper than in upcoming rows. rvest's html_elements(row, "td") returns
# descendants, which covers both layouts.
td_text_vec <- function(row) {
  tds <- row %>% html_elements("td")
  if (length(tds) == 0) return(character(0))
  vapply(tds, function(td) trimws(html_text2(td)), character(1))
}

# --- Walk the rows ---------------------------------------------------------

all_rows <- webpage %>% html_elements("tr")

# Diagnostics: confirm we actually received the calendar page.
page_title <- webpage %>% html_element("title") %>% html_text2()
n_event_rows <- sum(vapply(all_rows, function(r) {
  t <- td_text_vec(r); length(t) >= 2 && grepl(date_pat, t[1])
}, logical(1)))

cat("  • Page title:", page_title, "\n")
cat("  • <tr> rows found:", length(all_rows), "\n")
cat("  • date-led event rows found:", n_event_rows, "\n")

if (n_event_rows == 0) {
  cat("\n⚠️  No date-led event rows were found. Either the page layout\n")
  cat("    changed, or the server returned a non-calendar / blocked page.\n")
  cat("    First 2000 characters of what was received:\n\n")
  cat(substr(as.character(webpage), 1, 2000), "\n\n")
  stop("❌ Error: No events found. Website structure may have changed again, ",
       "or access was blocked.")
}

trials_raw  <- list()
trial_index <- 0
n_rows <- length(all_rows)

i <- 1
while (i <= n_rows) {
  cells <- td_text_vec(all_rows[[i]])

  # An event row (either layout) starts with a date in its first cell and has
  # at least a second cell holding the event text.
  if (length(cells) >= 2 && grepl(date_pat, cells[1])) {

    date       <- substr(trimws(cells[1]), 1, 10)   # keep just YYYY-MM-DD
    event_text <- trimws(cells[2])

    # Find the event website link. For upcoming trials it lives in the detail
    # row(s) that follow this main row; completed trials have none. Scan
    # forward until the next event row, taking the first real http(s) link
    # (ignoring the "#" placeholder in the name cell and any mailto: links).
    actual_event_link <- NA_character_
    j <- i + 1
    while (j <= n_rows) {
      jcells <- td_text_vec(all_rows[[j]])
      if (length(jcells) >= 2 && grepl(date_pat, jcells[1])) break  # next event

      links <- all_rows[[j]] %>% html_elements("a") %>% html_attr("href")
      for (link in links) {
        if (!is.na(link) && grepl("^https?://", link) && !grepl("^mailto:", link)) {
          actual_event_link <- link
          break
        }
      }
      if (!is.na(actual_event_link)) break
      j <- j + 1
    }

    trial_index <- trial_index + 1
    trials_raw[[trial_index]] <- data.frame(
      Date      = date,
      EventText = event_text,
      EventLink = actual_event_link,
      stringsAsFactors = FALSE
    )
  }

  i <- i + 1
}

if (length(trials_raw) == 0) {
  stop("❌ Error: Found date-led rows but parsed 0 events.")
}

trials_raw <- bind_rows(trials_raw)

# Remove any empty rows
trials_raw <- trials_raw %>%
  filter(!is.na(Date), !is.na(EventText), EventText != "")

cat("✓ Scraped", nrow(trials_raw), "events from website\n\n")

################################################################################
# STEP 2: PARSE AND CLEAN DATA
################################################################################

cat("🧹 Step 2: Parsing and cleaning data...\n")

# Drop cancelled trials (the listing prefixes the name with "TRIAL CANCELLED").
if (DROP_CANCELLED) {
  n_before <- nrow(trials_raw)
  trials_raw <- trials_raw %>%
    filter(!grepl("TRIAL CANCELLED", EventText, ignore.case = TRUE))
  cat("  • Removed", n_before - nrow(trials_raw), "cancelled trials\n")
}

# Parse event text. Format: "Trial Types - Location hosted by Host"
# Example: "NW3/ELT Trials - Waymart, PA hosted by Your Dog's Place, LLC"
trials_clean <- trials_raw %>%
  mutate(
    # Clean date format
    Date = as.Date(Date),

    # Strip any stray "TRIAL CANCELLED" text if cancelled rows were kept
    EventText = trimws(gsub("TRIAL CANCELLED", "", EventText, ignore.case = TRUE)),

    # Extract trial types (everything before " - ")
    TrialTypes_Raw = sub(" -.*", "", EventText),

    # Clean up trial types - remove " Trials" and normalize separators
    TrialTypes = gsub(" Trials?", "", TrialTypes_Raw),
    TrialTypes = gsub("/", ", ", TrialTypes),
    TrialTypes = trimws(TrialTypes),

    # Extract location and host (everything after " - ")
    LocationHost = sub(".*? - ", "", EventText),

    # Extract location (everything before " hosted by")
    Location = sub(" hosted by.*", "", LocationHost),
    Location = trimws(Location),

    # Extract host (everything after "hosted by ")
    Host = sub(".*hosted by ", "", LocationHost),
    Host = trimws(Host),

    # Count number of trial types
    EventCount = lengths(regmatches(TrialTypes, gregexpr(",", TrialTypes))) + 1
  ) %>%
  select(-EventText, -TrialTypes_Raw, -LocationHost) %>%
  filter(!is.na(Date), !is.na(Location), Location != "")

# Keep only trials within the configured look-back window (future always kept).
earliest_date <- Sys.Date() - 365L * YEARS_BACK
n_before <- nrow(trials_clean)
trials_clean <- trials_clean %>% filter(Date >= earliest_date)
cat("  • Date cutoff:", format(earliest_date), "(keeping", YEARS_BACK,
    "years back + all future)\n")
cat("  • Dropped", n_before - nrow(trials_clean), "trials older than cutoff\n")

cat("✓ Cleaned", nrow(trials_clean), "valid trials\n")
cat("  • Date range:", format(min(trials_clean$Date)), "to",
    format(max(trials_clean$Date)), "\n")
cat("  • Unique locations:", length(unique(trials_clean$Location)), "\n\n")

trials_clean$Org <- "NACSW"
trials_clean$AKC_Lat <- NA_real_   # AKC rows (Step 2b) arrive with coordinates
trials_clean$AKC_Lon <- NA_real_

################################################################################
# STEP 2b: AKC SCENT WORK TRIALS (AKC EVENT SEARCH API)
################################################################################
#
# The old ColdFusion calendar (apps.akc.org/apps/event_calendar) is hard to
# parse, but the newer Event Search app (webapps.akc.org/event-search/) is
# backed by an undocumented JSON API. We POST the same body the app sends
# (captured from browser devtools) and get structured events back, including
# venue coordinates. Gotchas: the server validates the whole body and its error
# messages are misleading; dates are MM/DD/YYYY; dateRange.type must be
# "event"; string values often carry trailing spaces.
#
# If AKC changes the API: open webapps.akc.org/event-search/, search Scent
# Work, and copy the new request body from the Network tab into AKC_BODY_JSON.

AKC_ENDPOINT <- "https://webapps.akc.org/event-search/api/search/events"

AKC_BODY_JSON <- '{"address":{"eventSetting":{"indoor":true,"outdoor":true,"outsideCovered":true},"location":{"cityState":"","latitude":0,"longitude":0,"zipCode":null},"radius":"any","searchByState":false,"searchByCity":false,"searchText":"All Cities & States"},"breedCode":"999","breedName":"Any AKC Recognized or FSS Breed","breedId":"ANY_AKC_FSS","dateRange":{"from":"12/01/2026","to":"12/31/2026","type":"event"},"competition":{"items":[{"selected":true,"value":{"compType":"SCWK"},"label":"Scent Work (SCWK)"}],"filters":[]}}'

# Trimmed string from a possibly-NULL JSON value.
akc_str <- function(x) if (is.null(x)) NA_character_ else trimws(as.character(x))
akc_num <- function(x) if (is.null(x)) NA_real_ else suppressWarnings(as.numeric(x))

# POST one date window. Returns the list of event records (possibly empty).
fetch_akc_window <- function(from, to, tries = 3, timeout = 120) {
  body <- jsonlite::fromJSON(AKC_BODY_JSON, simplifyVector = FALSE)
  body$dateRange$from <- format(from, "%m/%d/%Y")
  body$dateRange$to   <- format(to,   "%m/%d/%Y")
  # Serialize ourselves: httr's encode = "json" would turn "zipCode": null
  # into {}, and this API rejects bodies that differ from what the app sends.
  body <- jsonlite::toJSON(body, auto_unbox = TRUE, null = "null")

  for (k in seq_len(tries)) {
    resp <- tryCatch(
      httr::POST(
        AKC_ENDPOINT,
        body = body, httr::content_type_json(),
        httr::user_agent(ua),
        httr::add_headers(
          Accept  = "application/json",
          Origin  = "https://webapps.akc.org",
          Referer = "https://webapps.akc.org/event-search/"
        ),
        httr::timeout(timeout)
      ),
      error = function(e) e
    )
    if (inherits(resp, "error")) {
      cat(sprintf("    attempt %d/%d: request error: %s\n",
                  k, tries, conditionMessage(resp)))
    } else if (httr::status_code(resp) >= 400) {
      cat(sprintf("    attempt %d/%d: HTTP %d: %s\n", k, tries,
                  httr::status_code(resp),
                  substr(httr::content(resp, as = "text", encoding = "UTF-8"), 1, 200)))
    } else {
      parsed <- httr::content(resp, as = "parsed", simplifyVector = FALSE)
      return(if (is.null(parsed$events)) list() else parsed$events)
    }
    if (k < tries) Sys.sleep(10 * k)
  }
  stop("AKC request failed for ", format(from), " to ", format(to))
}

# One AKC event record -> one row in the same shape as trials_clean.
akc_record_to_row <- function(e) {
  city  <- akc_str(e$city)
  state <- akc_str(e$state)
  event_no <- akc_str(e$eventNumber)
  data.frame(
    Date       = as.Date(substr(akc_str(e$startDate), 1, 10)),
    Location   = paste0(city, ", ", state),
    Host       = akc_str(e$clubName),
    EventLink  = if (is.na(event_no) || event_no == "") NA_character_ else
      paste0("https://www.apps.akc.org/apps/events/search/index_results.cfm",
             "?action=plan&event_number=", event_no),
    TrialTypes = "AKC Scent Work",
    EventCount = 1L,
    Status     = akc_str(e$eventStatus),
    EventNo    = event_no,
    AKC_Lat    = akc_num(e$site$coordinates$lat),
    AKC_Lon    = akc_num(e$site$coordinates$lon),
    stringsAsFactors = FALSE
  )
}

# Set when this run's AKC fetch fails; Step 5 then carries over the AKC
# trials already on the map (see carry_over_akc) instead of dropping them.
akc_failed <- FALSE

if (INCLUDE_AKC) {
  cat("🐕 Step 2b: Fetching AKC Scent Work trials...\n")

  akc_clean <- tryCatch({
    starts <- seq(earliest_date, Sys.Date() + 365L * AKC_YEARS_AHEAD,
                  by = AKC_WINDOW_DAYS)
    records <- list()
    for (s in as.list(starts)) {
      e <- s + AKC_WINDOW_DAYS - 1
      ev <- fetch_akc_window(s, e)
      cat(sprintf("  • %s to %s: %d events\n", format(s), format(e), length(ev)))
      if (length(ev) >= 1000) {
        cat("  ⚠️  Hit the 1000-event cap; lower AKC_WINDOW_DAYS.\n")
      }
      records <- c(records, ev)
      Sys.sleep(2)  # be polite to an undocumented API
    }
    if (length(records) == 0) stop("AKC returned no Scent Work events")

    akc <- bind_rows(lapply(records, akc_record_to_row)) %>%
      filter(!is.na(Date), !grepl("^NA, |, NA$", Location)) %>%
      distinct(EventNo, .keep_all = TRUE)   # windows can overlap multi-day events

    if (DROP_CANCELLED) {
      n_before <- nrow(akc)
      akc <- akc %>% filter(!grepl("cancel", Status, ignore.case = TRUE))
      cat("  • Removed", n_before - nrow(akc), "cancelled AKC events\n")
    }

    akc %>%
      filter(Date >= earliest_date) %>%
      mutate(Org = "AKC") %>%
      select(-Status, -EventNo)
  }, error = function(e) {
    cat("  ⚠️  Skipping AKC this run:", conditionMessage(e), "\n")
    akc_failed <<- TRUE
    NULL
  })

  if (!is.null(akc_clean)) {
    cat("✓ Added", nrow(akc_clean), "AKC Scent Work events (",
        sum(!is.na(akc_clean$AKC_Lat)), "with AKC-supplied coordinates)\n\n")
    trials_clean <- bind_rows(trials_clean, akc_clean)
  } else {
    cat("\n")
  }
}

################################################################################
# STEP 3: GEOCODE LOCATIONS (WITH USA SUFFIX)
################################################################################

cat("📍 Step 3: Geocoding locations...\n")

# Prepare location strings with ", USA" suffix for accurate geocoding
trials_clean <- trials_clean %>%
  mutate(
    Location_Geocode = case_when(
      grepl("USA|United States|U.S.A.|U.S.", Location, ignore.case = TRUE) ~ Location,
      TRUE ~ paste0(Location, ", USA")
    )
  )

cat("  • Added USA suffix to",
    sum(!grepl("USA|United States", trials_clean$Location, ignore.case = TRUE)),
    "locations\n")

# Load existing geocode cache (if it exists)
cache_file <- "geocode_cache.csv"

if (file.exists(cache_file)) {
  geocode_cache <- read.csv(cache_file, stringsAsFactors = FALSE)
  cat("  • Loaded", nrow(geocode_cache), "cached locations\n")
} else {
  geocode_cache <- data.frame(
    Location = character(), lat = numeric(), long = numeric(),
    stringsAsFactors = FALSE
  )
  cat("  • No cache found, will geocode all locations\n")
}

# Normalize the cache schema. Past caches may have the longitude split across
# two columns ('lon' and 'long') because tidygeocoder's output column name has
# varied by version. Consolidate into a single numeric 'long' and force both
# coordinate columns numeric, so a fully-cached run (no geocoding) still yields
# numeric coordinates downstream.
geocode_cache$lat  <- suppressWarnings(as.numeric(geocode_cache$lat))
if ("lon" %in% names(geocode_cache)) {
  geocode_cache$lon  <- suppressWarnings(as.numeric(geocode_cache$lon))
  geocode_cache$long <- suppressWarnings(as.numeric(geocode_cache$long))
  geocode_cache$long <- dplyr::coalesce(geocode_cache$long, geocode_cache$lon)
  geocode_cache$lon  <- NULL
  cat("  • Normalized cache: merged 'lon' into 'long'\n")
} else {
  geocode_cache$long <- suppressWarnings(as.numeric(geocode_cache$long))
}

# Find locations that need geocoding
locations_to_geocode <- trials_clean %>%
  filter(is.na(AKC_Lat) | is.na(AKC_Lon)) %>%
  distinct(Location_Geocode) %>%
  filter(!Location_Geocode %in% geocode_cache$Location)

if (nrow(locations_to_geocode) > 0) {
  cat("  • Geocoding", nrow(locations_to_geocode), "new locations...\n")
  cat("    (Pulling past trials adds historical towns; the FIRST run after\n")
  cat("     this update may take a while. Cached afterward.)\n")

  new_coords <- locations_to_geocode %>%
    geocode(Location_Geocode, method = 'osm', verbose = FALSE)

  # tidygeocoder may return the longitude column as 'lon' depending on version.
  # Standardize to 'long' so new cache rows match the existing cache schema.
  if ("lon" %in% names(new_coords) && !("long" %in% names(new_coords))) {
    new_coords <- new_coords %>% rename(long = lon)
  }

  failed_geocodes <- new_coords %>% filter(is.na(lat) | is.na(long))
  if (nrow(failed_geocodes) > 0) {
    cat("  ⚠️  Warning:", nrow(failed_geocodes), "locations failed to geocode:\n")
    print(failed_geocodes$Location_Geocode)
  }

  new_coords <- new_coords %>% rename(Location = Location_Geocode)
  geocode_cache <- bind_rows(geocode_cache, new_coords)
  write.csv(geocode_cache, cache_file, row.names = FALSE)
  cat("  ✓ Geocoded and cached", nrow(new_coords), "new locations\n")
} else {
  cat("  ✓ All locations already in cache\n")
}

# Join coordinates to trials
trials_with_coords <- trials_clean %>%
  left_join(geocode_cache, by = c("Location_Geocode" = "Location")) %>%
  rename(Latitude = lat, Longitude = long) %>%
  # Prefer the venue coordinates AKC supplies over the town-level geocode
  mutate(Latitude  = coalesce(AKC_Lat, Latitude),
         Longitude = coalesce(AKC_Lon, Longitude)) %>%
  select(-AKC_Lat, -AKC_Lon)

missing_coords <- trials_with_coords %>% filter(is.na(Latitude) | is.na(Longitude))
if (nrow(missing_coords) > 0) {
  cat("  ⚠️  Warning:", nrow(missing_coords), "trials have missing coordinates\n")
}

cat("\n")

################################################################################
# STEP 4: GROUP TRIALS BY DATE AND LOCATION
################################################################################

cat("📦 Step 4: Grouping trials by date and location...\n")

JITTER_AMOUNT <- 0.05  # About 3-5 miles, visible at state level

# One row per date + location (+ club, for AKC). Every event link is kept as
# a "YYYY-MM-DD URL" item in EventLinks, so nothing is lost when rows merge;
# EventLink keeps the first one for anything that expects a single link.
trials_days <- trials_with_coords %>%
  filter(!is.na(Latitude), !is.na(Longitude)) %>%
  mutate(
    LinkItem = ifelse(is.na(EventLink), NA_character_,
                      paste(format(Date), EventLink)),
    # Different AKC clubs can hold trials in the same town on the same day
    HostKey  = ifelse(Org == "AKC", Host, "")
  ) %>%
  group_by(Date, Location, Org, HostKey) %>%
  summarize(
    Host       = first(Host),
    EventLink  = first(EventLink),
    EventLinks = paste(unique(na.omit(LinkItem)), collapse = " ; "),
    # Combine all event types across rows for this date+location, de-duplicated
    # (e.g. "NW3, ELT" + "ELT" -> "NW3, ELT"). unique() preserves first-seen
    # order, so level ordering is retained.
    TrialTypes = {
      t <- trimws(unlist(strsplit(TrialTypes, ",\\s*")))
      paste(unique(t[t != ""]), collapse = ", ")
    },
    Latitude_Base  = first(Latitude),
    Longitude_Base = first(Longitude),
    .groups = 'drop'
  )

# AKC lists each day of a multi-day trial (and each trial within a day) as a
# separate event. Merge runs of consecutive days by the same club at the same
# location into one map entry spanning Date..EndDate, keeping every link.
# NACSW rows stay one entry per day.
trials_grouped <- trials_days %>%
  arrange(Org, Location, HostKey, Date) %>%
  group_by(Org, Location, HostKey) %>%
  mutate(Run = if (first(Org) == "AKC") cumsum(c(TRUE, diff(Date) > 1))
               else row_number()) %>%
  group_by(Org, Location, HostKey, Run) %>%
  summarize(
    EndDate    = max(Date),   # before Date, which summarize() then overwrites
    Date       = min(Date),
    Host       = first(Host),
    EventLink  = first(EventLink),
    EventLinks = paste(EventLinks[EventLinks != ""], collapse = " ; "),
    TrialTypes = {
      t <- trimws(unlist(strsplit(TrialTypes, ",\\s*")))
      paste(unique(t[t != ""]), collapse = ", ")
    },
    Latitude_Base  = first(Latitude_Base),
    Longitude_Base = first(Longitude_Base),
    .groups = 'drop'
  ) %>%
  mutate(
    # AKC: number of AKC events (event numbers) merged; NACSW: trial types
    EventCount = ifelse(Org == "AKC",
                        pmax(1L, lengths(strsplit(EventLinks, " ; "))),
                        lengths(strsplit(TrialTypes, ",\\s*"))),
    Latitude   = Latitude_Base  + runif(n(), -JITTER_AMOUNT, JITTER_AMOUNT),
    Longitude  = Longitude_Base + runif(n(), -JITTER_AMOUNT, JITTER_AMOUNT)
  ) %>%
  select(-Latitude_Base, -Longitude_Base, -Run, -HostKey)

cat("✓ Grouped into", nrow(trials_grouped), "unique trials (one pin per trial)\n")
cat("  • Total event types:", sum(trials_grouped$EventCount), "\n\n")

################################################################################
# STEP 5: CREATE FINAL DATASET
################################################################################

cat("💾 Step 5: Creating final dataset...\n")

# Wayback Machine copies of NACSW host pages, captured while each trial was
# upcoming by archive_host_pages.R (which runs after this script, so a new
# capture shows up on the following run).
archive_file <- "archive_log.csv"
archive_links <- if (file.exists(archive_file)) {
  read.csv(archive_file, stringsAsFactors = FALSE, colClasses = "character") %>%
    filter(snapshot_timestamp != "") %>%
    transmute(Date = as.Date(Date), Location, Org = "NACSW",
              ArchiveLink = paste0("https://web.archive.org/web/",
                                   snapshot_timestamp, "/", url)) %>%
    distinct(Date, Location, Org, .keep_all = TRUE)
} else {
  data.frame(Date = as.Date(character()), Location = character(),
             Org = character(), ArchiveLink = character())
}

# Joined by trial, not URL: completed NACSW trials no longer carry a link.
trials_final <- trials_grouped %>%
  left_join(archive_links, by = c("Date", "Location", "Org")) %>%
  select(Date, EndDate, Location, Org, Host, EventLink, EventLinks, ArchiveLink,
         TrialTypes, EventCount, Latitude, Longitude) %>%
  arrange(Date, Location)

cat("  • Trials with an archived host page:", sum(!is.na(trials_final$ArchiveLink)), "\n")

# AKC fetch failed: keep the AKC trials from the map's current data.js rather
# than publishing a map with no AKC trials, and remember how old they are.
# akc_updated.txt (written only then) tells the workflow which date to show for
# the AKC data; when AKC was fetched fine, the header just shows DATA_UPDATED.
akc_date_file <- "akc_updated.txt"
if (file.exists(akc_date_file)) file.remove(akc_date_file)

carry_over_akc <- function(old_file = "docs/data.js") {
  if (!file.exists(old_file)) return(NULL)
  txt <- paste(readLines(old_file, warn = FALSE, encoding = "UTF-8"), collapse = "\n")
  json <- sub("(?s)^.*?const TRIALS_DATA\\s*=\\s*", "", txt, perl = TRUE)
  json <- sub("(?s);\\s*$", "", json, perl = TRUE)
  old <- tryCatch(jsonlite::fromJSON(json), error = function(e) NULL)
  if (is.null(old) || !"Org" %in% names(old)) return(NULL)
  # Date of the last successful AKC fetch: AKC_UPDATED if the old file has it
  # (it was itself a carry-over), otherwise that run's DATA_UPDATED.
  grab <- function(name) {
    m <- regmatches(txt, regexec(paste0("const ", name, ' = "([^"]*)"'), txt))[[1]]
    if (length(m) == 2) m[2] else NA_character_
  }
  as_of <- grab("AKC_UPDATED")
  if (is.na(as_of)) as_of <- grab("DATA_UPDATED")
  if (!"EndDate" %in% names(old)) old$EndDate <- old$Date
  rows <- old %>%
    filter(Org == "AKC") %>%
    mutate(Date = as.Date(Date), EndDate = as.Date(EndDate)) %>%
    filter(EndDate >= earliest_date)
  list(rows = rows, as_of = as_of)
}

if (INCLUDE_AKC && akc_failed) {
  prev <- carry_over_akc()
  if (!is.null(prev) && nrow(prev$rows) > 0) {
    trials_final <- bind_rows(trials_final, prev$rows) %>% arrange(Date, Location)
    writeLines(prev$as_of, akc_date_file)
    cat("  • AKC fetch failed: kept", nrow(prev$rows),
        paste0("AKC trials from the previous data (as of ", prev$as_of, ")\n"))
  } else {
    cat("  ⚠️  AKC fetch failed and no previous AKC data to keep\n")
  }
}

date_range <- range(trials_final$Date)
unique_locations <- length(unique(trials_final$Location))

cat("✓ Final dataset ready\n")
cat("  • Trials:", nrow(trials_final), "\n")
cat("  • Date range:", format(date_range[1]), "to", format(date_range[2]), "\n")
cat("  • Unique locations:", unique_locations, "\n\n")

################################################################################
# STEP 6: SAVE TO CSV
################################################################################

cat("💾 Step 6: Saving to CSV file...\n")

output_file <- "trials_for_google_sheets.csv"
write.csv(trials_final, output_file, row.names = FALSE)

cat("✓ CSV file created:", output_file, "\n")
cat("  • File size:", file.size(output_file), "bytes\n\n")

################################################################################
# COMPLETION SUMMARY
################################################################################

cat("============================================================\n")
cat("✅ SUCCESS! Data collection complete.\n")
cat("============================================================\n\n")

cat("📊 Summary:\n")
cat("  • Total trials:", nrow(trials_final), "\n")
cat("  • By organization:",
    paste(names(table(trials_final$Org)), table(trials_final$Org),
          sep = " = ", collapse = ", "), "\n")
cat("  • Total events:", sum(trials_final$EventCount), "\n")
cat("  • Date range:", format(date_range[1]), "to", format(date_range[2]), "\n")
cat("  • Unique locations:", unique_locations, "\n\n")

cat("💡 Notes:\n")
cat("  • Now parses BOTH upcoming (rich) and completed (bare) trial rows.\n")
cat("  • Past trials have no event website link (EventLink = NA).\n")
cat("  • YEARS_BACK =", YEARS_BACK, "controls how far back history is kept.\n")
cat("  • Cancelled trials", if (DROP_CANCELLED) "are removed." else "are kept.", "\n\n")
