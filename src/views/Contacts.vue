<template>
  <div class="mb-16 w-screen pb-10 md:w-screen md:min-h-screen py-10">
    <div class="py-2 w-screen md:m-auto">
      <h1 class="m-auto font-serif m-auto text-5xl font-bold py-10 2xl:py-10 text-blue-900">Contact Page</h1>
      <div class="m-auto md:grid md:grid-cols-3 md:w-8/12">
      <div
        class="p-8 mb-10 shadow-2xl rounded-xl 2xl:w-84 w-72 ml-16 mb-10 border-t-6 border-blue-900 bg-white inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
        v-for="contact in items"
        :key="contact.email"
      >
      <div class="m-auto">
        <h2 class="mb-2 text-black text-2xl font-semibold">{{ contact.name }}</h2>
      </div>
      <div class="m-auto">
        <h2 class="text-xl text-black pb-4">{{ contact.title }}</h2>
        <h2 class="text-xl text-black">{{ contact.address }}</h2>
        <h2 class="text-xl text-black pb-4">{{ contact.city }}, {{ contact.state }} {{ contact.zip }}</h2>
          <div class="pb-4">
            <a
              :href="'tel:' + contact.phone.replace(/\D/g, '')"
              class="text-xl text-black"
            >{{ contact.phone }}</a>
          </div>
          <div class="pt-2">
          <a
            :href="contact.email"
            class="text-xl text-black underline hover:bg-blue-100"
          >Click to Email</a>
          </div>
        </div>
      </div>
      
      </div>
      <div class="md:m-auto pt-4">
        <router-link class="bg-blue-900 w-full text-white p-3 mt-2 md:rounded" to="/about">Back to About Page</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getItems } from '../data/items.js'

const items = computed(() => getItems('contacts'))
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
