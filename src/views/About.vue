<template>
  <div class="h-screen bg-white border-2 border-gray-100">
    <div class="text-blue-900 -bottom-11font-serif m-auto w-10/12 my-10 lg:w-9/12 2xl:w-6/12">
      <p class="text-blue-900 font-serif m-auto mb-6 2xl:py-10 text-lg font-bold">
        <span class="text-4xl text-blue-900">About Page </span>click buttons below for more information about the City of Sherman's GIS program and for information about GIS staff.</p>
    </div>
    <div class="text-red-900 m-auto grid grid-cols-1 lg:grid-cols-3 lg:w-8/12 2xl:w-6/12">
      <div
        v-for="item in items"
        :key="item"
        :click="item.to"
        class="bg-blue-900 m-auto mb-6 pb-10 w-48 2xl:w-60 h-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">
        <router-link :to="item.to">
          <div
            class="font-serif text-md p-3 text-blue-900"
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
