<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-5 py-10">
      <!-- Title -->
      <h2 class="text-center text-2xl font-bold">Cart</h2>
      <div
        v-if="store.numberOfItems"
        class="mt-1 text-center text-sm text-slate-600">
        {{ store.numberOfItems }} Item{{ store.numberOfItems > 1 ? 's' : '' }}
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        <!-- Items -->
        <div
          v-if="store.cart && store.numberOfItems"
          class="mt-5 border-y-2 md:col-span-2">
          <ul class="divide-y">
            <li
              v-for="item in store.cart.items"
              :key="item.addedTime"
              class="py-5">
              <CartItem
                :cart-item="item"
                v-model:quantity="item.quantity"
                @to-be-deleted="store.deleteFromCart(item)" />
            </li>
          </ul>
        </div>
        <!-- Info -->
        <div
          v-if="store.cart && store.numberOfItems"
          class="mt-5 flex flex-col space-y-3">
          <div class="flex justify-between">
            <p class="font-medium">Subtotal (Tax included)</p>
            <span>NT${{ store.subtotal.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between">
            <p class="font-medium">Estimated shipping and fee</p>
            <span>{{ store.shipping.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between border-y-2 py-4">
            <p class="font-medium">Total</p>
            <span>NT${{ store.total.toLocaleString() }}</span>
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
        <div
          v-else
          class="col-span-3 mt-5 flex flex-col items-center space-y-5">
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
import { useCartStore } from '~~/stores/useCartStore'
const store = useCartStore()

function onCheckoutClick() {
  console.log('>>> Cart: ', store.cart)
}

</script>
