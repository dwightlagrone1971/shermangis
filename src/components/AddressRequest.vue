<template>
  <div class="h-screen bg-white bg-opacity-40">
    <h1 class="pt-12 pb-4 text-4xl font-bold pb-10" style="color: #4a4a4a">Address Request Form</h1>
    <div class="z-10 grid md:grid-cols-1 justify-center flex flex-wrap md:ml-80 md:mr-80">
      <div class="p-4">
          <iframe src="https://survey123.arcgis.com/share/9933e2aecb8e4e97b4107523b70b9e03?portalUrl=https://cityofsherman.maps.arcgis.com" class="m-auto w-full h-full" title="Iframe Example"></iframe>
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-image: url("~@/assets/home-background.png")
}
</style>
