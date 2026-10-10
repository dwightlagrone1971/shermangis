<template>
  <p class="mt-4 text-sm text-gray-600">
    {{ lead }}
    <router-link
      to="/contacts"
      class="group inline-flex items-center gap-1 font-medium text-brand-accent hover:text-brand-primary hover:underline underline-offset-4"
    >
      {{ label }}
      <span aria-hidden="true" class="transition group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">&rarr;</span>
    </router-link>
  </p>
</template>

<script setup>
defineProps({
  // question shown before the link
  lead: {
    type: String,
    default: 'Need help?'
  },
  // link text
  label: {
    type: String,
    default: 'Find who to contact'
  }
})
</script>
