<script setup>
const {cars} = useData()
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
    <ClientOnly>
      <CarCard :car="car" @saveCar="handleSavedCars" :saved="car.id in savedCars"/>
    </ClientOnly>
  </div>
</template>