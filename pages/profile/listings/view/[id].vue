<script setup>
definePageMeta({
  layout: "custom",
});
const route = useRoute()
const {data: messages} = useFetch(`/api/car/listings/${route.params.id}/message`)
</script>

<template>
  <div class="rounded shadow mt-20" v-for="message in messages" :key="message.id">
    <CarMessageCard :message="message"/>
  </div>
</template>