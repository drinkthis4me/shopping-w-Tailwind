import { defineStore } from 'pinia'
import type { ShippingAddress } from '@/types/checkout'
export const useCheckoutStore = defineStore('Checkout', () => {
  const address = ref<ShippingAddress>({
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    phone: '',
  })

  const fullAddress = computed(() => {
    return address.value.address1
      ? address.value.address1 +
          ', ' +
          (address.value.address2 ? address.value.address2 + ', ' : '') +
          address.value.city +
          ', ' +
          address.value.postalCode.toString() +
          ', ' +
          address.value.country
      : ''
  })

  function logAddress(target: ShippingAddress) {
    address.value = target
    updateLocalStorage()
  }

  function updateLocalStorage() {
    const data = JSON.stringify(address.value)
    localStorage.setItem('checkout-info', data)
  }

  function getAddress() {
    const target = localStorage.getItem('checkout-info')
    if (target && target !== 'undefined') address.value = JSON.parse(target)
  }

  return {
    address,
    fullAddress,
    logAddress,
    updateLocalStorage,
    getAddress,
  }
})
