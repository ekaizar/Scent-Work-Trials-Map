# Scent Work Trials Map

An interactive map of upcoming and recent scent work trials from:

- **NACSW** — scraped from the [NACSW trials calendar](https://www.nacsw.net/calendar/trials)
- **AKC Scent Work** — fetched from the JSON API behind [AKC Event Search](https://webapps.akc.org/event-search/)

The map is served from `docs/` via GitHub Pages. A weekly GitHub Actions workflow
(`.github/workflows/update-trials.yml`) runs `Trialmaps_Interactive.R`, which
collects both sources, geocodes NACSW locations (cached in `geocode_cache.csv`;
AKC supplies venue coordinates), and writes `docs/data.js`.

## If the AKC source breaks

The AKC API is undocumented. If it stops returning events, open
<https://webapps.akc.org/event-search/>, search for Scent Work with the browser's
DevTools Network tab open, copy the request body of the `events` call, and paste
it into `AKC_BODY_JSON` in Step 2b of `Trialmaps_Interactive.R`.
A failed AKC fetch is logged and skipped, so NACSW data still updates.

Set `INCLUDE_AKC <- FALSE` to turn the AKC source off.
