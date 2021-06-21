<template>
  <div>
    <h1 class="pt-14 pb-10 text-4xl font-bold">Contact Page</h1>
    <div class="text-lg font-semibold md:grid md:grid-cols-2 md:mr-96 md:ml-96">
      <div
        v-for="contact in contacts"
        :key="contact"
        class="border-2 border-gray-600 rounded-3xl h-60 bg-white shadow-2xl m-10 pt-10 md:ml-20 md:mr-20"
      >
        <div>{{ contact.name }}</div>
        <div>{{ contact.title }}</div>
        <div>{{ contact.address }}</div>
        <div>{{ contact.city }}</div>
        <a class="underline" :href="'mailto:' + contact.email">Email: {{ contact.email }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { name:'Dwight LaGrone', title:"GIS Manager", employer:'City of Sherman', address:'220 W Mulberry St', city:'Sherman, Tx 75090', phone:'(903) 892-7310', email:'dwightl@cityofsherman.com' },
        { name:'Jerry Pace', title:"GIS Technician - Engineering", employer:'City of Sherman', address:'220 W Mulberry St', city:'Sherman', state:'Tx', zip:'75090', phone:'(903) 892-7621', email:'jerryp@cityofsherman.com' }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
