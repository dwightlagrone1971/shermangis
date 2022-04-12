<template class="antialiased font-mono" >
  <div class="app">

      <Header />
      <Menu />
      <router-view class="h-screen"/>
      <Footer class="footer" />

  </div>

</template>


<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header, Menu, Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.footer {
  position:fixed;
  bottom:0;
}
body {
  background-size: cover;
  background-image: url('https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/5b951cedd3b3404e89b120e839894be7/data');
}

</style>
