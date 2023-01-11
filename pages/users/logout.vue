<template>
  <div>
    <div class="mx-auto flex items-center justify-center min-h-screen">
      <div class="text-4xl">
        You are logging out. Redirect to home...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/stores/useAuthStore'
const authStore = useAuthStore()

definePageMeta({
  middleware: ['user-only']
})

async function onLogoutClick() {
  try {
    await authStore.logout()
    await navigateTo('/')
  } catch (e) {
    console.error('>>> Logout error', e)
  }
}
onMounted(() => {
  setTimeout(onLogoutClick, 2500)
})
</script>
