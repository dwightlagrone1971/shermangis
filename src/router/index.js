import { createRouter, createWebHashHistory } from 'vue-router'

import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import External from '../views/External.vue'
import Home from '../views/Home.vue'
import Download from '../views/Download.vue'
import Infographics from '../views/Infographics.vue'
import Internal from '../views/Internal.vue'
import PDFMaps from '../views/PDFMaps.vue'
import WhatIsGIS from '../views/WhatIsGIS.vue'
import WhatIsGPS from '../views/WhatIsGPS.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/externals',
    name: 'External',
    component: External
  },
  {
    path: '/downloads',
    name: 'Download',
    component: Download
  },
  {
    path: '/infographics',
    name: 'Infographics',
    component: Infographics
  },
  {
    path: '/internal',
    name: 'Internal',
    component: Internal
  },
  {
    path: '/pdfmaps',
    name: 'PDF Maps',
    component: PDFMaps
  },
  {
    path: '/whatisgis',
    name: 'WhatIsGIS',
    component: WhatIsGIS
  },
  {
    path: '/whatisgps',
    name: 'WhatIsGPS',
    component: WhatIsGPS
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
