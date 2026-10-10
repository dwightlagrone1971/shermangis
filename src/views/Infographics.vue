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
    <div class="mx-auto mt-10 mb-16 max-w-5xl px-6">
      <div class="border-t border-gray-200 pt-10 mb-6 text-center sm:text-left">
        <h2 class="font-serif text-2xl font-bold text-blue-900">Other Reports</h2>
        <p class="mt-1 text-sm text-gray-500">Additional demographic, housing, and market profiles for Sherman.</p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="item in items1"
          :key="item.to"
          :to="item.to"
          class="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-md motion-reduce:transition-none motion-reduce:transform-none"
        >
          <span class="flex-1 text-sm font-medium text-gray-800 group-hover:text-brand-primary">{{ item.name }}</span>
          <span aria-hidden="true" class="text-gray-400 transition group-hover:translate-x-1 group-hover:text-brand-accent motion-reduce:transition-none motion-reduce:transform-none">&rarr;</span>
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
