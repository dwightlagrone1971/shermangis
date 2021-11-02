<template>
    <div class="w-full h-11/12 ">
      <div class="z-1 absolute m-auto md:grid md:grid-cols-2 w-12/12">
        <div class="pl-10 pt-10">
          <img
            alt="City of Sherman"
            class="w-32 opacity-50 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none"
            src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/25102411e6bf41698ef7a137e03444fb/data"
          />
        </div>
        <div class="pt-12 text-white -ml-36 text-left drop-shadow-2xl">
          <h1 class="text-5xl">City of Sherman, Texas</h1>
          <h1 class="text-4xl">GIS Department</h1>
        </div>
      </div>
      <img
        alt="City of Sherman"
        class="w-screen h-80 z-0"
        src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/ca5e6ba318234377a902dd0ee0cac389/data"
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
