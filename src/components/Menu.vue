<template>
  <div class="bg-white">
    <div class="grid md:grid-cols-5 md:ml-40 md:mr-40">
      <button @click="goto('div1')" v-for="item in menuItems" :key="item" class="bg-white m-10 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" >
        <router-link :to="item.to">
          <div class="text-lg p-3" style="color: #4a4a4a">
            {{ item.name }}
          </div> 
        </router-link>
      </button>
    </div>
  </div>     
</template>

<script>

export default {
    data() {
        return {
            menuItems: [
                { name: 'Home', to: '/' },
                { name: 'Web Maps', to: '/featured' },
                { name: 'Internal Web Maps', to: '/internal' },
                { name: 'GIS Downloads', to: '/gisdownload' },
                { name: 'PDF Maps', to: '/pdfmaps' },

            ]
        }
    },
    methods: {
        goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop - 200;

        window.scrollTo(0, top);
        }
    }
};

</script>


<style scoped>

</style>
