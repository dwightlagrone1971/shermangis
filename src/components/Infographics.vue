<template>
  <div>
    <h1 class=" pt-16 pb-10 text-3xl font-bold mr-96 ml-96" style="color: #4a4a4a"><span class="text-4xl">Infographics</span> are a visual representation of information or data. The infographics below use American Community Survey (ACS), Census, Esri forecasts, and third-party retail data.</h1>
    <div class="md:m-10 md:grid md:grid-cols-3 md:mr-52 md:ml-52">
      <div
        v-for="item in items"
        :key="item"
        class="m-10 mb-5 mt-5"
      >
        <div class="transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none" >
          <div style="background-color: #4a4a4a" >
            <a
              :href="item.url"
              :title="item.name"
              target="_blank"
            >
              <div class="text-lg p-3" style="color: #f8f8f8">
                {{ item.name }}
              </div>
            </a>
          </div>
        </div>
        <div class="text-base font-semibold mt-5 mb-10">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  setup() {
    const store = useStore()
    const items = computed(() => store.getters.getItems('infographics'))

    return { items, store }
  },
}

</script>



<style scoped>

</style>
