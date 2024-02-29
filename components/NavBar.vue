<script setup>
const user = ref(false)
</script>

<template>
  <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
<!--    <div>-->
<!--      <div class="flex items-center justify-center" v-if="user">-->
<!--        <NuxtLink>Profile</NuxtLink>-->
<!--        <NuxtLink>Logout</NuxtLink>-->
<!--      </div>-->
<!--      <div v-else>-->
<!--        <NuxtLink>Login</NuxtLink>-->
<!--      </div>-->
<!--    </div>-->
  </header>
</template>