<template>
  <div class="m-auto lg:w-10/12" style="background-color: #f8f8f8;">
    <h1 class="text-5xl mt-12 mb-12 2xl:mt-24 2xl:mb-20 font-bold" style="color: #4a4a4a">GIS Downloads</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-4 2xl:w-10/12">
      <div
        v-for="item in items"
        :key="item"
      >
        <div
          style="background-color: #4a4a4a;"
          class="m-auto mb-6 pb-10 w-72 h-12 2xl:w-72 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
          <a :href="item.url" :title="item.name" target="_blank">
            <div
              class="text-lg p-3"
              style="color: #f8f8f8;">
              {{ item.name }}
            </div>
          </a>
        </div>
        <div>
          <h4 class="m-auto -mt-4 mb-8 w-60">{{ item.text }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore()
    const items = computed(() => store.getters.getItems('gisdownloads'))

    return { items, store }
  }
}

</script>



<style scoped>

</style>
