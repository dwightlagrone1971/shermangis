<template>
  <div>
    <h1 class=" pt-16 pb-10 text-4xl font-bold">GIS Downloads</h1>
    <div class="md:m-10 md:grid md:grid-cols-4 md:mr-52 md:ml-52">
      <div
        v-for="item in items"
        :key="item"
        class="m-10 mb-5 mt-5">
        <div  class="transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" >
          <div style="background-color: #4a4a4a" >
            <a
              :href="item.url"
              :title="item.name"
              target="_blank"
            >
              <div class="text-lg p-3" style="color: #f8f8f8">
                {{ item.name }}
              </div>
            </a>
          </div>
        </div>
        <div class="text-base font-semibold mt-5 mb-10">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [
        { name: "Points", url: "https://data-cityofsherman.opendata.arcgis.com/search?categories=base%20layers%2Cpoints", text:"Address Points, Control Points, Parks & Recreation, Points of Interest, Sherman Schools & Traffic Counts" },
        { name: "Lines", url: "https://data-cityofsherman.opendata.arcgis.com/search?categories=base%20layers%2Clines", text: "Road Centerlines & Pavement Edge" },
        { name: "Polygons", url: "https://data-cityofsherman.opendata.arcgis.com/search?categories=base%20layers%2Careas", text: "Building Footprints, City Limits, Parcels, Council Districts, E.T.J. & Future Landuse"},
        { name: "Contact Us", url: "mailto:dwightl@cityofsherman.com", text: "Can't find what you are looking for?"}
      ]
    }
  }
};

</script>


<style scoped>

</style>
