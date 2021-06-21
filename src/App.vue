<template class="antialiased">
  <div class="w-full">
    <div class="z-1 absolute m-auto md:grid md:grid-cols-2 w-12/12">
      <div class="pl-10 pt-10">
        <img
        alt="City of Sherman"
        class="w-32 opacity-50 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none"
        src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/4c1c14de88764a2e9a5a08f1f0a7207e/data"
      />
      </div>
      <div class="pt-12 text-white -ml-36 text-left ">
        <h1 class="text-5xl">City of Sherman, Texas</h1>
      </div>
    </div>
    <img
      alt="City of Sherman"
      class="w-screen h-80 z-0"
      src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/ca5e6ba318234377a902dd0ee0cac389/data"
    />
    <div>
      <Menu style='background-color: #4a4a4a' />
      <router-view class="home pb-32 bg-auto md:bg-contain" />
      <Footer class="home" />

    </div>
  </div>

</template>


<script>
import Menu from "./components/Menu.vue";
import Featured from "./components/Featured.vue";
import Home from "./components/Home.vue";
import AddressRequest from "./components/AddressRequest.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home, Menu, Featured, Footer, AddressRequest
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.home {
  /* background-color: #f8f8f8; */
  background-image: url("./assets/home-background.png");
  width: 100%;
  height: 100%;
}
</style>
