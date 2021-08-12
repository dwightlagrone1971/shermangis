<template>
  <div style="background-color: #f8f8f8;">
    <h1 class="text-5xl mt-12 mb-12 font-bold 2xl:mt-16 2xl:mb-20" style="color: #4a4a4a">About Page</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-8/12 2xl:w-6/12">
      <div
        v-for="item in items"
        :key="item"
        :click="item.to"
        style="background-color: #4a4a4a;"
        class="m-auto mb-6 pb-10 w-48 2xl:w-72 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <router-link :to="item.to">
          <div
            class="text-lg p-3"
            style="color: #f8f8f8;">
            {{ item.name }}
          </div>
        </router-link>
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
    const items = computed(() => store.getters.getItems('about'))


    return { items, store }
  }
}


</script>

<style scoped>

</style>
