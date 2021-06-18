<template>
  <div>
    <h1 class="pt-16 pb-8 text-4xl font-bold">GIS Home Page</h1>
    <div class="mt-2 pb-8 grid md:grid-cols-3 md:ml-96 md:mr-96">   
      <button @click="goto('div1')" v-for="item in items" :key="item" class="bg-white m-10 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a">
        <router-link :to="item.to">
          <div class="text-lg p-3" style="color: #f8f8f8">
            {{ item.name }}
          </div> 
        </router-link>
      </button>
    </div>
    <div >
      <div class="h-16 w-72 m-auto p-4 m-10 mb-3 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a ">
        <a href="https://survey123.arcgis.com/share/9933e2aecb8e4e97b4107523b70b9e03?portalUrl=https://cityofsherman.maps.arcgis.com" target="_blank">
          <div class="text-lg" style="color: #f8f8f8">
            Address Request Form
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
        { name: 'What is GIS?', to: '/whatisgis' },
        { name: 'What is GPS?', to: '/whatisgps' },
        { name: 'Contact US', to: '/contact' }
      ]
    }
  }    
};

</script>


<style scoped>

</style>
