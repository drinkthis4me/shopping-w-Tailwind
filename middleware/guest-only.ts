import { useAuthStore } from '~~/stores/useAuthStore'

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore()
  await authStore.whoAmI()
  if (authStore.currentUser) {
    console.log('>>> Already login. Abort.')
    return abortNavigation()
  }
})
