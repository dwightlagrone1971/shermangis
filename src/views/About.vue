<template>
  <div class="pt-12">
    <h1 class="text-3xl md:text-4xl font-serif font-bold text-blue-900">About Page</h1>
  </div>
  <div class="m-auto h-fit p-auto">
    <div class="mx-auto max-w-6xl px-6 text-left">
    </div>
    <div class="pt-16 pb-4">
      <h1 class="text-[#42a1a9] font-serif text-2xl md:text-3xl 2xl:mt-4 font-bold italic">What is geographic information services (GIS)?</h1>
    </div>
    <div class="grid md:grid-cols-5 w-8/12 m-auto">
      <div class="h-72 opacity-80">
        <img src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/1c1777c03d434fc887bcf7e9fbc5dba1/data" alt="WhatIsGIS Image">
       </div>
      <div class="md:h-72 md:col-span-4 md:text-left md:pl-5 pt-12">
        <div>
          <span class="font-bold text-xl">GIS (Global Information System)</span> A geographic information system (GIS) is a system that creates, manages, analyzes, and maps all types of data. GIS connects data to a map, integrating location data (where things are) with all types of descriptive information (what things are like there). This provides a foundation for mapping and analysis that is used in science and almost every industry. GIS helps users understand patterns, relationships, and geographic context. The benefits include improved communication and efficiency as well as better management and decision making. <a href="https://www.esri.com/en-us/what-is-gis/overview" target="_blank" rel="noopener noreferrer" class="text-brand-accent underline">Visit GIS.com.</a>
        </div>
      </div>      
    </div>
  </div>
  <div class="md:m-auto md:min-h-screen">
  <div class="pt-10 pb-2">
    <h1 class="text-2xl md:text-3xl font-serif font-bold text-[#42a1a9]">What is the Global Positional System (GPS)?</h1>
  </div>
  <div class="mt-12 m-auto md:-mt-2 md:grid md:grid-cols-5 md:w-8/12">
    <div class="pl-28 md:pl-12 md:pt-12">
      <img src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/94a104d6f95c42c98d30e60c12f1d7b1/data" alt="WhatIsGIS Image">
    </div>
  <div class="md:col-span-3 mt-10 mb-10 text-left ml-10 mr-10">
    <div>
      <span class="font-bold text-xl">GPS (Global Positional System)</span><p class="text-sm">is a passive, all-weather, 24-hour global navigation satellite system developed for and operated by the U.S. Department of Defense. The system is comprised of 24+ satellites, one master control station located in Colorado Springs, Colorado, and hundreds of government and independent local reference stations. The local reference stations are used for post-processing data collected in the field to obtain maximum accuracy.
The GIS department gathers GPS positions for new development to ensure spatial accuracy when recording city assets. City assets include fire hydrants, water lines and associated valves, storm lines, sewer lines and land records, such as, parcel and subdivision boundaries. Spatially accurate data enable staff to locate assets in the future, especially if they become buried.</p>
    </div>
  </div>
  <div class="h-60 text-blue-500 md:col-span-1 mt-12">
    <h6 class="font-semibold">External Links:</h6>
    <ul v-for="link in links" :key="link.url">
      <li class="underline">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
      </li>
    </ul>
      </div>
    </div>
  </div>
</template>


<script setup>
const links = [
  { name: 'American Congress on Surveying and Mapping', url: 'https://www.partneresi.com/resources/glossary/american-congress-on-surveying-and-mapping-acsm/' },
  { name: 'National Geodetic Survey', url: 'http://www.ngs.noaa.gov/' },
  { name: 'U.S. Coast Guard Navigation Center', url: 'http://www.navcen.uscg.gov/' }
]
</script>
