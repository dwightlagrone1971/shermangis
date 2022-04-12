<template>
  <div class="m-auto lg:w-10/12">
    <h1 class="text-5xl mt-12 mb-12 2xl:mt-24 2xl:mb-12 font-bold" style="color: #4a4a4a">GIS Downloads</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-4 2xl:w-9/12">
      <div>
        <router-link
          class="m-auto mt-8 w-72 lg:w-56 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
          style="background-color: #4a4a4a;"
          to="/points"
        >
          <div div class="m-auto text-md p-2 lg:w-56" style="color: #f8f8f8;">Point Features</div>
        </router-link>
        <p class="m-auto text-md p-2 lg:w-56 2xl:w-60">Addresses, Control Points, Parks & Recreation, Points of Interest, Sherman Schools & Traffic Counts </p>
      </div>
      <div>
        <router-link
          class="m-auto mt-8 w-72 lg:w-56 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
          style="background-color: #4a4a4a;"
          to="/lines"
        >
          <div div class="m-auto text-md p-2 lg:w-56" style="color: #f8f8f8;">Line Features</div>
        </router-link>
        <p class="m-auto text-md p-2 lg:w-56 2xl:w-60">Pavement Edge & Road Centerlines</p>
      </div>
      <div>
        <router-link
          class="m-auto mt-8 w-72 lg:w-56 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
          style="background-color: #4a4a4a;"
          to="/polygons"
        >
          <div div class="m-auto text-md p-2 lg:w-56" style="color: #f8f8f8;">Polygon Features</div>
        </router-link>
        <p class="m-auto text-md p-2 lg:w-56 2xl:w-60">Building Footprints, City Limits, City Parcels, Council Districts, E.T.J. & Future Landuse</p>
      </div>
      <div>
        <router-link
          class="m-auto mt-8 w-72 lg:w-56 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
          style="background-color: #4a4a4a;"
          to="/contacts"
        >
          <div div class="m-auto text-md p-2 lg:w-56" style="color: #f8f8f8;">Contact Us</div>
        </router-link>
        <p class="m-auto text-md p-2 lg:w-56 2xl:w-60">Can't find what you are looking contact us</p>
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
    const items = computed(() => store.getters.getItems('gisdownloads'))

    return { items, store }
  }
}

</script>



<style scoped>

</style>


gisdownloads