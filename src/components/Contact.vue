<template>
  <div>
    <h1 class="pt-14 pb-10 text-4xl font-bold">Contact Page</h1>
    <div class="text-lg font-semibold md:grid md:grid-cols-2 md:mr-96 md:ml-96">
      <div
        v-for="contact in items"
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
