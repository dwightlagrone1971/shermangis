<template>
  <div class="md:min-h-screen py-10 mb-16">
    <div class="mx-auto max-w-6xl px-6">
      <router-link
        to="/about"
        class="group inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition hover:text-brand-primary"
      >
        <span aria-hidden="true" class="transition group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">&larr;</span>
        Back to About
      </router-link>

      <div class="text-center py-10">
        <h1 class="font-serif text-4xl md:text-5xl font-bold text-blue-900">Contact Page</h1>
        <p class="mt-3 text-gray-600">Find the person who covers your topic below.</p>
      </div>

      <div class="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <div
          class="w-full max-w-sm p-8 shadow-2xl rounded-xl border-t-6 border-blue-900 bg-white transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
          v-for="contact in items"
          :key="contact.email"
        >
          <h2 class="mb-2 text-black text-2xl font-semibold">{{ contact.name }}</h2>
          <h2 class="text-xl text-black pb-4">{{ contact.title }}</h2>
          <div v-if="contact.helpsWith" class="pb-5 text-center">
            <p class="text-xs font-semibold uppercase tracking-widest text-gray-500">Can help with</p>
            <ul class="mt-2 flex flex-wrap justify-center gap-2">
              <li
                v-for="topic in contact.helpsWith"
                :key="topic"
                class="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-brand-accent"
              >{{ topic }}</li>
            </ul>
          </div>
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
