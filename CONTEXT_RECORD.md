# Port Search — Context record (living document)

**Purpose:** Quick snapshot of repo state and near-term work. **Authoritative detail:** `MEMORY_BANK.md`.

**Last updated:** 2026-06-01

## Current state

- **Live** at **portsearch.porttools.com.au** (GitHub Pages, repo `dicko2563repos/port-search`, branch `master`; domain at VentraIP; HTTPS enforced).
- **Working search app:** `index.html` + `app.js` + `styles.css` + `airports-data.js`.
  - Tokenized search across **ICAO / IATA / name / city / country / region** with match **highlighting**.
  - Pinned header/search/legend; only the results list scrolls. Result cap of 100 with a "showing X of N" meta line.
  - Pinned **code legend** (IATA/ICAO key) at top of the list; cards show IATA as the primary code, ICAO secondary.
  - **PWA installable** (manifest + apple-touch/192/512 icons; inline SVG "PS" favicon).
- **Data:** every airport worldwide with an **IATA code (~9,055)**, generated from the **OurAirports** public-domain CSV via `gen-airports.js`. (Seaport sample and the earlier Wikipedia-AU set have been removed.)

## Next steps (loose)

- Decide on extras: detail view, copy-code button, map/coordinates.
- Optional: a "major airports only" toggle, or include non-IATA airports/heliports (full OurAirports set ~80k).

## Notes

- Mirrors PTS conventions intentionally: vanilla JS, `.screen` section pattern, data in a separate JS file (`airports-data.js`, like PTS's `delay-codes-data.js`).
- No backend yet — all client-side. Add Supabase only if data needs editing/sync.
