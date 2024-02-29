<script setup>
const route = useRoute();
const {data: cars} = await useFetch(`/api/cars/${route.params.city}`, {
  params: {
    min: route.query.min,
    max: route.query.max,
    make: route.params.make
  }
})

watch(() => route.query, () => {
  window.location.reload()
})
</script>

<template>
  <div>
    <CarCards :cars="cars" v-if="cars.length"/>
    <h1 class="text-red-600" v-else>No cars found with that filter</h1>
  </div>
</template>