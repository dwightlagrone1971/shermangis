import { createRouter, createWebHashHistory } from 'vue-router'

import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import External from '../views/External.vue'
import Featured from '../views/Featured.vue'
import GISDownload from '../views/GISDownload.vue'
import Infographics from '../views/Infographics.vue'
import Internal from '../views/Internal.vue'
import PDFMaps from '../views/PDFMaps.vue'
import WhatIsGIS from '../views/WhatIsGIS.vue'
import WhatIsGPS from '../views/WhatIsGPS.vue'

const routes = [
  {
    path: '/',
    name: 'Featured',
    component: Featured
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/external',
    name: 'External',
    component: External
  },
  {
    path: '/gisdownload',
    name: 'GIS Download',
    component: GISDownload
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
