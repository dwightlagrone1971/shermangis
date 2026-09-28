<template>
  <div app class="pt-10 md:pt-0 lg:pt-0 xl:pt-0 flex w-screen justify-center bg-white lg:px-72 xl:px-52">
    <div class="grid grid-cols-1 px-16 md:grid-cols-4 lg:grid-cols-4 lg:w-screen xl:grid-cols-7 xl:w-screen">
      <div
        v-on:click="scrollToElement"
        v-for="item in items"
        :key="item.to"
        class=""

      > 
        <router-link :to="item.to">    
          <div>
            <div class="px-16 md:px-4 lg:px-1 xl:px-1 mb-4 py-4 lg:py-3 xl:py-3 border-1 border-gray-200 hover:bg-gray-200 shadow-lg md:mb-0 lg:mb-0 xl:mb-0">{{ item.name }}</div>
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
