<template class="antialiased font-mono" >
  <div class="app bg-gray-100">

      <Header />
      <Menu />
      <router-view class="page-bg" />
      <Footer />

  </div>

</template>

<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.page-bg {
  background-size: cover;
  background-image: url('https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/f9ee3c7d41e24ec9b9f3516958c1e4a7/data');
}

</style>
