<template>
  <CardGrid
    type="external"
    img-class="w-48 h-36 shadow-2xl h-auto transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
  >
    <template #blurb>
      <span class="text-4xl text-blue-900">Public Maps </span>use layered interactive maps to search every nook and cranny of Sherman: from zoning around your neighborhood to nearby parks, and hike and bike trails.
    </template>
  </CardGrid>
</template>

<script setup>
import CardGrid from '../components/CardGrid.vue'
</script>
