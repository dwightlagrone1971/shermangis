<template>
    <div class="w-full">
      <div class="right-0 z-1 absolute m-auto w-12/12 justify-left lg:w-5/12">
        <div class="pt-6 lg:pr-20 text-white relative fixed inset-x-0 top-0">
          <h1 class="text-xl">Welcome</h1>
          <h1 class="text-3xl">Analyze Sherman</h1>
          <p class="text-xl">Analyze Sherman is the City of Sherman's open data hub.  We invite</p>
          <p class="text-xl"> you to explore our datasets, web maps and other information</p>
        </div>
      </div>
      <img
        alt="City of Sherman"
        class="w-screen h-60"
        style="object-fit: cover"
        src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/8c29f25290cd448a88f36ac6fd53a20e/data"
        />
    <div>
  </div>
</div>

</template>


<script>

export default {
  data() {
    return {}
  },
};
</script>


<style>
.home {
  background-image: url("~@/assets/home-background.png")
}
</style>
