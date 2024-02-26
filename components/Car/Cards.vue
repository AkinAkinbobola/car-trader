<script setup>
import cars from '~/data/cars.json'
</script>

<template>
  <div class="w-full" v-for="car in cars" :key="car.id">
    <CarCard :car/>
  </div>
</template>