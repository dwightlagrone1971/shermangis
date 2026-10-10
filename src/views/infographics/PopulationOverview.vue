<template>
  <div class="bg-black px-4 pt-8 md:px-16 lg:px-54">
    <router-link
      to="/infographics"
      class="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
    >
      <span aria-hidden="true" class="transition group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">&larr;</span>
      Back to Infographics
    </router-link>
  </div>
  <div class="pt-6 pb-16 px-4 md:px-16 lg:px-54 bg-black">
    <VuePdfEmbed annotation-layer text-layer :source="'images/infographics/Population-Overview.pdf'" />
  </div>  
</template>

<script setup>
import VuePdfEmbed from 'vue-pdf-embed'

// Optional styles
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'

// Either URL, Base64, binary, or document proxy
const pdfSource = '<PDF_URL>'
</script>