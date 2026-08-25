<template>
  <div class="m-auto w-screen bg-[#4a4a4a]">
    <div class="m-auto h-10 grid grid-cols-5 pt-4 lg:w-8/12">
      <div
        v-for="item in items"
        :key="item.url"
        class="m-auto inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
      >
        <a :href="item.url" :title="item.name" target="_blank" rel="noopener noreferrer">
          <div class="text-sm mb-6 text-[#f8f8f8]">
            {{ item.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'

const items = computed(() => getItems('footer'))
</script>
