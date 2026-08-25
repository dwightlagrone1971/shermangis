import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/externals',
    name: 'External',
    component: () => import('../views/External.vue')
  },
  {
    path: '/downloads',
    name: 'Download',
    component: () => import('../views/Download.vue')
  },
  {
    path: '/infographics',
    name: 'Infographics',
    component: () => import('../views/Infographics.vue')
  },
  {
    path: '/internal',
    name: 'Internal',
    component: () => import('../views/Internal.vue')
  },
  {
    path: '/pdfmaps',
    name: 'PDF Maps',
    component: () => import('../views/PDFMaps.vue')
  },
  {
    path: '/whatisgis',
    name: 'WhatIsGIS',
    component: () => import('../views/WhatIsGIS.vue')
  },
  {
    path: '/whatisgps',
    name: 'WhatIsGPS',
    component: () => import('../views/WhatIsGPS.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
