<template>
    <div class="m-auto">
        <div class="pt-14 pb-10 text-4xl font-bold">
            <h1>What is the Global Positional System (GPS)?</h1>
        </div>
        <div class="grid md:grid-cols-5 w-8/12 m-auto">
            <div class="md:col-span-1 md:mr-5 md:mt-12 opacity-80">
                <img src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/94a104d6f95c42c98d30e60c12f1d7b1/data" alt="WhatIsGIS Image">
            </div>
            <div class="md:col-span-3 mt-10 mb-10 text-left ml-10 mr-10">
                 <span class="font-bold text-xl">GPS (Global Positional System)</span><p class="text-sm">is a passive, all-weather, 24-hour global navigation satellite system developed for and operated by the U.S. Department of Defense. The system is comprised of 24+ satellites, one master control station located in Colorado Springs, Colorado, and hundreds of government and independent local reference stations. The local reference stations are used for post-processing data collected in the field to obtain maximum accuracy.
The GIS department gathers GPS positions for new development to ensure spatial accuracy when recording city assets. City assets include fire hydrants, water lines and associated valves, storm lines, sewer lines and land records, such as, parcel and subdivision boundaries. Spatially accurate data enable staff to locate assets in the future, especially if they become buried.</p>
            </div>
            <div class="text-blue-500 md:col-span-1 mt-12">
                <h6 class="font-semibold">External Links:</h6>
                <ul v-for="link in links" :key="link">
                    <li class="underline">
                        <a :href="link.url" target="_blank">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      links: [
        { name: 'American Congress on Surveying and Mapping', url: 'http://www.acsm.net/'},
        { name: 'National Geodetic Survey', url: 'http://www.ngs.noaa.gov/'},
        { name: 'U.S. Coast Guard Navigation Center', url: 'http://www.navcen.uscg.gov/'}
      ]
    }
  }
};
</script>
