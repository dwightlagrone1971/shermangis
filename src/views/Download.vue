<template>
  <div class="bg-white border-gray-100 border-2">
    <div class="text-blue-900 -bottom-11font-serif m-auto w-10/12 my-10 lg:w-9/12 2xl:w-6/12">
      <p class="text-blue-900 font-serif m-auto mb-6 2xl:py-10 text-lg font-bold">
        <span class="text-4xl text-blue-900">GIS Data </span>use raw datasets in themed dashboards to download information for your websites, applications or research. Search, filter and zoom in to quickly and easily select only the datasets that interest you. Can't find what you are looking for?   <a href="mailto: dwightl@cityofsherman.com" class="text-xl text-blue-500 font-semibold underline text-red-900"
            target="_blank">   Contact us! </a></p>
    </div>
    <div class="m-auto mb-10 w-40 grid h-fit pb-4 grid-cols-1 2xl:h-auto 2xl:w-1/2 2xl:grid-cols-5 2xl:gap-10">
      <div
       v-for="item in items"
        :key="item"
    >
        <a :href=item.url target=”_blank >
          <img 
          class="border-4 border-white shadow-2xl h-auto transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" 
          :src=item.src alt="">
        </a>       
        <h3 class="text-blue-500 text-sm font-bold mb-10 mt-2">{{ item.name }}</h3>
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
    const items = computed(() => store.getters.getItems('downloads'))


    return { items, store }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .images {
    background: url("https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/0b342b43290044abbc68fe681f9b727c/data");
    width: 5000px;
    height: 500px;
  }
  
</style>
