<template>
  <div class="border-2 border-gray-200 w-screen bg-white">
    <div class="m-auto md:top-3 md:w-1/2 md:flex lg:mt-20">
      <div class="m-auto w-3/4 p-6 border-2 border-transparent">
        <div class="m-auto my-10">
          <h1 class="text-blue-900 font-serif m-auto mb-1 text-5xl font-bold">GIS Maps</h1>
          <h1 class="text-blue-900 text-left m-auto mt-6 mb-1 text-lg 2xl:mt-6 2xl:mb-1 p-8">The City of Sherman began developing its Geographic Information Systems (GIS) technology in 2011. GIS and related-technologies help city staff manage new development and changes in our infrastructure and natural environment. Visitors may access city GIS data through Internet-based applications and traditional maps.</h1>
        </div>
        <div class="m-auto my-10">
          <h1 class="text-blue-900 font-serif pb-10 mb-1 text-3xl 2xl:mt-18 2xl:mb-1 font-bold italic">Public-Facing GIS "Featured" Applications</h1>
        </div>
        <div class="m-auto my-10">
          <a href="https://cityofsherman.maps.arcgis.com/apps/dashboards/c984e25f1f824e3ea31564ae1477a89e" target="_blank" rel="noopener noreferrer" class="text-blue-900 font-serif my-10 text-3xl underline tracking-widest" style="text-underline-offset: 10px;">Downtown Parking</a>
            <h1 class="text-blue-900 text-left m-auto mt-6 mb-1 text-lg 2xl:mt-2 2xl:mb-1 p-8"><span class="font-bold">Contact:   <a
            href="mailto: NateS@cityofsherman.com"
            class="text-xl font-semibold underline text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
            >Nate Strauch
          </a>
          </span><br><span class="italic font-semibold">Paid Parking</span> - Effective May 2025, the City has discontinued the paid parking program. The Laurel Street lot is now free for all-day parking. Contact the City Finance Department if you've already paid for the next year..<br><span class="italic font-semibold">On-Street Parking</span> -
All street parking and along cross streets is available unless otherwise marked for special events.<br><span class="italic font-semibold">Off-Street Parking</span> -
Downtown Sherman has a combination of public and private parking lots. Look for lots that have 'Free Public Parking' signs near their entrance.</h1>
        </div>
        <div class="m-auto my-10">
          <a href="https://cityofsherman.maps.arcgis.com/apps/dashboards/af44c4110ca24cc28ead1a6feac24a54#" target="_blank" rel="noopener noreferrer" class="text-blue-900 font-serif my-10 text-3xl underline tracking-widest" style="text-underline-offset: 10px;">Parks & Recreation Map</a>
            <h1 class="text-blue-900 text-left m-auto mt-6 mb-1 text-lg 2xl:mt-2 2xl:mb-1 p-8"><span class="font-bold">Contact:   <a
            href="mailto: jeastwood@cityofsherman.com"
            class="text-xl font-semibold underline text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
            >Justin 
          </a>
          </span><br>Sherman offers several parks that provide enjoyable outdoor experiences. We recognize that these areas can sometimes become busy. To accommodate your needs, we offer pavilions, fields, and indoor facilities available for rental, ensuring your event has a dedicated space. If you are interested in hosting your next gathering at one of our parks or indoor facilities, please click on the location below for more information about each site and to begin the reservation process.</h1>
        </div>
      </div>
      <div class="m-auto w-1/2 mt-14 md:mt-12 md:w-1/4 text-center">
        <div class="center-text m-auto bg-brand-dark pb-8 mb-10 p-2">
          <h1 class="m-auto align-top font-serif text-2xl pb-4 pl-4 pr-4 text-white md:mt-4">Want to download GIS data?</h1>
          <h1 class="pl-4 pr-4 text-white">Find the datasets powering our GIS maps by vising our open data portal.</h1>
          <router-link to="/downloads" custom v-slot="{ navigate }">
            <button @click="navigate" class="text-white underline p-2 mt-10 mx-2 rounded-md hover:bg-gray-500">VIEW THE DATASETS</button>
          </router-link>
        </div>
        <div class="m-auto bg-brand-olive pb-8 mb-10 p-2">
          <h1 class="m-auto align-top font-serif text-2xl pb-4 pl-4 pr-4 text-white md:mt-4">Your Place</h1>
          <h1 class="pt-4 pl-4 pr-4 text-white">Your Place provides a property information report that includes zoning information, polling place locations, police beats, legislative districts and much mor</h1>
          <a href="https://cityofsherman.maps.arcgis.com/apps/dashboards/468b0ee6e8a6491bb95fdfe49d51f8b0#" target="_blank" rel="noopener noreferrer" class="inline-block text-white underline p-2 font-bold mt-10 mx-2 rounded-md hover:bg-green-900">VISIT "YOUR PLACE" NOW</a>
        </div>
        <div class="m-auto border-2 bg-brand-primary pb-8 mb-10 p-2">
          <h1 class="m-auto align-top font-serif text-2xl p-4 text-white">More Public Maps</h1>
          <h1 class="p-4 text-white pb-12">Find more public maps in our open data portal.</h1>
          <router-link class="text-white underline p-2 mx-4 rounded-md hover:bg-blue-500" to="/externals">MORE MAPS</router-link>
        </div>
      </div>
    </div>
    <div class="relative w-full overflow-hidden h-24 md:relative md:w-full md:overflow-hidden md:h-48 lg:w-full">
      <div class="w-screen">
        <img src="https://cityofsherman.maps.arcgis.com/sharing/rest/content/items/02e72b43fd964d76a38a59d15d7ad4b3/data" alt="city base map">
      </div>
      <div class="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-red-900 to-transparent md:pl-96 md:w-3/4">
        <h1 class="text-sm text-black font-serif pt-2 pl-32 md:absolute md:w-full md:mt-8 md:text-4xl lg:pr-60">GIS Department</h1>
        <h1 class="text-sm text-black font-serif pl-32 md:absolute md:w-full md:mt-20 md:text-2xl lg:pr-60">City of Sherman</h1>
      </div>
    </div>
  </div>
</template>
