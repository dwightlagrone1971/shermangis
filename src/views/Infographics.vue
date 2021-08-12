<template>
  <div class="m-auto w-10/12 mt-6 mb-10 2xl:w-7/12" style="background-color: #f8f8f8;">
    <p class="m-auto mb-6 2xl:py-6 text-xl font-bold" style="color: #4a4a4a;">
      <span class="text-4xl">Infographics</span> are a visual representation of information
 or data. The infographics below use American Community
 Survey (ACS), Census, Esri forecasts, and third-party retail data.</p>

 <div class="m-auto grid grid-cols-1 lg:grid-cols-3">
   <div
     v-for="item in items"
     :key="item"
     style="background-color: #4a4a4a;"
     class="m-auto mb-6 pb-10 w-60 2xl:w-72 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
     <a :href="item.url" :title="item.name" target="_blank">
       <div
         class="text-lg p-3"
         style="color: #f8f8f8;">
         {{ item.name }}
       </div>
     </a>
   </div>
 </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore()
    const items = computed(() => store.getters.getItems('infographics'))

    return { items, store }
  },
}

</script>



<style scoped>

</style>
