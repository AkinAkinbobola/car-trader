<script setup>
const route = useRoute()
useHead({
  title: `${useSentenceCase(route.params.name)}`
})
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <CarDetailHero/>
  <CarDetailAttributes/>
  <CarDetailDescription/>
  <CarDetailContact/>
</template>