<script setup>
const {cars} = defineProps(['cars'])
const savedCars = useLocalStorage('savedCars', {})

const handleSavedCars = (id) => {
  if (id in savedCars.value) {
    delete savedCars.value[id]
  } else {
    savedCars.value = {...savedCars.value, [id]: true}
  }
}
</script>

<template>
  <div class="w-full" v-for="car in cars" :key="car.id">
    <CarCard :car="car" @saveCar="handleSavedCars" :saved="car.id in savedCars"/>
  </div>
</template>