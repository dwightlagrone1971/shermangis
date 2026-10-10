<template>
  <CardGrid type="downloads" heading="GIS Data" need-help>
    <template #blurb>
      <h1 class="font-serif text-black text-md mb-4">Use raw datasets in themed dashboards to download information for your websites, applications or research. Search, filter and zoom in to quickly and easily select only the datasets that interest you.</h1>
    </template>
    <template #help>
      <NeedHelp lead="Not able to find what you need?" label="Contact us" />
    </template>
  </CardGrid>
</template>

<script setup>
import CardGrid from '../components/CardGrid.vue'
import NeedHelp from '../components/NeedHelp.vue'
</script>
