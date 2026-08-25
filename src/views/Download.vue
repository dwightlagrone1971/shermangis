<template>
  <CardGrid
    type="downloads"
    img-class="border-4 border-white shadow-2xl h-auto transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
  >
    <template #blurb>
      <span class="text-4xl text-blue-900">GIS Data </span>use raw datasets in themed dashboards to download information for your websites, applications or research. Search, filter and zoom in to quickly and easily select only the datasets that interest you. Can't find what you are looking for?   <a href="mailto: dwightl@cityofsherman.com" class="text-xl text-blue-500 font-semibold underline text-red-900"
          target="_blank" rel="noopener noreferrer">   Contact us! </a>
    </template>
  </CardGrid>
</template>

<script setup>
import CardGrid from '../components/CardGrid.vue'
</script>
