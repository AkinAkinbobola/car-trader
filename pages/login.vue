<script setup>
definePageMeta({
  layout: 'custom'
})

const supabase = useSupabaseClient()

const login = async () => {
  const {error} = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/confirm'
    }
  })
  if(error){
    console.log(error)
  }
}
</script>

<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Log In</h1>
    <button class="bg-red-400 p-3 rounded text-white font-bold" @click="login">Login with Google</button>
  </div>
</template>