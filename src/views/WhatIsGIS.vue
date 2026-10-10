<template>
  <div class="m-auto h-fit p-auto pb-24">
    <div class="mx-auto max-w-6xl px-6 pt-8 text-left">
      <router-link
        to="/about"
        class="group inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition hover:text-brand-primary"
      >
        <span aria-hidden="true" class="transition group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">&larr;</span>
        Back to About
      </router-link>
    </div>
    <div class="py-16">
      <h1 class="text-3xl font-serif font-bold text-blue-900">What is geographic information services (GIS)?</h1>
    </div>
    <div class="grid md:grid-cols-5 w-8/12 m-auto">
      <div class="h-72 opacity-80">
        <img src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/1c1777c03d434fc887bcf7e9fbc5dba1/data" alt="WhatIsGIS Image">
       </div>
      <div class="md:h-72 md:col-span-4 md:text-left md:pl-5">
        <div>
          <span class="font-bold text-xl">GIS (Global Information System)</span> A geographic information system (GIS) is a system that creates, manages, analyzes, and maps all types of data. GIS connects data to a map, integrating location data (where things are) with all types of descriptive information (what things are like there). This provides a foundation for mapping and analysis that is used in science and almost every industry. GIS helps users understand patterns, relationships, and geographic context. The benefits include improved communication and efficiency as well as better management and decision making. <a href="https://www.esri.com/en-us/what-is-gis/overview" target="_blank" rel="noopener noreferrer" class="text-brand-accent underline">Visit GIS.com.</a>
        </div>
      </div>      
    </div>
  </div>
</template>


