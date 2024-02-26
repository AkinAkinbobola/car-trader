<script setup>

const route = useRoute()
const {cars} = useCars()
const {toTitleCase} = useUtilities()

const car = computed(() => {
  return cars.find(car => car.id === parseInt(route.params.id))
})

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