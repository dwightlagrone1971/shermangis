<template>
  <div id="scroll-to" class="bg-white">
    <div class="grid md:grid-cols-6 md:ml-32 md:mr-32">
      <button v-on:click="scroll" v-for="item in items" :key="item" class="bg-white m-8 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" >
        <router-link  :to="item.to">
          <div class="text-lg p-2" style="color: #4a4a4a">
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
    const store = useStore()
    const items = computed(() => store.getters.getItems('menuItems'))

    return { items, store }
  }
}


</script>


<style scoped>

</style>
