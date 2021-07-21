import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../components/About.vue'
import AddressRequest from '../components/AddressRequest.vue'
import WhatIsGIS from '../components/WhatIsGIS.vue'
import WhatIsGPS from '../components/WhatIsGPS.vue'
import Featured from '../components/Featured.vue'
import External from '../components/External.vue'
import Internal from '../components/Internal.vue'
import GISDownload from '../components/GISDownload.vue'
import PDFMaps from '../components/PDFMaps.vue'
import Contact from '../components/Contact.vue'
import AddressRquest from '../components/AddressRequest.vue'
import Infographics from '../components/Infographics.vue'

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
    path: '/addressrequestform',
    name: 'AddressRequest',
    component: AddressRequest
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
