<template>
  <div class="">
    <!-- <h1 class="pb-1 pt-10 text-2xl font-bold" style="color: #f8f8f8">External Links</h1> -->
    <div class="grid md:grid-cols-5 md:ml-64 md:mr-64">
      <div v-for="item in items" :key="item" class="bg-white m-8 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" >
        <a :href="item.url" :title="item.name" class="" target="_blank">
          <div class="h-18 text-sm p-2" style="color: #4a4a4a">
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


<style scoped>
</style>
