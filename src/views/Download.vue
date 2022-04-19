<template>
  <div class="m-auto lg:w-10/12">
    <h1 class="text-5xl mt-12 mb-12 2xl:mt-24 2xl:mb-12 font-bold" style="color: #4a4a4a">GIS Downloads</h1>
    <div class="m-auto grid grid-cols-1 lg:grid-cols-2 2xl:w-5/12">
      <div>
        <a
          href="https://data-cityofsherman.opendata.arcgis.com/search?tags=download"
          target="_blank"
          class="m-auto mt-8 w-72 lg:w-60 2xl:w-84 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
          style="background-color: #4a4a4a;"
        >
          <div div class="m-auto text-md p-2 lg:w-84" style="color: #f8f8f8;">GIS Downloads</div>
        </a>
        <p class="m-auto text-md p-2 w-72 lg:w-60 2xl:w-84">Click to Download GIS Features</p>
      </div>
      <div>
        <router-link
          class="m-auto mt-8 w-72 lg:w-60 2xl:w-84 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
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
