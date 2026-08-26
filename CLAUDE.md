# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Vue 3 + Vite single-page site for the City of Sherman, TX GIS department ("Analyze Sherman"). It's a thin router shell around a set of view pages that each render a card grid of links out to ArcGIS Online dashboards, datasets, and PDFs. There is no backend — all "data" (dashboard URLs, thumbnail image URLs, staff contacts, footer links, menu items) lives as a plain static array in `src/data/items.js`.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

There is no lint, test, or type-check script configured in `package.json` — don't invent calls to `npm run lint`/`npm test`. There's also no CI config in this repo.

## Architecture

**Everything renders off one static array.** `src/data/items.js` exports a single `items` array holding *every* piece of content in the app — dashboard links, PDF map links, downloadable dataset links, staff contact cards, footer links, and the top nav menu items — as flat objects distinguished only by a `type` field (`'downloads'`, `'external'`, `'featured'`, `'infographics'`, `'internal'`, `'pdfMaps'`, `'contacts'`, `'footer'`, `'menuItems'`, `'about'`). It also exports `getItems(type)`, which filters that array by `type`. This is plain data, not Vuex — the array never changes at runtime, so there's no reactive store, no mutations/actions, no `useStore()`. Every view and every nav component (`Menu.vue`, `Footer.vue`) pulls its content the same way, wrapping the (non-reactive) call in `computed()` purely so the result flows into `<script setup>` the same way any other read would:

```js
import { getItems } from '../data/items.js'
const items = computed(() => getItems('<type>'))
```

**To add/edit/remove a link, dashboard, contact, or menu entry, edit the matching object(s) in `src/data/items.js` — do not add per-view local data.** This is the one place content changes; the view components are just templates that loop over whatever `getItems` returns. The array is grouped with `/* Section */` comments matching each `type`; keep new entries under the right comment block. Commented-out entries (e.g. under `internal`) are intentionally disabled dashboards, not dead code to delete.

Each item's shape depends on its `type` but generally follows: `{ type, name, url, src }` where `url` is the link destination and `src` is a thumbnail image URL (usually itself hosted on ArcGIS Online as a `.../sharing/rest/content/items/<id>/data` link). `menuItems` use `to` (a Vue Router path) instead of `url`, plus `icon` instead of `src`. `contacts` and `footer` entries have their own bespoke fields (see existing entries as the template when adding one).

**All components use `<script setup>`.** No mixed Options/Composition API — every `.vue` file in the repo is `<script setup>`, including ones with no reactive state at all (in which case there's simply no `<script>` block).

**Routing** (`src/router/index.js`) uses `createWebHashHistory` (hash-based routes, e.g. `/#/downloads`) via `vue-router` v5. Routes are lazy — each `component` is a dynamic `() => import('../views/X.vue')`, so every view ships as its own chunk. Each route is a flat `{ path, name, component }` entry; when adding a new view, add both the `.vue` file under `src/views/` and a matching route + import here, and usually a `menuItems` entry in `src/data/items.js` so it's reachable from nav.

**The 5 card-grid views are one shared component.** `Download.vue`, `External.vue`, `Infographics.vue`, `Internal.vue`, and `PDFMaps.vue` are all thin wrappers around `src/components/CardGrid.vue`, which takes a `type` prop (passed to `getItems`), a `heading` string (rendered as the page's `<h1>`), an optional `wrapped` boolean (`min-h-screen` on the content wrapper — a *floor*, not a fixed `h-screen`; that was a real bug, see below), and a `#blurb` slot for the page's intro paragraph text that follows the heading. Every card renders in a fixed 4:3 image frame with a light gray background showing through for ArcGIS items that have no thumbnail set, so missing images don't collapse to bare unstyled text next to ones that do have art. To add a new card-grid page, add a new wrapper view following the existing ones as a template — don't hand-roll another grid, and don't reintroduce a per-card `img-class` prop (removed on purpose — every card now shares one consistent frame).

**Never use a bare `h-screen` on page content that can grow** (a list, a card grid, anything with `v-for`). It's happened twice already (`CardGrid.vue`'s `wrapped` prop, `About.vue`, `Contacts.vue`, `WhatIsGPS.vue`) — a fixed-height box doesn't grow for overflowing children, so `Footer` (a sibling in normal flow) renders at the box's nominal bottom edge while the actual content keeps rendering past it, visually overlapping. Use `min-h-screen` if the goal is "at least a full viewport."

**Brand colors are design tokens, not arbitrary hex.** `src/index.css` defines a small `@theme` palette — `brand-primary` (`#08244c`), `brand-accent` (`#005095`), `brand-olive` (`#676e20`), `brand-dark` (`#383838`), `brand-footer` (`#4a4a4a`), `brand-offwhite` (`#f8f8f8`) — generating `bg-brand-*`/`text-brand-*`/`border-brand-*` utilities. Use these instead of a new `bg-[#hex]` when a color matches or is meant to tie into the existing palette; add a new named token there (not an inline arbitrary value) if you're introducing a genuinely new brand color.

**Any `font-serif`/`font-sans` class you add will actually work now** — it didn't used to. `App.vue` had `font-family` set on `#app` (an ID selector), which outranks any Tailwind class selector by CSS specificity, so no per-element font override ever took effect anywhere in the app, silently. Fixed by moving that declaration to a bare `body` selector. If you ever reintroduce a font-family rule at the `#app`/`html`/ID level, you'll reopen this — keep global font defaults on element selectors only.

**Page shell**: `App.vue` always renders `Header` → `Menu` → `<router-view>` → `Footer`, all in normal document flow (the footer used to be `position: fixed`, pinned over page content — that's been removed). `Menu.vue` is the horizontal icon nav (reads `menuItems`), `Footer.vue` is the bottom link bar (reads `footer`), `Header.vue` is the static hero banner (not data-driven). The router-view's background-image class is `.page-bg` (defined in `App.vue`) — don't confuse it with the separate `Menu` component.

**Styling** is Tailwind CSS v4 via `@tailwindcss/vite` (see `vite.config.js`), imported once in `src/index.css`/`src/style.css` with `@import "tailwindcss"` plus the brand `@theme` palette (see below). Views style almost entirely with Tailwind utility classes inline in templates. No `tailwind.config.js` is present — v4's CSS-first config means there's nothing to check there.

**View pattern**: `Download.vue` → `'downloads'`, `External.vue` → `'external'`, `Infographics.vue` → `'infographics'`, `Internal.vue` → `'internal'`, `PDFMaps.vue` → `'pdfMaps'` (all via `CardGrid.vue`, see above). `Contacts.vue` → `'contacts'`, `Home.vue` reads `'featured'` from the data but currently doesn't render it (dead computed — the 4 `featured` entries aren't shown anywhere; leave as-is unless asked to wire it up). `About.vue`, `WhatIsGIS.vue`, `WhatIsGPS.vue` are static prose pages; `WhatIsGIS.vue` and `Header.vue` have no `<script>` block at all since they hold no reactive state.

**`src/views/Polygons.vue` is dead code — leave it alone.** It's not wired into the router, and it reads `getItems('polygons')`, a `type` that doesn't exist anywhere in `src/data/items.js`. It still imports `useStore` from `vuex` (a package no longer installed), but since nothing imports this file, Vite never includes it in the build graph, so it causes no build/runtime issues. Don't "fix" its data source or its Vuex import as drive-by cleanup — it was deliberately left as-is when this was flagged; if you're asked to deal with it, ask before deleting or wiring it up rather than assuming.

## Notes for making changes

- Nearly all images (thumbnails, icons, backgrounds) are hot-linked to `cityofsherman.maps.arcgis.com/sharing/rest/content/items/<id>/data` — these are ArcGIS Online hosted item URLs, not local assets. Only a couple of local images exist in `src/assets/` and `public/images/`. When adding a new card, follow the existing pattern of linking a hosted ArcGIS item rather than importing a local file, unless matching an existing exception.
- `public/` is served at the site root as-is (Vite convention) — `favicon.svg`, `icons.svg`, `images/Hydrants.png`.
- Every external link (`target="_blank"`) should carry `rel="noopener noreferrer"` — this is already applied everywhere live; keep it on any new external link.
- Don't nest a `<button>` inside an `<a>`/`<router-link>` (invalid HTML — interactive content can't nest). For a styled "button" that navigates via router, use `<router-link custom v-slot="{ navigate }"><button @click="navigate">...` For a styled external-link "button", put the classes directly on the `<a>` instead of wrapping a `<button>`.
- `Header.vue` has a dead `<style>` rule (`.home { background-image: url("~@/assets/home-background.png") }`) referencing a nonexistent asset via an invalid webpack-style alias; the class isn't used in the template either. Known, unfixed — not touched during the last cleanup pass, still there if you want it.
