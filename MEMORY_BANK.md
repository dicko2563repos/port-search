# Port Search — Memory bank (stable reference)

Single place for **long-lived** project facts. For a short "where we are now," see `CONTEXT_RECORD.md`.

## What this project is

- **Port Search** — a fast lookup app to find **ports and their port codes** (UN/LOCODE). Type a port name, code, or country and get matching ports.
- **Sibling app to PTS** (Precision Timing Schedule). Shares PTS's **design language** and stack on purpose.
- **Stack:** static **HTML + CSS + vanilla JS**, no build step. Data lives in a plain JS file (`ports-data.js`) that defines `window.PORTS`.
- **Canonical files** in repo root: `index.html`, `app.js`, `styles.css`, `ports-data.js`.

## Design system (carried over from PTS)

- **Colors** (CSS variables in `styles.css`):
  - `--header-red #B71C1C` (app bar, accents, focus rings, card borders)
  - `--accent-grey #424242` (secondary text/UI)
  - `--content-bg #F5F5F5`, `--card-bg #FFFFFF`, `--border-light #E0E0E0`
  - `--text-body rgba(0,0,0,0.87)`, `--text-muted #757575`
- **Patterns:** red app bar (min-height 56px) with a context **pill**; `main` capped at **720px**, centered, mobile-first; **white cards with red borders**, 8px radius; **filter chips** (pill-shaped, active = red fill); red focus borders on inputs; system font stack.
- **Screen pattern:** single-page app using `<section class="screen">` blocks toggled with a `.hidden` class (same as PTS). Currently one screen (`#searchScreen`); add more sections as needed.

## Data model

- **`ports-data.js`** defines `window.PORTS` = array of:
  `{ code, name, country, region, type }`
  - `code` — UN/LOCODE, 5 chars (2-letter country + 3-letter location), e.g. `SGSIN`.
  - `region` — drives the filter chips (Asia, Europe, North America, South America, Middle East, Africa, Oceania).
  - `type` — currently all `"Seaport"`; field exists so airports/dry ports can be added later.
- **Current data is a CURATED SAMPLE** (~65 major world seaports). For production, replace with the full UN/LOCODE dataset (~100k rows) — keep the same object shape and the search UI works unchanged.

## Search behaviour (`app.js`)

- **Tokenized search:** query is lowercased and split on whitespace; a port matches only if **every** token is found in the combined `code + name + country + region` haystack.
- **Region filter:** chips filter to one region (or All); combined with the text search.
- **Highlighting:** matched substrings wrapped in `<mark>`; all rendered text is HTML-escaped first (XSS-safe).
- **Result cap:** `MAX_RESULTS = 100`; meta line shows "Showing 100 of N" when capped.

## Possible follow-ups (if user wants)

- Import the full UN/LOCODE dataset (generate `ports-data.js` from the official CSV).
- Add coordinates + a map / "copy code" button / detail screen.
- Add airports (IATA/ICAO) as another `type`.
- PWA manifest + icons (PTS has these; not yet added here).
- Deploy as static site (GitHub Pages, same as PTS).

## How to use these files

1. **`MEMORY_BANK.md`** — architecture, data model, design system, behaviour.
2. **`CONTEXT_RECORD.md`** — what's done recently and loose next steps. Update it after meaningful milestones.
