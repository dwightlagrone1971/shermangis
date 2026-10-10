<template>
  <div class="font-serif min-h-screen bg-white border-2 border-gray-100">
    <div class="text-center m-auto w-10/12 p-16 lg:w-9/12 2xl:w-6/12">
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">About Page</h1>
      <p class="text-black text-md">Click buttons below for more information about the City of Sherman's GIS program and for information about GIS staff.</p>
    </div>
    <div class="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
      <router-link
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="group flex items-center justify-between gap-3 rounded-xl bg-brand-accent px-5 py-4 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-primary hover:shadow-md motion-reduce:transition-none motion-reduce:transform-none"
      >
        <span class="font-serif text-base">{{ item.name }}</span>
        <span aria-hidden="true" class="transition group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">&rarr;</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'

const items = computed(() => getItems('about'))
</script>

<style scoped>

</style>
