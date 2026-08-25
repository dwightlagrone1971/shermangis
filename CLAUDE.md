# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Vue 3 + Vite single-page site for the City of Sherman, TX GIS department ("Analyze Sherman"). It's a thin router shell around a set of view pages that each render a card grid of links out to ArcGIS Online dashboards, datasets, and PDFs. There is no backend — all "data" (dashboard URLs, thumbnail image URLs, staff contacts, footer links, menu items) lives as static objects in a single Vuex store module.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

There is no lint, test, or type-check script configured in `package.json` — don't invent calls to `npm run lint`/`npm test`. There's also no CI config in this repo.

## Architecture

**Everything renders off one Vuex store array.** `src/store/index.js` defines a single `state.items` array holding *every* piece of content in the app — dashboard links, PDF map links, downloadable dataset links, staff contact cards, footer links, and the top nav menu items — as flat objects distinguished only by a `type` field (`'downloads'`, `'external'`, `'featured'`, `'infographics'`, `'internal'`, `'pdfMaps'`, `'contacts'`, `'footer'`, `'menuItems'`, `'about'`). The one getter, `getItems(type)`, filters that array by `type`. Every view and every nav component (`Menu.vue`, `Footer.vue`) pulls its content the same way:

```js
const items = computed(() => store.getters.getItems('<type>'))
```

**To add/edit/remove a link, dashboard, contact, or menu entry, edit the matching object(s) in `src/store/index.js` — do not add per-view local data.** This is the one place content changes; the view components are just templates that loop over whatever `getItems` returns. The array is grouped with `/* Section */` comments matching each `type`; keep new entries under the right comment block. Commented-out entries (e.g. under `internal`) are intentionally disabled dashboards, not dead code to delete.

Each item's shape depends on its `type` but generally follows: `{ type, name, url, src }` where `url` is the link destination and `src` is a thumbnail image URL (usually itself hosted on ArcGIS Online as a `.../sharing/rest/content/items/<id>/data` link). `menuItems` use `to` (a Vue Router path) instead of `url`, plus `icon` instead of `src`. `contacts` and `footer` entries have their own bespoke fields (see existing entries as the template when adding one).

**Routing** (`src/router/index.js`) uses `createWebHashHistory` (hash-based routes, e.g. `/#/downloads`) and statically imports every view — there's no route-based code splitting. Each route is a flat `{ path, name, component }` entry; when adding a new view, add both the `.vue` file under `src/views/` and a matching route + import here, and usually a `menuItems` entry in the store so it's reachable from nav.

**Page shell**: `App.vue` always renders `Header` → `Menu` → `<router-view>` → `Footer`. `Menu.vue` is the horizontal icon nav (reads `menuItems`), `Footer.vue` is the bottom link bar (reads `footer`), `Header.vue` is the static hero banner (not store-driven).

**Styling** is Tailwind CSS v4 via `@tailwindcss/vite` (see `vite.config.js`), imported once in `src/index.css`/`src/style.css` with `@import "tailwindcss"`. Views style almost entirely with Tailwind utility classes inline in templates; there's minimal `<style scoped>` usage and some inline `style="background-color: ..."` for one-off colors. No `tailwind.config.js` is present — v4's CSS-first config means there's nothing to check there.

**View pattern**: Most files in `src/views/` are near-identical: an intro `<p>` blurb, then a grid (`v-for="item in items"`) of `<a :href="item.url"><img :src="item.src"></a>` thumbnail cards pulling from one `type`. `Download.vue` → `'downloads'`, `External.vue` → `'external'`, `Infographics.vue` → `'infographics'`, `Internal.vue` → `'internal'`, `PDFMaps.vue` → `'pdfMaps'`, `Contacts.vue` → `'contacts'`, `Home.vue` → `'featured'`. `About.vue`, `WhatIsGIS.vue`, `WhatIsGPS.vue` are static prose pages, not store-driven. `Download1.vue` exists in `src/views/` but is **not wired into the router** — treat it as unused/legacy unless a route is added for it.

## Notes for making changes

- Nearly all images (thumbnails, icons, backgrounds) are hot-linked to `cityofsherman.maps.arcgis.com/sharing/rest/content/items/<id>/data` — these are ArcGIS Online hosted item URLs, not local assets. Only a couple of local images exist in `src/assets/` and `public/images/`. When adding a new card, follow the existing pattern of linking a hosted ArcGIS item rather than importing a local file, unless matching an existing exception.
- `public/` is served at the site root as-is (Vite convention) — `favicon.svg`, `icons.svg`, `images/Hydrants.png`.
