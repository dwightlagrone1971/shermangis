<template>
  <div class="m-auto py-10 lg:w-10/12 2xl:w-7/12" style="background-color: #f8f8f8;">
    <h1 class="m-auto text-4xl 2xl:mb-16 2xl:mt-4 mb-10 font-bold">Internal Maps</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-3">
      <div
        v-for="item in items"
        :key="item"
        style="background-color: #4a4a4a;"
        class="m-auto mb-6 pb-10 w-60 2xl:w-72 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
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
    const items = computed(() => store.getters.getItems('internal'))


    return { items, store }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
