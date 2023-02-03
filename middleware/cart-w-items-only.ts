import { useCartStore } from '~~/stores/useCartStore'

export default defineNuxtRouteMiddleware(() => {
  const cartStore = useCartStore()
  if (cartStore.numberOfItems < 1) {
    console.log('>>> Cart is empty. Abort.')
    return navigateTo('/cart')
  }
})
