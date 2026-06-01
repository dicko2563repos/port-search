# Port Search — Context record (living document)

**Purpose:** Quick snapshot of repo state and near-term work. **Authoritative detail:** `MEMORY_BANK.md`.

**Last updated:** 2026-06-01

## Current state

- **Project scaffolded** at `C:\Projects\Port Search`, seeded with the **PTS design system** (red header, light card layout, filter chips, mobile-first).
- **Working search app:** `index.html` + `app.js` + `styles.css` + `ports-data.js`.
  - Tokenized search across **code / name / country / region** with match **highlighting**.
  - **Region filter chips** (All + per-region).
  - Result cap of 100 with a "showing X of N" meta line.
- **Data:** curated **sample** of ~65 major world seaports with UN/LOCODE codes in `ports-data.js`.

## Next steps (loose)

- Replace sample data with the **full UN/LOCODE list** (generate `ports-data.js` from official CSV).
- Decide on extras: detail view, copy-code button, map/coordinates, airports as a second `type`.
- Add PWA manifest + icons if it should install like PTS.
- Set up deployment (static host / GitHub Pages).

## Notes

- Mirrors PTS conventions intentionally: vanilla JS, `.screen` section pattern, data in a separate JS file (`ports-data.js`, like PTS's `delay-codes-data.js`).
- No backend yet — all client-side. Add Supabase only if data needs editing/sync.
