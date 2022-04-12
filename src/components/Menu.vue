<template>
  <div app class="m-auto pt-14 pb-8 2xl:h-24" style="background-color: #4a4a4a;">
    <div class="m-auto grid grid-cols-1 lg:grid-cols-6 lg:w-10/12 2xl:-mt-8 2xl:grid-cols-6 2xl:w-10/12">
      <div
        v-on:click="scrollToElement"
        v-for="item in items"
        :key="item"
        class=" m-auto mb-8 w-48 lg:w-40 2xl:pt-2 2xl:h-10 2xl:w-52 inline-block transition transform hover:-translate-y-3 motion-reduce:transition-none motion-reduce:transform-none"
        style="background-color: #f8f8f8;"
      >
        <router-link :to="item.to">
          <div class="text-lg 2xl:text-lg" style="color: #4d4d4d;">
            {{ item.name }}
          </div>
        </router-link>
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
    const items = computed(() => store.getters.getItems('menuItems'))

    return { items, store }
  },
  methods: {
    scrollToElement() {
      let element = document.getElementById('top');
      element.scrollIntoView(true);
    }
  }
}


</script>


<style scoped>

</style>
