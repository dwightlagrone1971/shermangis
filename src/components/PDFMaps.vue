<template>
  <div class="">
    <h1 class="pt-16 pb-8 text-4xl font-bold drop-shadow-2xl ">PDF Maps</h1>
    <div class="grid md:grid-cols-4 md:ml-80 md:mr-80">
      <div v-for="item in items" :key="item" class="m-8 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a" >
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

export default {
  data() {
    return {
      items: [
        { name: 'City Limits Map (Large)', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/7b05f3ab5b514ae99a9f665380721ada/data' },
        { name: 'City Limits Map (Small)', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4009aba74faa4c40b57d3337f4f11706/data' },
        { name: 'Control Monuments', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/878a50934b3b4adc85218e46af40f77d/data' },
        { name: 'Council District Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/6891bd3aedfb41d59e25eed86d7fb0c3/data' },
        { name: 'E.T.J Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/2097361b3fec4b289763d414df040b27/data' },
        { name: 'Sherman Schools', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/098b94114bec4031a3638978be32874e/data' },
        { name: 'Zoning Map', url: 'https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/e1e4313e1d1248228d6bb29b31163ac4/data' }

      ]
    }
  }    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
