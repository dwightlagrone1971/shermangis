<template>
  <h1 class="m-auto text-5xl font-bold py-10 2xl:py-10">Contact Page</h1>
  <div class="m-auto py-6 w-11/12 grid 2xl:grid-cols-2 2xl:w-7/12">
    <div
      class="m-auto border-2 py-8 px-8 mb-10 bg-white shadow-2xl rounded-3xl 2xl:w-96"
      v-for="contact in items"
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
        <a
          href="mailto:{{contact.email}}"
          class="text-xl font-semibold underline"
          style="color: #4a4a4a"
          target="_blank"
        >Email Us</a>
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
