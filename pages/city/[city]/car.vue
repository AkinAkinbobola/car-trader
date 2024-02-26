<script setup>
const route = useRoute()

useHead({
  title: `${route.params.make ? useSentenceCase(route.params.make) : 'Cars'} in ${useSentenceCase(route.params.city)}`
})
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div class="mt-32 flex">
    <CarSidebar/>
    <NuxtPage/>
  </div>
</template>