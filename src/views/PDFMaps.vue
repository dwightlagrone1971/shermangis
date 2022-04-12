<template>
  <div class="m-auto lg:w-11/12 2xl:w-8/12">
    <h1 class="m-auto text-5xl mt-12 mb-12 font-bold 2xl:mt-24 2xl:mb-20" style="color: #4a4a4a">PDF Maps</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-4 lg:w-11/12 2xl:w-12/12">
      <button
        v-for="item in items"
        :key="item"
        style="background-color: #4a4a4a;"
        class="m-auto mb-6 pb-10 w-56 2xl:w-64 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <a :href="item.url" :title="item.name" target="_blank">
          <div
            class="text-lg p-3"
            style="color: #f8f8f8;">
            {{ item.name }}
          </div>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.getters.getItems('pdfMaps'))


    return { items, store }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
