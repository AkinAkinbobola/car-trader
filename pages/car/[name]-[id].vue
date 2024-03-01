<script setup>
const route = useRoute()
const {data: car} = await useFetch(`/api/car/${route.params.id}`)

const {toTitleCase} = useUtilities()

if (!car.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Car with id of ${route.params.id} not found`
  })
}

useHead({
  title: `${toTitleCase(route.params.name)}`
})
definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <div v-if="car" class="px-16">
    <CarDetailHero :car="car"/>
    <CarDetailAttributes :features="car.features"/>
    <CarDetailDescription :description="car.description"/>
    <CarDetailContact :car="car"/>
  </div>
</template>