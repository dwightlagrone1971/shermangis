<template>
  <div>
    <h1 class="text-5xl mt-12 mb-12 font-bold 2xl:mt-24 2xl:mb-16" style="color: #4a4a4a">GIS Polygon Features</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-9/12 2xl:w-6/12">
      <div
        v-for="item in items"
        :key="item"
        style="background-color: #4a4a4a;"
        class="m-auto mb-6 pb-10 w-72 2xl:w-84 h-14 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <a :href="item.url" :title="item.name" target="_blank">
          <div
            class="text-lg p-3"
            style="color: #f8f8f8;">
            {{ item.name }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.getters.getItems('polygons'))


    return { items, store }
  }
}


</script>
