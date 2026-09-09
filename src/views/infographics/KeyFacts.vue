<template>
  <div>
    <div class="flex justify-center items-center bg-black">
          <router-link class="bg-blue-900 text-white p-2 md:mt-20 md:py-2 md:px-4 md:rounded" to="/infographics">Back to Infographics Page</router-link>
    </div>
  </div>
  <div class="py-16 px-54 bg-black">
    <VuePdfEmbed annotation-layer text-layer :source="'images/infographics/Key-Facts.pdf'" />
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