import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../components/About.vue'
import AddressRequest from '../components/AddressRequest.vue'
import WhatIsGIS from '../components/WhatIsGIS.vue'
import WhatIsGPS from '../components/WhatIsGPS.vue'
import WebMaps from '../components/WebMaps.vue'
import External from '../components/External.vue'
import Internal from '../components/Internal.vue'
import GISDownload from '../components/GISDownload.vue'
import PDFMaps from '../components/PDFMaps.vue'
import Contact from '../components/Contact.vue'
import AddressRquest from '../components/AddressRequest.vue'

const routes = [
  {
    path: '/',
    name: 'WebMaps',
    component: WebMaps
  },
  {
    path: '/addressrequestform',
    name: 'AddressRequest',
    component: AddressRequest
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
  },
  {
    path: '/external',
    name: 'External',
    component: External
  },
  {
    path: '/internal',
    name: 'Internal',
    component: Internal
  },
  {
    path: '/gisdownload',
    name: 'GIS Download',
    component: GISDownload
  },
  {
    path: '/pdfmaps',
    name: 'PDF Maps',
    component: PDFMaps
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/addressrequest',
    name: 'AddressRequest',
    component: AddressRequest
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
