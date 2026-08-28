<template>
  <div class="min-h-screen bg-white border-2 border-gray-100 mt-14">
    <div class="text-center m-auto w-10/12 my-10 lg:w-9/12 2xl:w-6/12">
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">About Page</h1>
      <p class="text-blue-900 text-lg">Click buttons below for more information about the City of Sherman's GIS program and for information about GIS staff.</p>
    </div>
    <div class="text-red-900 m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-8/12 2xl:w-6/12">
      <div
        v-for="item in items"
        :key="item.to"
        class="bg-blue-900 m-auto mb-6 pb-10 w-48 2xl:w-60 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <router-link :to="item.to">
          <div
            class="font-serif text-md p-3 text-brand-offwhite">
            {{ item.name }}
          </div>
        </router-link>
      </div>
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
