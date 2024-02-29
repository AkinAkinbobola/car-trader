<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
  const {error} = await supabase.auth.signOut()
  if(error){
    return
  }
  user.value = null
  navigateTo('/logout')
}
</script>

<template>
  <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div>
      <div class="flex items-center justify-center gap-5" v-if="user">
        <NuxtLink to="/profile/listings">Profile</NuxtLink>
        <p class="cursor-pointer" @click="logout">Logout</p>
      </div>
      <div v-else>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </div>
  </header>
</template>