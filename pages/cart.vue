<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-5 py-10">
      <!-- Title -->
      <h2 class="text-center text-2xl font-bold">Cart</h2>
      <div v-if="numberOfItems" class="mt-1 text-center text-sm text-slate-600">
        {{ numberOfItems }} Item{{ numberOfItems > 1 ? 's' : '' }}
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        <!-- Items -->
        <div v-if="cart && numberOfItems" class="mt-5 border-y-2 md:col-span-2">
          <ul class="divide-y">
            <li v-for="item in cart.items" :key="item.addedTime" class="py-5">
              <CartItem
                :cart-item="item"
                v-model:quantity="item.quantity"
                @to-be-deleted="handleDeleteItem(item)" />
            </li>
          </ul>
        </div>
        <!-- Info -->
        <div v-if="cart && numberOfItems" class="mt-5 flex flex-col space-y-3">
          <div class="flex justify-between">
            <p class="font-medium">Subtotal (Tax included)</p>
            <span>NT${{ subTotal.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between">
            <p class="font-medium">Estimated shipping and fee</p>
            <span>{{ shipping.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between border-y-2 py-4">
            <p class="font-medium">Total</p>
            <span>NT${{ total.toLocaleString() }}</span>
          </div>
          <div class="form-control">
            <button class="btn btn-primary rounded" @click="onCheckoutClick">
              Check Out
            </button>
            <NuxtLink
              to="/"
              class="link link-hover hover:text-primary mt-2 text-center">
              Continue shopping
            </NuxtLink>
          </div>
        </div>
        <div v-else class="col-span-3 flex flex-col items-center mt-5 space-y-5">
          <div class="text-lg">Your cart is currently empty.</div>
          <button
            class="btn btn-primary rounded capitalize"
            @click="navigateTo('/')">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cart, CartItem } from '~~/types/product'
const cart = ref<Cart | null>(null)

onMounted(() => {
  const cartFromLS = localStorage.getItem('cart')
  if (cartFromLS && cartFromLS !== 'undefined')
    cart.value = JSON.parse(cartFromLS)
})

const numberOfItems = computed(() =>
  cart.value
    ? cart.value.items.reduce((totalItems, i) => totalItems + i.quantity, 0)
    : null
)

const subTotal = computed(() =>
  cart.value
    ? cart.value.items.reduce(
        (subTotal, item) => subTotal + item.price * item.quantity,
        0
      )
    : 0
)

const shipping = computed(() => (subTotal.value < 3000 ? 150 : 0))

const total = computed(() => subTotal.value + shipping.value)

function handleDeleteItem(deleteTarget: CartItem) {
  const items = cart.value?.items
  if (items) {
    const targetIndex = items.findIndex(
      (i) => i.addedTime === deleteTarget.addedTime
    )
    if (targetIndex !== -1) {
      items.splice(targetIndex, 1)
      console.log('>>> Item deleted. New cart: ', cart.value)
    } else console.log('>>> Target not found')
  } else console.log('>>> Cart not found')
}

function onCheckoutClick() {
  console.log('>>> Cart: ', cart)
}

watchEffect(() => {
  if (cart.value) localStorage.setItem('cart', JSON.stringify(cart.value))
})
</script>
