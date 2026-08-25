<template>
  <div class="bg-white border-2 border-gray-100 mt-14">
    <div :class="wrapped ? 'min-h-screen' : ''">
      <div class="text-center m-auto w-10/12 my-10 lg:w-9/12 2xl:w-6/12">
        <h1 class="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">{{ heading }}</h1>
        <p class="text-blue-900 text-lg">
          <slot name="blurb" />
        </p>
      </div>
      <div class="mx-auto mb-10 w-full max-w-6xl grid grid-cols-1 gap-x-6 gap-y-10 px-6 pb-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <a
          v-for="item in items"
          :key="item.url"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:transform-none"
        >
          <div class="aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img
              :src="item.src"
              :alt="item.name"
              loading="lazy"
              class="h-full w-full object-cover"
            />
          </div>
          <h2 class="p-3 text-center text-sm font-bold text-blue-700">{{ item.name }}</h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'

const props = defineProps({
  // store `type` to pull cards from, e.g. 'downloads', 'external'
  type: {
    type: String,
    required: true
  },
  // page title, e.g. "GIS Data" -- rendered as the page's <h1>
  heading: {
    type: String,
    required: true
  },
  // a couple of pages want to guarantee at least a full viewport of
  // height even with few cards; min- so long lists still push the
  // footer down instead of the footer overlapping content
  wrapped: {
    type: Boolean,
    default: false
  }
})

const items = computed(() => getItems(props.type))
</script>
