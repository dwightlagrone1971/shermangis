<template>
  <h1 class="m-auto text-4xl font-bold py-10 2xl:py-4">Contact Page</h1>
  <div class="m-auto py-6 w-11/12 grid 2xl:grid-cols-2 2xl:w-7/12">
    <div
      class="m-auto border-2 py-8 px-8 mb-10 bg-white shadow-2xl rounded-3xl"
      v-for="contact in contacts"
      :key="contact"
    >
      <div class="m-auto">
        <h2 class="mb-2 text-2xl font-semibold" style="color: #4a4a4a">{{ contact.name }}</h2>
      </div>
      <div class="m-auto">
        <h2 class="text-xl font-semibold" style="color: #4a4a4a">{{ contact.title }}</h2>
        <h2 class="text-xl font-semibold" style="color: #4a4a4a">{{ contact.employer }}</h2>
        <h2 class="text-xl font-semibold" style="color: #4a4a4a">{{ contact.address }}</h2>
        <h2 class="text-xl font-semibold" style="color: #4a4a4a">{{ contact.city }}</h2>
        <h2 class="text-xl font-semibold" style="color: #4a4a4a">{{ contact.phone }}</h2>
        <h2 class="text-xl font-semibold" style="color: #4a4a4a">{{ contact.email }}</h2>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contacts: [
        { type: 'contacts', name:'Dwight LaGrone', title:"GIS Manager", employer:'City of Sherman', address:'220 W Mulberry St', city:'Sherman, Tx 75090', phone:'(903) 892-7310', email:'dwightl@cityofsherman.com' },
        { type: 'contacts', name:'Jerry Pace', title:"GIS Technician - Engineering", employer:'City of Sherman', address:'220 W Mulberry St', city:'Sherman, Tx 75090', phone:'(903) 892-7621', email:'jerryp@cityofsherman.com' },
      ]
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
