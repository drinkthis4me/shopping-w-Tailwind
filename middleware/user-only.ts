import { useAuthStore } from '~~/stores/useAuthStore'

export default defineNuxtRouteMiddleware(async() => {
  const authStore = useAuthStore()

  authStore.whoAmI()

  if (!authStore.currentUser) {
    console.log('>>> Middleware: Not login. Redirect to /users/login')
    return navigateTo('/users/login')
  }
})
