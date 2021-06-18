<template>
  <div class="">
    <h1 class="pt-16 pb-8 text-4xl font-bold">Web Maps</h1>
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
        { name: 'Council Districts', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=8d6315e42fc24d1aa12e2c7477f7d0d0' },
        { name: 'Emergency Sirens', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=a36f3d5aa21349d6a152822fe36f79fb' },
        { name: 'Parks & recreation', url: 'https://cityofsherman.maps.arcgis.com/apps/Shortlist/index.html?appid=6202d49de88b4fc4b94e9878648584ae' },
        { name: 'Sex Offender Restricted Areas', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=fad3e825333c4405836de6723978d9b6' },
        { name: 'Sherman School', url: 'https://cityofsherman.maps.arcgis.com/apps/Viewer/index.html?appid=3f4cce8e33e347cfb0393803600a65db' },
        { name: 'Zoning Map', url: 'https://cityofsherman.maps.arcgis.com/apps/webappviewer/index.html?id=c76e6bd8840e4adc9235cfe24b919c49' }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
