<template>
  <div class="bg-white border-2 border-gray-100 mt-14">
    <div :class="wrapped ? 'h-screen' : ''">
      <div class="text-blue-900 -bottom-11font-serif m-auto w-10/12 my-10 lg:w-9/12 2xl:w-6/12">
        <p class="text-blue-900 font-serif m-auto mb-6 2xl:py-10 text-lg font-bold">
          <slot name="blurb" />
        </p>
      </div>
      <div class="m-auto mb-10 w-40 grid h-fit pb-4 grid-cols-1 2xl:h-auto 2xl:w-1/2 2xl:grid-cols-5 2xl:gap-10">
        <div v-for="item in items" :key="item.url">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            <img
              :class="imgClass"
              :src="item.src"
              :alt="item.name"
              loading="lazy"
            />
          </a>
          <h3 class="text-blue-500 text-sm font-bold mb-10 mt-2">{{ item.name }}</h3>
        </div>
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
  // extra classes for each thumbnail <img>; card grids vary slightly here
  imgClass: {
    type: String,
    default: 'shadow-2xl h-auto transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none'
  },
  // a couple of pages wrap their content in a full-viewport-height div
  wrapped: {
    type: Boolean,
    default: false
  }
})

const items = computed(() => getItems(props.type))
</script>
