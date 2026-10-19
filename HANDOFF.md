# Scent Work Trials Map — Project Handoff

_Last updated: October 19, 2026_

## What this is

An interactive web map of dog scent work trials across the US. It combines two sources:

- **NACSW** (National Association of Canine Scent Work) nose work trials
- **AKC Scent Work** trials

The map is a static page hosted on GitHub Pages. A weekly GitHub Actions job refreshes the data.

| | |
|---|---|
| **Live map** | https://ekaizar.github.io/Scent-Work-Trials-Map/ (the path is case-sensitive) |
| **Repository** | https://github.com/ekaizar/Scent-Work-Trials-Map (public, branch `main`) |
| **Predecessor (NACSW only)** | https://github.com/ekaizar/NACSW-Trials-Map, still live and updating on its own schedule |
| **Owner** | ekaizar |

## Repository layout

| Path | Purpose |
|---|---|
| `Trialmaps_Interactive.R` | The whole data pipeline: scrape NACSW, fetch AKC, geocode, group, write CSV |
| `.github/workflows/update-trials.yml` | Weekly job (Mondays 06:00 UTC, plus manual "Run workflow"). Runs the R script, converts the CSV to `docs/data.js` and commits it |
| `docs/index.html` | The map page (Leaflet 1.9.4 from unpkg; all JS is inline) |
| `docs/data.js` | Generated data: `const DATA_UPDATED = "..."; const TRIALS_DATA = [...];` **Never hand-edit**: each run overwrites it |
| `docs/radius_map.html` | Older "radius search" page. **Not updated for AKC** (still NACSW branding and fields) |
| `archive_host_pages.R` | Saves upcoming NACSW host pages (and the premiums they link to) in the Wayback Machine; see "Wayback archiving" |
| `archive_log.csv` | One row per NACSW trial (Date + Location): host page URL, latest pre-trial Wayback snapshot, last request status. Committed by the workflow |
| `geocode_cache.csv` | Cache of town → lat/long from OpenStreetMap (Nominatim) lookups, to avoid re-geocoding. **The workflow doesn't commit it** (see Known issues) |
| `ARCHIVE/`, `docs/ARCHIVE/` | Old script and page versions, not used |
| `README.md` | Short public description |

GitHub Pages serves the `/docs` folder of `main`.

## Data pipeline (`Trialmaps_Interactive.R`)

1. **Step 1 – NACSW scrape.** Fetches `https://www.nacsw.net/calendar/trials` (one page holds every trial back to 2012).
   - It tries a plain `httr` request first.
   - If SiteGround's anti-bot CAPTCHA ("sgcaptcha") blocks it, it falls back to headless Chrome via `chromote`. The workflow installs Chrome for this.
   - Event rows are found by a first cell that starts with a `YYYY-MM-DD` date.
2. **Step 2 – Parse NACSW.** Event text looks like `"NW3/ELT Trials - City, ST hosted by Host"`.
   - It is split into TrialTypes, Location and Host.
   - Cancelled trials are dropped.
   - Only trials from the last `YEARS_BACK` (2) years onward are kept.
3. **Step 2b – AKC Scent Work.** POSTs to the undocumented AKC Event Search API (details below), one request per `AKC_WINDOW_DAYS` (90) window, from 2 years back to `AKC_YEARS_AHEAD` (2) years ahead.
   - Each AKC event becomes one row, with its link to `https://www.apps.akc.org/apps/events/search/index_results.cfm?action=plan&event_number=<n>`.
   - **Any AKC failure is logged and skipped**, so NACSW still updates.
4. **Step 3 – Geocode.** NACSW locations ("City, ST, USA") go through `tidygeocoder` (OpenStreetMap) and the cache. AKC rows use AKC's own venue latitude/longitude; only AKC rows missing coordinates get geocoded.
5. **Step 4 – Group.**
   - **4a:** one row per date + location + org (and + club, for AKC). Every event link is kept in `EventLinks`.
   - **4b:** consecutive-day AKC events by the same club at the same location are merged into one entry spanning `Date`…`EndDate`. NACSW stays one entry per day.
   - **4c:** small random jitter (±0.05°) so overlapping pins separate.
6. **Steps 5–6.** Join `archive_log.csv` by Date + Location to add `ArchiveLink` to NACSW trials, then write `trials_for_google_sheets.csv`. The workflow converts it to `docs/data.js`.

### Config knobs (top of the R script)

| Name | Default | Meaning |
|---|---|---|
| `YEARS_BACK` | 2 | How far back to keep trials |
| `DROP_CANCELLED` | TRUE | Drop cancelled NACSW/AKC events |
| `INCLUDE_AKC` | TRUE | Turn the AKC source on or off |
| `AKC_YEARS_AHEAD` | 2 | AKC query horizon |
| `AKC_WINDOW_DAYS` | 90 | Days per AKC request; lower it if the log shows "Hit the 1000-event cap" |
| `JITTER_AMOUNT` | 0.05 | Pin jitter in degrees |

### Output fields (`TRIALS_DATA` rows)

| Field | Meaning |
|---|---|
| `Date` | Start date (YYYY-MM-DD) |
| `EndDate` | End date; equals `Date` for single-day entries |
| `Location` | "City, ST" |
| `Org` | `NACSW` or `AKC` |
| `Host` | Host or club name |
| `EventLink` | First event link (NACSW event website, or the AKC event page) |
| `EventLinks` | `"YYYY-MM-DD URL ; YYYY-MM-DD URL ; ..."`: every event link in the entry |
| `ArchiveLink` | NACSW only: Wayback Machine snapshot of the host page, taken before the trial (empty if none yet) |
| `TrialTypes` | Comma-separated: NACSW levels (NW1, NW2, NW3, ELT, L1C…) or `AKC Scent Work` |
| `EventCount` | NACSW: number of trial types. AKC: number of AKC events merged |
| `Latitude`, `Longitude` | Jittered coordinates |

Latest run (Oct 16, 2026): 1,744 AKC entries (from about 3,300 AKC events) plus 965 NACSW trials.

## AKC Event Search API (undocumented — handle with care)

- **Endpoint:** `POST https://webapps.akc.org/event-search/api/search/events`
- **No auth.** Send `Content-Type: application/json`, `Origin: https://webapps.akc.org` and `Referer: https://webapps.akc.org/event-search/`.
- **Body:** stored verbatim in `AKC_BODY_JSON`, captured from browser DevTools. Only `dateRange.from` and `dateRange.to` are changed per request.
- **Gotchas:**
  - The server validates the whole body, and its error messages are misleading (often `Missing "dateRange" parameter`).
  - Dates are `MM/DD/YYYY`.
  - `dateRange.type` must be `"event"`.
  - Scent Work's `compType` is `"SCWK"`.
  - `searchByState: false` gives nationwide results.
  - `"zipCode": null` must stay `null`. The script serializes the body itself because httr's own JSON encoder would turn it into `{}`.
  - A request returns at most 1,000 events, and each request can take around 30 s (the script waits up to 120 s).
  - String values often carry trailing spaces, so the script trims everything.
- **Response:** `{"events": [...]}`. Fields used:
  - `eventNumber`, `clubName`, `startDate`, `city`, `state`, `eventStatus`
  - `site.coordinates.lat`, `site.coordinates.lon`
  - Each day (and each trial within a day) is a separate event with its own number.
- **If it breaks:**
  1. Open https://webapps.akc.org/event-search/ and search Scent Work, all states, with the DevTools Network tab open.
  2. Copy the request body of the `events` call.
  3. Paste it into `AKC_BODY_JSON`.
- The old ColdFusion calendar (`apps.akc.org/apps/event_calendar/...`) was rejected as a source: it's hard to parse and has no coordinates.
- Reference implementation that helped decode the API: https://github.com/finnishspitzclub/fsca-events (`akcal.py`, `SCHEMA.md`).

## Wayback archiving (`archive_host_pages.R`)

Hosts take their trial page and premium down after the trial, and the NACSW calendar drops the link at the same time. So the workflow saves each upcoming NACSW host page while it's still live.

- **When:** a workflow step after the main script, with `continue-on-error` and a 90-minute timeout. A failure never blocks the map update.
- **API:** Internet Archive Save Page Now (SPN2).
  - `POST https://web.archive.org/save` with `capture_outlinks=1` (also saves linked pages and PDFs, i.e. the premium) and `if_not_archived_within=7d`.
  - Then `GET /save/status/<job_id>` for the result.
  - Auth header: `Authorization: LOW <access>:<secret>`.
- **Keys:** repository secrets `IA_ACCESS_KEY` and `IA_SECRET_KEY` (archive.org account, https://archive.org/account/s3.php). If they're missing, the step skips. **Never put the keys in the code or in chat.**
- **What gets captured:**
  - Upcoming NACSW trials with an `EventLink`, soonest first.
  - Pages with no capture yet, or whose last capture is more than 30 days old.
  - One more capture in the 14 days before the trial, if the last one was earlier.
  - At most 60 requests per run, 12 s apart, so a backlog clears over several weeks. A failed URL is retried the following week.
- **Time budget:** the step is killed at 90 min, so the script stops submitting at 40 min and stops status checks at 60 min.
  - `archive_log.csv` is written after every request and result, so a cut-short run keeps its work.
  - Captures still pending at the end are logged with their SPN2 `job_id` and checked first on the next run.
- **Archive.org bot rules** (https://archive.org/developers/bots.html):
  - Every request sends a descriptive User-Agent (`ScentWorkTrialsMap-Archiver/1.0 (+repo URL; ...)`) and is authenticated.
  - Requests go one at a time with delays.
  - On HTTP 429/503 the script waits as long as `Retry-After` says (up to 10 min) and retries twice. If still throttled, it stops for this run and logs the rest for next week.
- **Overlapping runs:** the workflow has a `concurrency` group, so a manual run and the scheduled run queue instead of racing. The commit step also does `git pull --rebase` before pushing. (An overlap on Oct 19, 2026 made the second run's push fail.)
- **Log:** `archive_log.csv` is keyed by trial (Date + Location), not by URL, because past NACSW trials have no link left to match on. Rows of past trials are never updated, so they keep their last pre-trial capture.
- **Timing:** a new capture appears on the map on the *next* run, because the main script reads the log before the archive step updates it.
- **Map:** popups show "🗄️ Archived host page & premium (Wayback Machine) →" when `ArchiveLink` is set.
- **Limits:**
  - Google Drive and Dropbox premiums, JavaScript-heavy pages and sites that block the Archive may not capture properly.
  - Trials that were already over before this started can't be recovered this way.
- **AKC isn't archived yet.** A possible next step is to save AKC premium documents too: the API's `documents[]` has `PRMLST` entries, but the download URL hasn't been worked out.

## Map page (`docs/index.html`) behavior

- **Filters:**
  - Event Type checkboxes are built from `TrialTypes`.
  - The date range defaults to today through one year out.
  - Location + radius uses OpenStreetMap geocoding of the typed text.
  - **Export CSV** downloads the filtered rows.
- **AKC trials are hidden by default.** `HIDDEN_BY_DEFAULT = ['AKC Scent Work']` leaves the AKC checkbox unchecked on load and after Reset Filters. Select All includes AKC.
- **Date filtering:** a multi-day entry matches if any of its days overlaps the selected range.
- **Popup:**
  - Shows the date range, host and organization.
  - For multi-event AKC entries, it lists each event's link labelled by day and event number (e.g. "Sat, Nov 7 #2026060019 →").
- **Colors:**
  - `eventColors` sets them; AKC is pink `#E91E63`.
  - `getPrimaryColor()` checks AKC first, then NACSW levels.

## Workflow / infrastructure

- **Runner:** pinned to `ubuntu-24.04`, because `ubuntu-latest` moved to Ubuntu 26 on Oct 19, 2026 and the R binary repo may lag behind. `actions/checkout@v5` runs on Node 24.
- **Setup steps:** R 4.3.0 via `r-lib/actions/setup-r@v2` with RSPM binaries, plus Chrome via `browser-actions/setup-chrome@v2` for `chromote`.
- **R packages:** rvest, dplyr, tidyr, tidygeocoder, jsonlite, httr, chromote.
- **Repo settings:**
  - Pages: deploy from branch `main`, folder `/docs`.
  - Actions → Workflow permissions: Read and write (needed to commit `data.js`).
- **Commit email:** the account blocks pushes that expose a private email. Use `28527702+ekaizar@users.noreply.github.com` as the commit email.

## Known issues and TODOs

1. **Geocode cache isn't persisted.** The workflow commits only `docs/data.js`, so new NACSW towns are re-geocoded every run. Fix: also `git add geocode_cache.csv` in the commit step.
2. **`docs/radius_map.html` is stale.** It has no AKC support and no `EndDate`/`EventLinks` handling. Update it or remove it.
3. **AKC trial classes aren't broken out.** Every AKC entry is labelled "AKC Scent Work". Splitting by element and level (Containers, Interior, Exterior, Buried, Handler Discrimination × Novice…Master/Detective) needs inspecting an event's `items[]` in the API response.
4. **AKC same-town collisions:** two different AKC clubs in the same town on the same days stay separate entries, by design (grouped by club). NACSW entries in the same town and on the same day as AKC ones are also kept separate (grouped by `Org`).
5. **Link on the old NACSW site:** a header link to this map was prepared ("New: NACSW + AKC Scent Work map →", `#sisterLink`, in `docs/index.html` and `docs/radius_map.html` of NACSW-Trials-Map). The owner planned to add it by hand in GitHub's web editor. Check whether it's live.
6. **Terms of use:** the AKC API is undocumented, and no AKC terms covering automated access were found. Keep the weekly cadence and the polite 2 s delay between requests.

## How to verify a change

- **Run the pipeline:** Actions tab → "Update Trials Map" → Run workflow. In the log, check:
  - the NACSW event count
  - the per-window AKC lines (`YYYY-MM-DD to YYYY-MM-DD: N events`)
  - "Added N AKC Scent Work events"
  - "Grouped into N unique trials"
- **Check the map:** after the "pages build and deployment" run finishes, hard-refresh the live map (Ctrl/Cmd+Shift+R).
- **Local preview:** open `docs/index.html` in a browser; it needs internet access for Leaflet and the map tiles.
