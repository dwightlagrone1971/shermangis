<template>
  <div class="bg-white border-gray-100 border-2 ">
    <iframe src="https://sherman-open-data-cityofsherman.hub.arcgis.com/search" title="description" width="100%" height="1000"></iframe>
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
