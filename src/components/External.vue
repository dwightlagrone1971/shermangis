<template>
  <div class="">
    <h1 class="pt-16 pb-14 text-4xl font-bold" style="color: #4a4a4a">Web Maps</h1>
    <div class="grid md:grid-cols-3 md:ml-96 md:mr-96">
      <div v-for="item in items" :key="item" class="mb-10 mr-12 ml-12 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a" >
        <a :href="item.url" :title="item.name" target="_blank">
          <div class="text-lg p-3" style="color: #f8f8f8">
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
    const items = computed(() => store.getters.getItems('external'))


    return { items, store }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
