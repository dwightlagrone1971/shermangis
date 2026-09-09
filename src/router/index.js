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
    path: '/datasets',
    name: 'Datasets',
    component: () => import('../views/Datasets.vue')
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
  },
  {
    path: '/census2020',
    name: '2020 Census Summary',
    component: () => import('../views/infographics/2020Census.vue')
  },
  {
    path: '/atriskpopulation',
    name: 'At Risk Population',
    component: () => import('../views/infographics/AtRiskPopulation.vue')
  },
  {
    path: '/communitychangesnapshot',
    name: 'Community Change Snapshot',
    component: () => import('../views/infographics/CommunityChangeSnapshot.vue')
  },
  {
    path: '/communityprofile',
    name: 'Community Profile',
    component: () => import('../views/infographics/CommunityProfile.vue')
  },
  {
    path: '/commuteprofile',
    name: 'Commute Profile',
    component: () => import('../views/infographics/CommuteProfile.vue')
  },
  {
    path: '/dominanttapestryprofile',
    name: 'Dominant Tapestry Profile',
    component: () => import('../views/infographics/DominantTapestryProfile.vue')
  },
  {
    path: '/economicdevelopmentprofile',
    name: 'Economic Development Profile',
    component: () => import('../views/infographics/EconomicDevelopmentProfile.vue')
  },
  {
    path: '/emergencyinformation',
    name: 'Emergency Information',
    component: () => import('../views/infographics/EmergencyInformation.vue')
  },
  {
    path: '/employmentoverview',
    name: 'Employment Overview',
    component: () => import('../views/infographics/EmploymentOverview.vue')
  },
  {
    path: '/executivesummary',
    name: 'Executive Summary',
    component: () => import('../views/infographics/ExecutiveSummary.vue')
  },
  {
    path: '/firedistrictprofile',
    name: 'Fire District Profile',
    component: () => import('../views/infographics/FireDistrictProfile.vue')
  },
  {
    path: '/healthcareandinsurancestatistics',
    name: 'Healthcare and Insurance Statistics',
    component: () => import('../views/infographics/HealthcareAndInsuranceStatistics.vue')
  },
  {
    path: '/housingmarketcharacteristics',
    name: 'Housing Market Characteristics',
    component: () => import('../views/infographics/HousingMarketCharacteristics.vue')
  },
  {
    path: '/housingmarketsummary',
    name: 'Housing Market Summary',
    component: () => import('../views/infographics/HousingMarketSummary.vue')
  },
  {
    path: '/k12educationoverview',
    name: 'K-12 Education Overview',
    component: () => import('../views/infographics/K12EducationOverview.vue')
  },
  {
    path: '/keyfacts',
    name: 'Key Facts',
    component: () => import('../views/infographics/KeyFacts.vue')
  },
  {
    path: '/nonprofitcharitableprofile',
    name: 'Non-Profit Charitable Profile',
    component: () => import('../views/infographics/NonProfitCharitableProfile.vue')
  },
  {
    path: '/populationoverview',
    name: 'Population Overview',
    component: () => import('../views/infographics/PopulationOverview.vue')
  },
  {
    path: '/populationtrends',
    name: 'Population Trends',
    component: () => import('../views/infographics/PopulationTrends.vue')
  },
  {
    path: '/propertydetails',
    name: 'Property Details',
    component: () => import('../views/infographics/PropertyDetails.vue')
  },
  {
    path: '/retaildemandbyindustry',
    name: 'Retail Demand by Industry',
    component: () => import('../views/infographics/RetailDemandByIndustry.vue')
  },
  {
    path: '/shoppingandspending',
    name: 'Shopping and Spending',
    component: () => import('../views/infographics/ShoppingAndSpending.vue')
  },
  {
    path: '/spendingbehavior',
    name: 'Spending Behavior',
    component: () => import('../views/infographics/SpendingBehavior.vue')
  },
  {
    path: '/tapestryprofile',
    name: 'Tapestry Profile',
    component: () => import('../views/infographics/TapestryProfile.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
