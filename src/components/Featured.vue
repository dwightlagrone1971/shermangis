<template>
  <div class="">
    <h1 class="pt-16 pb-10 text-4xl font-bold" style="color: #4a4a4a">Featured Maps</h1>
    <div class="grid md:mx-96 md:grid-cols-2" >
      <div v-for="item in items" :key="item" class="m-8 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a" >
        <a :href="item.url" :title="item.name" target="_blank">
          <div class="text-lg p-3" style="color: #f8f8f8">
            {{ item.name }}
          </div>
        </a>
      </div>
    </div>
    <router-link
        to="/external"
      >
        <button class="mt-14 p-3 text-lg inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="color: #f8f8f8; background-color: #4a4a4a;">More Web Maps</button>
    </router-link>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.getters.getItems('featured'))


    return { items, store }
  }
}


</script>
