<template>
  <div class="min-h-screen bg-white font-serif border-2 border-gray-100">
    <div class="text-center m-auto w-10/12 py-16 lg:w-9/12 2xl:w-6/12">
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">Market and Community Reports</h1>
      <p class="text-black text-md">Are a visual representation of information or data. The infographics below use American Community Survey (ACS), Census, Esri forecasts, and third-party retail data.</p>
    </div>
    <div class="text-red-900 m-auto mb-6 grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div
        v-for="item in items"
        :key="item.to"
        class="shadow-xl border-t-4 border-blue-800 rounded-lg bg-white transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <router-link class="block h-full" :to="item.to">
          <h1 class="align-top text-left font-serif text-md p-3 text-black font-bold">{{ item.name }}</h1>
          <h1 class="align-middle text-left text-sm p-3 text-black">{{ item.desc }}</h1>
          <h1 class="text-left text-md p-3 text-blue-700">View Report &rarr;</h1>
        </router-link>
      </div>
    </div>
    <div><h1 class="text-3xl md:text-2xl font-serif font-bold text-red-900 mb-10 mt-5">Other Reports</h1></div>
    <div class="text-red-900 m-auto mb-10 grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div
        v-for="item in items1"
        :key="item.to"
        class="shadow-xl border-red-800 border-t-2 bg-white md:text-sm transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <router-link class="block h-full" :to="item.to">
          <h1 class="text-md p-3 text-black">{{ item.name }}</h1>
        </router-link>
      </div>
    </div>    
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'


const items = computed(() => getItems('infographics1'))

const items1 = computed(() => getItems('infographics'))



</script>

<style scoped>

</style>
