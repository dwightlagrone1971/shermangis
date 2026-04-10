 T<template>
  <div class="m-auto w-screen" style="background-color: #4a4a4a;">
    <div class="m-auto h-10 grid grid-cols-5 pt-4 lg:w-8/12">
      <div
        v-for="item in items"
        :key="item"
        class="m-auto inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
      >
        <a :href="item.url" :title="item.name" class="" target="_blank">
          <div class="text-sm mb-6" style="color: #f8f8f8;">
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
    const items = computed(() => store.getters.getItems('footer'))


    return { items, store }
  }
}


</script>


<style>


</style>
