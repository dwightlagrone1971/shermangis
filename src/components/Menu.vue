<template>
  <nav aria-label="Main" class="sticky top-0 z-40 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
    <div class="mx-auto max-w-6xl px-6">
      <!-- phones: current page + menu toggle -->
      <div class="flex items-center justify-between py-3 md:hidden">
        <span class="font-serif text-lg font-bold text-brand-primary">{{ currentName }}</span>
        <button
          type="button"
          class="rounded-lg p-2 text-brand-primary transition hover:bg-gray-100"
          :aria-expanded="open"
          aria-controls="main-menu"
          @click="open = !open"
        >
          <span class="sr-only">{{ open ? 'Close menu' : 'Open menu' }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="h-6 w-6" aria-hidden="true">
            <path v-if="open" d="M6 6l12 12M18 6L6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <ul
        id="main-menu"
        :class="open ? 'flex' : 'hidden'"
        class="flex-col pb-3 md:flex md:flex-row md:flex-wrap md:justify-center md:gap-x-2 md:pb-0"
      >
        <li v-for="item in items" :key="item.to">
          <router-link :to="item.to" custom v-slot="{ href, navigate, isExactActive }">
            <a
              :href="href"
              :aria-current="isExactActive ? 'page' : undefined"
              :class="isExactActive
                ? 'text-brand-accent bg-blue-50 md:bg-transparent md:border-brand-accent'
                : 'text-brand-primary hover:text-brand-accent hover:bg-gray-50 md:hover:bg-transparent md:border-transparent'"
              class="block rounded-lg px-3 py-3 text-sm font-medium transition md:rounded-none md:border-b-2 md:py-4"
              @click="navigate"
            >
              {{ item.name }}
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getItems } from '../data/items.js'

const items = computed(() => getItems('menuItems'))
const route = useRoute()
const open = ref(false)

// label shown next to the menu button on phones
const currentName = computed(() => items.value.find(item => item.to === route.path)?.name ?? 'Menu')

// close the phone menu after navigating
watch(() => route.path, () => { open.value = false })
</script>
