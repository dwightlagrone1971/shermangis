<template>
  <div>
    <h1 class="pt-16 pb-10 text-4xl font-bold" style="color: #4a4a4a">About Page</h1>
    <div class="mt-2 pb-8 grid md:grid-cols-3 md:ml-96 md:mr-96 mb-10">
      <button v-for="item in items" :key="item" class="bg-white m-10 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a">
        <router-link :to="item.to">
          <div class="text-lg p-3" style="color: #f8f8f8">
            {{ item.name }}
          </div>
        </router-link>
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
    const items = computed(() => store.getters.getItems('about'))


    return { items, store }
  }
}


</script>

<style scoped>

</style>
