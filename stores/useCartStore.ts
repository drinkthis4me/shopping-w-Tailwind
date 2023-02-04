import { defineStore } from 'pinia'

import type { CartItem, Product } from '~~/types/product'

export const useCartStore = defineStore('Cart', () => {
  const id = `cart#${Math.floor(Math.random() * 1000000)}`

  // const cart = useStorage('cart', {
  //   id: id,
  //   created: new Date().toISOString(),
  //   items: [] as CartItem[],
  // })

  const cart = ref({
    id: id,
    created: new Date().toISOString(),
    items: [] as CartItem[],
  })

  onMounted(() => {
    const cartInLocalStorage = localStorage.getItem('cart')
    if (cartInLocalStorage && cartInLocalStorage !== 'undefined')
      cart.value = JSON.parse(cartInLocalStorage)
  })

  const numberOfItems = computed(() =>
    cart.value.items.reduce((totalItems, i) => totalItems + i.quantity, 0)
  )

  const subtotal = computed(() =>
    cart.value.items.reduce(
      (subtotal, item) => subtotal + item.price * item.quantity,
      0
    )
  )

  const shipping = computed(() => (subtotal.value < 3000 ? 150 : 0))

  const total = computed(() => subtotal.value + shipping.value)

  function updateLocalStorage() {
    const newCart = JSON.stringify(cart.value)
    localStorage.setItem('cart', newCart)
  }

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

    updateLocalStorage()
  }

  function deleteFromCart(target: CartItem) {
    const items = cart.value.items
    const targetIndex = items.findIndex((i) => i.addedTime === target.addedTime)
    if (targetIndex !== 1) {
      items.splice(targetIndex, 1)
      updateLocalStorage()
    } else console.log('>>> Target not found')
  }

  return {
    cart,
    numberOfItems,
    subtotal,
    shipping,
    total,

    updateLocalStorage,
    addToCart,
    deleteFromCart,
  }
})
