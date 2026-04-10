<template>
  <div class="border-2 border-gray-200 w-screen font-freight-sans-pro helvetica serif bg-white">
    <div class="m-auto md:top-3 md:w-1/2 md:flex">
      <div class="m-auto w-3/4">
        <div class="m-auto my-10">
          <h1 class="text-blue-900 font-freight-sans-pro helvetica serif m-auto mt-12 mb-1 text-5xl font-bold">GIS Maps</h1>
          <h1 class="text-blue-900 font-freight-sans-pro helvetica serif text-left m-auto mt-6 mb-1 text-lg 2xl:mt-18 2xl:mb-1 p-8">The City of Sherman began developing its Geographic Information Systems (GIS) technology in 2011. GIS and related-technologies help city staff manage new development and changes in our infrastructure and natural environment. Visitors may access city GIS data through Internet-based applications and traditional maps.</h1>
        </div>
        <div class="m-auto my-10">
          <h1 class="text-blue-900 font-freight-sans-pro helvetica mb-1 text-3xl 2xl:mt-18 2xl:mb-1 font-bold italic">Public-Facing GIS "Featured" Applications</h1>
          <h1 class="text-blue-900 font-freight-sans-pro helvetica serif text-left m-auto mt-6 mb-1 text-lg 2xl:mt-18 2xl:mb-1 p-8">The following is a list of public-facing GIS applications that the City of Sherman currently provides.</h1>
        </div>
        <div class="m-auto my-10">
          <a href="https://cityofsherman.maps.arcgis.com/apps/dashboards/c984e25f1f824e3ea31564ae1477a89e" target="_blank" class="text-blue-900 font-freight-sans-pro helvetica my-10 text-3xl underline tracking-widest" style="text-underline-offset: 10px;">Downtown Parking</a>        
            <h1 class="text-blue-900 font-freight-sans-pro helvetica serif text-left m-auto mt-6 mb-1 text-lg 2xl:mt-18 2xl:mb-1 p-8"><span class="font-bold">Contact:   <a
            href="mailto: NateS@cityofsherman.com"
            class="text-xl font-semibold underline text-blue-900"
            target="_blank"
            >Nate Strauch
          </a>
          </span><br><span class="italic font-semibold">On-Street Parking</span> - 
All street parking and along cross streets is available unless otherwise marked for special events.<br><span class="italic font-semibold">Off-Street Parking</span> - 
Downtown Sherman has a combination of public and private parking lots. Look for lots that have 'Free Public Parking' signs near their entrance.</h1>
        </div>
        <div class="m-auto my-10">
          <a href="https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=000839d23a014bd791bb19d4667f177c" target="_blank" class="text-blue-900 font-freight-sans-pro helvetica my-10 text-3xl underline tracking-widest" style="text-underline-offset: 10px;">Garbage Collection Map</a>        
            <h1 class="text-blue-900 font-freight-sans-pro helvetica serif text-left m-auto mt-6 mb-1 text-lg 2xl:mt-18 2xl:mb-1 p-8"><span class="font-bold">Contact:   <a
            href="mailto: jimmym@cityofsherman.com"
            class="text-xl font-semibold underline text-blue-900"
            target="_blank"
            >Jimmy Mrozinski
          </a>
          </span><br>The Garbage Collection Map allows the public to see whether or not they receive garbage collection service from the City and on what day pick-up occurs. Links to service provider phone numbers and garbage cart ordering information is provided.</h1>
        </div>        
        <!-- <div class="m-auto my-10">
          <a href="https://cityofsherman.maps.arcgis.com/apps/dashboards/7ef89fd885e04d8e82d4ff2195a94b94" target="_blank" class="text-red-900 font-freight-sans-pro helvetica my-10 text-3xl underline tracking-widest" style="text-underline-offset: 10px;">City Projects</a>        
            <h1 class="text-red-900 font-freight-sans-pro helvetica serif text-left m-auto mt-6 mb-1 text-lg 2xl:mt-18 2xl:mb-1 p-8"><span class="font-bold">Contact:   <a
            href="mailto: NateS@cityofsherman.com"
            class="text-xl font-semibold underline text-red-900"
            target="_blank"
            >Nate Strauch
          </a>
          </span><br>The City Projects site contains information for Capital Improvement Projects, Development Projects, and Planning & Zoning in one application.</h1>
        </div>
        <div class="m-auto my-10">
          <a href="https://cityofsherman.maps.arcgis.com/apps/dashboards/65fcbad2b4cb41cd94c5e33caca3232d" target="_blank" class="text-red-900 font-freight-sans-pro helvetica my-10 text-3xl underline tracking-widest" style="text-underline-offset: 10px;">Planned Developments</a>        
            <h1 class="text-red-900 font-freight-sans-pro helvetica serif text-left m-auto mt-6 mb-1 text-lg 2xl:mt-18 2xl:mb-1 p-8"><span class="font-bold">Contact:   <a
            href="mailto: Planning@cityofsherman.com"
            class="text-xl font-semibold underline text-red-900"
            target="_blank"
            >Development Services
          </a>
          </span><br>The Planned Development Map allows users to see locations and data about new development in the City of Sherman.</h1>
        </div>         -->
      </div>
      <div class="m-auto w-1/2 mt-14 md:mt-12 md:w-1/4 text-center">
        <div style="background-color: #383838" class="center-text m-auto bg-gray-300 pb-8 mb-10 p-2">
          <h1 class="m-auto align-top text-2xl pb-4 pl-4 pr-4 text-white md:mt-4">Want to download GIS data?</h1>
          <h1 class="pl-4 pr-4 text-white">Find the datasets powering our GIS maps by vising our open data portal.</h1>
          <router-link to="/downloads"><button class="text-white underline p-2 mt-10 mx-2 rounded-md hover:bg-gray-500">VIEW THE DATASETS</button></router-link>
        </div>
        <div style="background-color: #676e20" class="m-auto border-2 bg-gray-300 pb-8 mb-10 p-2">
          <h1 class="m-auto align-top text-2xl pb-4 pl-4 pr-4 text-white md:mt-4">Your Place</h1>
          <h1 class="pt-4 pl-4 pr-4 text-white">Your Place provides a property information report that includes zoning information, polling place locations, police beats, legislative districts and much mor</h1>
          <a href="https://cityofsherman.maps.arcgis.com/apps/instant/lookup/index.html?appid=efd3c1d6d3144c9eb11326ec20c79626" target="_blank"><button class="text-white underline p-2 font-bold mt-10 mx-2 rounded-md hover:bg-green-900">VISIT "YOUR PLACE" NOW</button></a>
        </div>
        <div style="background-color: #08244c" class="m-auto border-2 bg-gray-300 pb-8 mb-10 p-2">
          <h1 class="m-auto align-top text-2xl p-4 text-white">More Public Maps</h1>
          <h1 class="p-4 text-white pb-12">Find more public maps in our open data portal.</h1>
          <router-link class="text-white underline p-2 mx-4 rounded-md hover:bg-blue-500" to="/externals" tag="button">MORE MAPS</router-link>
        </div>
      </div>
    </div>
    <div class="relative w-full overflow-hidden h-24 md:relative md:w-full md:overflow-hidden md:h-48 ">
      <div class="w-screen">
        <img src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/02e72b43fd964d76a38a59d15d7ad4b3/data" alt="city base map">
      </div>
      <div class="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-red-900 to-transparent md:pl-96 md:w-3/4">
        <h1 class="text-sm text-black font-serif pt-2 pl-32 md:absolute md:w-full md:mt-8 md:text-4xl">GIS Department</h1> 
        <h1 class="text-sm text-black font-serif pl-32 md:absolute md:w-full md:mt-20 md:text-2xl">City of Sherman</h1> 
      </div>      
    </div>
  </div> 
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore();
    const items = computed(() => store.getters.getItems('featured'))


    return { items, store }
  }
}


</script>
