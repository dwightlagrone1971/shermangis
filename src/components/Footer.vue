<template>
  <div class="">
    <h1 class="pb-1 pt-10 text-3xl font-bold">External Links</h1>
    <div class="grid md:grid-cols-5 md:ml-64 md:mr-64">
      <div v-for="item in items" :key="item" class="m-8 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" style="background-color: #4a4a4a" >
        <a :href="item.url" :title="item.name" class="" target="_blank">
          <div class="h-18 text-sm p-3" style="color: #f8f8f8">
            {{ item.name }}
          </div> 
        </a>
      </div>
    </div>
  </div>     
</template>

<script>
export default {
    data() {
        return {
            items: [
                { name: " City of sherman", url: "https://www.ci.sherman.tx.us/", alt:"City of Sherman" },
                { name: "Grayson County", url: "https://www.co.grayson.tx.us/", alt:"Grayson County" },
                { name: "G-CAD", url: "https://www.graysonappraisal.org/", alt:"Grayson County" },
                { name: "TCOG", url: "https://www.tcog.com/", alt:"TCOG" },
                { name: "ESRI", url: "https://www.tcog.com/", alt:"ESRI" }
            ]
        }
    }
}
</script>


<style scoped>
</style>