# Analyze Sherman

Source for **Analyze Sherman**, the City of Sherman, TX GIS department's public site. It's a directory of links out to the city's ArcGIS Online dashboards, downloadable GIS datasets, PDF maps, infographics, and GIS staff contacts — a Vue 3 single-page app with no backend of its own.

## Stack

- [Vue 3](https://vuejs.org/) (`<script setup>` throughout) + [Vue Router 5](https://router.vuejs.org/) (hash-based routing)
- [Vite](https://vite.dev/) for dev/build
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` (CSS-first config, no `tailwind.config.js`)

## Getting started

```bash
npm install
npm run dev       # start the dev server with hot-reload
```

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

There's no lint, test, or type-check step configured, and no CI in this repo.

## Project structure

```
src/
  data/items.js      # every piece of site content: dashboard links, datasets,
                      # PDF maps, staff contacts, footer links, nav menu items
  router/index.js     # route table (lazy-loaded views)
  components/          # CardGrid.vue (shared thumbnail-grid layout), Header,
                        # Menu (top nav), Footer
  views/                # one file per page
```

All page content — links, thumbnail images, contact info, nav labels — lives in `src/data/items.js` as a single array of objects tagged with a `type`. To add, edit, or remove a dashboard link, dataset, contact, or menu item, edit that file; there's nothing to touch in the view components themselves for a content-only change.

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the full architecture: a diagram, a description of every component and view, the data schema per content `type`, the routing table, and the styling system. [`CLAUDE.md`](./CLAUDE.md) covers conventions and gotchas worth knowing before making a change.
