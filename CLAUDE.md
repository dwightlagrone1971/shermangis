# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Vue 3 + Vite single-page site for the City of Sherman, TX GIS department ("Analyze Sherman"). It's a thin router shell around a set of view pages that each render a card grid of links out to ArcGIS Online dashboards, datasets, and PDFs. There is no backend — all "data" (dashboard URLs, thumbnail image URLs, staff contacts, footer links, menu items) lives as a plain static array in `src/data/items.js`.

**For the full architecture — directory-by-directory structure, per-component and per-view documentation, the data schema, the routing table, the styling system, and a list of known dead code — see [`ARCHITECTURE.md`](./ARCHITECTURE.md).** This file only covers commands and the gotchas/conventions worth knowing *before* making a change; it deliberately doesn't repeat what's already documented there.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

There is no lint, test, or type-check script configured in `package.json` — don't invent calls to `npm run lint`/`npm test`. There's also no CI config in this repo.

## Conventions and gotchas

**To add/edit/remove a link, dashboard, contact, or menu entry, edit the matching object(s) in `src/data/items.js` — do not add per-view local data.** See `ARCHITECTURE.md`'s Data Layer section for the field schema per content `type`. Commented-out entries (e.g. under `internal`) are intentionally disabled dashboards, not dead code to delete.

**All components use `<script setup>`.** No mixed Options/Composition API — every `.vue` file in the repo is `<script setup>`, including ones with no reactive state at all (in which case there's simply no `<script>` block). Keep it that way.

**The 5 card-grid views are one shared component (`CardGrid.vue`)** — don't hand-roll another grid for a new card-style page; add a wrapper view following the existing ones (`Download.vue` etc.) as a template. Don't reintroduce a per-card `img-class` prop (removed on purpose — every card shares one consistent frame now).

**Never use a bare `h-screen` on page content that can grow** (a list, a card grid, anything with `v-for`). It's happened three separate times already (`CardGrid.vue`'s `wrapped` prop, `About.vue`, `Contacts.vue`, `WhatIsGPS.vue`, and once more on `Menu.vue`'s outer bar as `lg:h-24`) — a fixed-height box doesn't grow for overflowing children, so a sibling in normal flow (`Footer`, or in the Menu case just visual overflow) renders at the box's nominal edge while the actual content keeps rendering past it. Use `min-h-screen`/`min-h-*` if the goal is "at least this tall."

**Prefer `auto-fill`/`auto-fit` + `minmax()` over breakpoint-stepped columns for repeating, uniform-item layouts** (a card grid, an icon nav row) — `CardGrid.vue` and `Menu.vue` both learned this the hard way. Fixed breakpoints (`sm:grid-cols-2 lg:grid-cols-3 ...`) are fine and correct for *structural* layout flips (a sidebar appearing, a section reflowing), but for "how many of these identical things fit," a fluid grid/flex adapts continuously to any width instead of jumping at a handful of magic numbers, and doesn't require adding more breakpoints later for a screen size nobody anticipated. If you use CSS Grid for a wrapping row of a *small, fixed* number of items (not a big list), watch out for a partially-filled last row — Grid pins it to the leftmost columns instead of centering it; use `flex flex-wrap justify-center` instead when that matters (this is why `Menu.vue` is flexbox, not grid).

**Don't fight a flex container's own `items-center`/`justify-center` with manual margins on its child.** `Menu.vue` had `mt-14`/`2xl:-mt-8` doing exactly that — sitting on top of centering the bar's own `items-center` already provided, causing an 88px vertical jump at the exact breakpoint where the negative margin engaged, and content overflowing past the bar's own edge above it. If a flex/grid container already centers its content, add spacing via the container's padding or a small constant margin, not a breakpoint-varying one that overrides the centering.

**Brand colors are design tokens, not arbitrary hex.** `src/index.css` defines a small `@theme` palette (`brand-primary`, `brand-accent`, `brand-olive`, `brand-dark`, `brand-footer`, `brand-offwhite` — see `ARCHITECTURE.md` for hex values) generating `bg-brand-*`/`text-brand-*`/`border-brand-*` utilities. Use these instead of a new `bg-[#hex]` when a color matches or is meant to tie into the existing palette; add a new named token there (not an inline arbitrary value) if introducing a genuinely new brand color.

**Any `font-serif`/`font-sans` class you add will actually work** — it didn't used to. `App.vue` had `font-family` set on `#app` (an ID selector), which outranks any Tailwind class selector by CSS specificity, so no per-element font override ever took effect anywhere in the app, silently. Fixed by moving that declaration to a bare `body` selector. If you ever reintroduce a font-family rule at the `#app`/`html`/ID level, you'll reopen this — keep global font defaults on element selectors only.

**Every external link (`target="_blank"`) should carry `rel="noopener noreferrer"`** — already applied everywhere live; keep it on any new external link.

**Don't nest a `<button>` inside an `<a>`/`<router-link>`** (invalid HTML — interactive content can't nest). For a styled "button" that navigates via router, use `<router-link custom v-slot="{ navigate }"><button @click="navigate">...`. For a styled external-link "button", put the classes directly on the `<a>` instead of wrapping a `<button>`.

**`src/views/Polygons.vue` is dead code — leave it alone.** Not wired into the router, reads a `getItems('polygons')` type that doesn't exist in `src/data/items.js`, and still imports `useStore` from `vuex` (a package no longer installed) — harmless since nothing imports the file, so Vite never puts it in the build graph. Don't "fix" any of that as drive-by cleanup; it was deliberately left as-is when flagged. Ask before deleting or wiring it up rather than assuming.

**`Header.vue` has a dead `<style>` rule** (`.home { background-image: url("~@/assets/home-background.png") }`) referencing a nonexistent asset via an invalid webpack-style alias, and the class isn't used in the template either. Known, unfixed — still there if you want it; see `ARCHITECTURE.md`'s Known Dead Code section for this and the other unused files in the repo.
