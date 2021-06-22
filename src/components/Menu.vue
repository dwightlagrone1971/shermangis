<template>
  <div id="scroll-to" class="bg-white">
    <div class="grid md:grid-cols-6 md:ml-32 md:mr-32">
      <button v-on:click="scroll" v-for="item in menuItems" :key="item" class="bg-white m-8 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" >
        <router-link  :to="item.to">
          <div class="text-lg p-2" style="color: #4a4a4a">
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
                { name: 'Address Request Form', to: '/addressrequest'},
                { name: 'Web Maps', to: '/featured' },
                { name: 'Internal Web Maps', to: '/internal' },
                { name: 'GIS Downloads', to: '/gisdownload' },
                { name: 'PDF Maps', to: '/pdfmaps' },
                { name: 'About', to: '/about' },
            ]
        }
    },
    methods: {
        scroll() {
          const element = document.getElementById('scroll-to');
          element.scrollIntoView({ behavior: 'smooth' });
        }
    },

};

</script>


<style scoped>

</style>
