<template>
  <div app style="background-color:#f3f3eb" class="pb-1 border-2 border-gray-300 flex items-center justify-center font-poppins lg:h-24">
    <div class="pb-2 -bottom-11h-20 m-auto mt-14 w-36 grid grid-cols-1 w-8/12 lg:grid-cols-7 lg:w-8/12 2xl:-mt-8 2xl:grid-cols-7 2xl:w-6/12">
      <div
        v-on:click="scrollToElement"
        v-for="item in items"
        :key="item"
        class="hover:underline "
      > 
        <router-link :to="item.to">
          <div>
            <!-- <div class="border-2 w-16 text-lg rounded-full m-auto rounded-full inline-block border-2 border-white bg-red-800 text-white w-18 lg:w-16 lg:h-16 2xl:h-18 transition transform p-4 rounded hover:bg-red-800 hover:text-white transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none">{{ item.icon }}</div> -->
            <img :src="item.icon" style="background-color: #005095" class="h-16 w-16 rounded-full m-auto inline-block md:h-16 md:border-2 md:rounded-full
            border-4 border-white bg-red-800 text-white w-18 lg:w-18 lg:h-16 2xl:h-18 transition transform p-4 rounded hover:bg-red-800 hover:text-white transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" alt="" />
          </div>          
          <div>
            <div class="text-sm font-bold mb-4 mt-4">{{ item.name }}</div>
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
    const store = useStore()
    const items = computed(() => store.getters.getItems('menuItems'))

    return { items, store }
  },
  methods: {
    scrollToElement() {
      let element = document.getElementById('bottom');
      element.scrollIntoView(true);
    }
  }
}


</script>


<style scoped>


</style>
