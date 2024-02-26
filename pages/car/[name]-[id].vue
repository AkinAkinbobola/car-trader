<script setup>

const route = useRoute()
const {toTitleCase} = useUtilities()
useHead({
  title: `${toTitleCase(route.params.name)}`
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