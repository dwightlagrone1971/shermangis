<template>
  <div class="mb-16 w-screen pb-10 md:w-screen md:h-screen">
    <div class="py-2 w-screen md:m-auto">
      <h3 class="m-auto text-blue-900 w-72 font-serif m-auto text-5xl font-bold py-10 2xl:py-10">Contact Page</h3>
      <div class="m-auto md:grid md:grid-cols-3 md:w-8/12">
      <div
        class="py-8 px-8 mb-10 shadow-2xl rounded-3xl 2xl:w-72 w-72 ml-16 mb-10"
        v-for="contact in items"
        :key="contact"
        style="background-color: #08244c"
      >
      <div class="m-auto">
        <h2 class="mb-2 text-white text-2xl font-semibold">{{ contact.name }}</h2>
      </div>
      <div class="m-auto">
        <h2 class="text-xl text-white">{{ contact.title }}</h2>
        <h2 class="text-xl text-white">{{ contact.employer }}</h2>
        <h2 class="text-xl text-white">{{ contact.address }}</h2>
        <h2 class="text-xl text-white">{{ contact.city }}</h2>
          <div class="">
            <a
              href="tel+:{{ contact.phone }}" 
              class="text-xl text-white"
              target="_blank"
            >{{ contact.phone }}</a>
          </div>
          <div class="">
          <a
            href="mailto:{{contact.email}}"
            class="text-xl text-white underline hover:bg-blue-500 pd-2"            
            target="_blank"
          >Click to Email</a>
          </div>
        </div>
      </div>
      
      </div>
      <div class="md:m-auto">
        <router-link class="bg-blue-900 w-full text-white p-3 mt-2 md:rounded" to="/about" tag="button">Back to About Page</router-link>
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
    const items = computed(() => store.getters.getItems('contacts'))


    return { items, store }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
