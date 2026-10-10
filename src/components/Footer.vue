<template>
  <footer class="w-full bg-brand-primary border-t-4 border-brand-accent text-brand-offwhite">
    <div class="max-w-6xl mx-auto px-6 py-12 grid gap-10 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-3">
      <div class="sm:col-span-2 lg:col-span-1">
        <h2 class="font-serif text-2xl font-bold text-white">Analyze Sherman</h2>
        <p class="mt-3 text-sm leading-relaxed text-gray-300 max-w-sm mx-auto sm:mx-0">
          Maps, data, and reports from the City of Sherman GIS Department.
        </p>
      </div>

      <nav aria-label="Site">
        <h3 class="text-xs font-semibold uppercase tracking-widest text-blue-300">Explore</h3>
        <ul class="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
          <li v-for="item in menuItems" :key="item.to">
            <router-link
              :to="item.to"
              class="text-sm text-gray-200 transition hover:text-white hover:underline underline-offset-4"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <nav aria-label="Partner sites">
        <h3 class="text-xs font-semibold uppercase tracking-widest text-blue-300">Partner Sites</h3>
        <ul class="mt-4 space-y-2">
          <li v-for="item in items" :key="item.url">
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-gray-200 transition hover:text-white hover:underline underline-offset-4"
            >
              {{ item.alt }} <span aria-hidden="true" class="text-blue-300">&#8599;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="border-t border-white/10">
      <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p class="text-xs text-gray-400">&copy; {{ year }} City of Sherman GIS Department</p>
        <router-link to="/contacts" class="text-xs text-gray-300 transition hover:text-white hover:underline underline-offset-4">
          Contact GIS
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'

const items = computed(() => getItems('footer'))
const menuItems = computed(() => getItems('menuItems'))
const year = new Date().getFullYear()
</script>
