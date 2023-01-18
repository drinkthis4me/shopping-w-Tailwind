<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-5 py-10">
      <!-- Title -->
      <h2 class="text-2xl font-bold text-center">Cart</h2>
      <!-- Items -->
      <div v-if="cart.items.length" class="mt-5 border-y-2">
        <ul class="divide-y">
          <li v-for="item in cart.items" :key="item.addedTime" class="py-5">
            <CartItem
              :cart-item="item"
              v-model:color="item.selectedColor"
              v-model:size="item.seletedSize"
              v-model:quantity="item.quantity" />
          </li>
        </ul>
      </div>
      <!-- Info -->
      <div v-if="cart.items.length" class="mt-5 flex flex-col space-y-3">
        <div class="flex justify-between">
          <p class="font-medium">Subtotal (Tax included)</p>
          <span>NT${{ subTotal.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between">
          <p class="font-medium">Estimated shipping and fee</p>
          <span>{{ shipping.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between border-y py-4">
          <p class="font-medium">Total</p>
          <span>NT${{ (subTotal + shipping).toLocaleString() }}</span>
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
      <div v-else class="form-control mt-5 space-y-5">
        <div class="text-center text-lg">Your cart is currently empty.</div>
        <button class="btn btn-primary rounded capitalize" @click="navigateTo('/')">
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cart } from '~~/types/product'
const cart: Cart = reactive({
  id: 10001,
  created: '2023-01-01T00:00',
  items: [

  ],
})

const numberOfItems = cart.items.length

const subTotal =
  numberOfItems > 0
    ? cart.items.reduce(
        (subTotal, item) => subTotal + item.price * item.quantity,
        0
      )
    : 0

const shipping = subTotal < 3000 ? 150 : 0

function onCheckoutClick() {
  console.log('>>> Cart: ', cart)
}
</script>
