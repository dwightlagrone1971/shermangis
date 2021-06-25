<template>
  <div class="">
    <h1 class="pt-16 pb-8 text-4xl font-bold">Featured Maps</h1>
    <div class="grid md:grid-cols-2 md:mx-96">
      <div v-for="item in items" :key="item" class="m-8 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a" >
        <a :href="item.url" :title="item.name" target="_blank">
          <div class="text-lg p-3" style="color: #f8f8f8">
            {{ item.name }}
          </div>
        </a>
      </div>
    </div>
    <router-link
        to="/external"
      >
        <button class="mt-14 p-3 text-lg inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="color: #f8f8f8; background-color: #4a4a4a;">More Web Maps</button>
      </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'ALL-IN-ONE', url: 'https://cityofsherman.maps.arcgis.com/apps/PublicInformation/index.html?appid=b9b1bfd6bec643aeaa4d6c5ad17a0388' },
        { name: 'Residential Dashboard', url: 'https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626' },
      ]
    }
  }
}
</script>


<style scoped>
</style>
