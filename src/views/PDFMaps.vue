<template>
  <CardGrid type="pdfMaps" heading="PDF Maps" need-help>
    <template #blurb>
      <h1 class="font-serif text-black text-md">The following pdf formats are available for download.</h1>
    </template>
    <template #help>
      <NeedHelp lead="Need a customized map?" label="Contact us" />
    </template>
  </CardGrid>
</template>

<script setup>
import CardGrid from '../components/CardGrid.vue'
import NeedHelp from '../components/NeedHelp.vue'
</script>
