import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { CartItem, Product } from '~~/types/product'

export const useCartStore = defineStore('Cart', () => {
  const id = `cart#${Math.floor(Math.random() * 1000000)}`

  const cart = useStorage('cart', {
    id: id,
    created: new Date().toISOString(),
    items: [] as CartItem[],
  })

  const numberOfItems = computed(() =>
    cart.value.items
      ? cart.value.items.reduce((totalItems, i) => totalItems + i.quantity, 0)
      : null
  )

  const subtotal = computed(() =>
    cart.value.items
      ? cart.value.items.reduce(
          (subtotal, item) => subtotal + item.price * item.quantity,
          0
        )
      : 0
  )

  const shipping = computed(() => (subtotal.value < 3000 ? 150 : 0))

  const total = computed(() => subtotal.value + shipping.value)

  function addToCart(
    product: Product,
    color: string,
    size: string,
    quantity: number
  ) {
    const newItem: CartItem = {
      name: product.name,
      id: product.id,
      price: product.price,
      image: product.images[0],
      addedTime: new Date().toISOString(),
      selectedColor: color,
      selectedSize: size,
      quantity: quantity,
    }

    cart.value.items.push(newItem)
  }

  function deleteFromCart(target: CartItem) {
    const items = cart.value.items
    const targetIndex = items.findIndex((i) => i.addedTime === target.addedTime)
    if (targetIndex !== 1) items.splice(targetIndex, 1)
    else console.log('>>> Target not found')
  }

  return {
    cart,
    numberOfItems,
    subtotal,
    shipping,
    total,

    addToCart,
    deleteFromCart,
  }
})
