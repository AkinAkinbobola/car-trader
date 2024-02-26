<script setup>

const route = useRoute()
const {cars} = useCars()
const {toTitleCase} = useUtilities()

const car = computed(() => {
  return cars.find(car => car.id === parseInt(route.params.id))
})

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
  <div v-if="car">
    <CarDetailHero :car="car"/>
    <CarDetailAttributes :features="car.features"/>
    <CarDetailDescription :description="car.description"/>
    <CarDetailContact :car="car"/>
  </div>

</template>