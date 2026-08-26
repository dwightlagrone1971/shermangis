<template>
  <div app class="bg-[#f3f3eb] pb-1 border-2 border-gray-300 flex items-center justify-center font-poppins lg:min-h-24">
    <div class="pb-2 my-4 mx-auto w-11/12 max-w-4xl flex flex-wrap justify-center gap-x-4 gap-y-6">
      <div
        v-on:click="scrollToElement"
        v-for="item in items"
        :key="item.to"
        class="w-24 text-center hover:underline "
      >
        <router-link :to="item.to">
          <div>
            <!-- <div class="border-2 w-16 text-lg rounded-full m-auto rounded-full inline-block border-2 border-white bg-red-800 text-white w-18 lg:w-16 lg:h-16 2xl:h-18 transition transform p-4 rounded hover:bg-red-800 hover:text-white transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">{{ item.icon }}</div> -->
            <img :src="item.icon" class="bg-brand-accent h-16 w-16 rounded-full m-auto inline-block md:h-16 md:border-2 md:rounded-full
            border-4 border-white text-white w-18 lg:w-18 lg:h-16 2xl:h-18 transition transform p-4 rounded hover:text-white transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" alt="" />
          </div>
          <div>
            <div class="text-sm font-bold mb-4 mt-4">{{ item.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'

const items = computed(() => getItems('menuItems'))

function scrollToElement() {
  const element = document.getElementById('bottom')
  if (element) {
    element.scrollIntoView(true)
  }
}
</script>


<style scoped>


</style>
