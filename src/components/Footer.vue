<template>
  <footer class="w-full bg-brand-footer border-t-4 border-brand-accent">
    <div class="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
      <nav class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <a
          v-for="item in items"
          :key="item.url"
          :href="item.url"
          :title="item.name"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm tracking-wide text-brand-offwhite transition hover:text-blue-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none"
        >
          {{ item.name }}
        </a>
      </nav>
      <p class="text-xs text-gray-300">&copy; {{ year }} City of Sherman GIS Department</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'

const items = computed(() => getItems('footer'))
const year = new Date().getFullYear()
</script>
