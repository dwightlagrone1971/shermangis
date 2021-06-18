<template>
  <div class="">
    <h1 class="pt-16 pb-8 text-4xl font-bold">Internal Web Maps</h1>
    <div class="grid md:grid-cols-3 md:ml-96 md:mr-96">
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
        { name: 'Code Incidents (2021)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=83d4528b6352402d9ce262c45a07e11a'},
        { name: 'Code Incidents (All)', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=2e9d062f4c6e4cac9ec10024ebc8eb7b'},
        { name: 'Code Simple Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=193d2f120fa947aeb6fe65989faef9a9'},
        { name: 'Detailed Parks Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=78f0ba56e43a4edeb9e2166ebf7c7337'},
        { name: 'Mowing Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=1e4c344342414fbba77d9805a67a61a4'},
        { name: 'Storm Water Fees', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=6ff28e8cc3fa4cd69d80b9077eec3f1c'}

      ]
    }
  }    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
