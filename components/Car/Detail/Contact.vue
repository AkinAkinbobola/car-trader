<script setup>
const message = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})
const route = useRoute()
const errorMessage = ref('')
const successMessage = ref('')
const isButtonDisabled = computed(() => {
      for (let key in message) {
        if (!message[key]) {
          return true
        }
      }
      return false
    }
)
const handleSubmit = async () => {
  try {
    const response = await $fetch(`/api/car/listings/${route.params.id}/message`, {
      method: 'POST',
      body: message
    })
    successMessage.value = 'Message sent successfully'
    errorMessage.value = ''
    message.name = ''
    message.email = ''
    message.phone = ''
    message.message = ''
  } catch (e) {
    errorMessage.value = e.value.statusMessage
    successMessage.value = ''
  }
}
</script>

<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input type="text" class="border p-1" placeholder="Name" v-model="message.name">
      <input type="text" class="border p-1" placeholder="Email" v-model="message.email"/>
      <input type="text" class="border p-1" placeholder="Phone" v-model="message.phone"/>
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea class="border p-1 w-full" placeholder="Message" v-model="message.message"></textarea>
    </div>
    <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4" @click="handleSubmit" :disabled="isButtonDisabled">
      Submit
    </button>
    <p v-if="successMessage" class="mt-3 text-green-400">
      {{ successMessage }}
    </p>
    <p v-if="errorMessage" class="mt-3 text-red-400">
      {{ errorMessage }}
    </p>
  </div>
</template>