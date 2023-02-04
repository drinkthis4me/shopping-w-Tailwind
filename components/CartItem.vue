<template>
  <div class="flex">
    <div class="mr-5 shrink-0 self-center bg-white">
      <NuxtLink :to="`products/detail-${cartItem.id}`" class="focus:outline-accent">
        <img
          :src="cartItem.image.src"
          :alt="cartItem.image.alt"
          class="h-20 w-20 object-cover object-center hover:opacity-75 sm:h-24 sm:w-24 " />
      </NuxtLink>
    </div>
    <div class="flex flex-grow flex-col space-y-1">
      <NuxtLink :to="`products/detail-${cartItem.id}`" class="focus:outline-accent">
        <h3 class="hover:text-primary text-lg font-medium">
          {{ cartItem.name }}
        </h3>
      </NuxtLink>
      <div class="">Size: {{ cartItem.selectedSize }}</div>
      <div class="">Color: {{ cartItem.selectedColor }}</div>
      <div class=" flex justify-start">
        <label :for="`quantity-${cartItem.addedTime}`">
          <span>Quantity:</span>
        </label>
        <input
          @input="handleQuantityInput"
          :value="cartItem.quantity"
          type="number"
          required
          min="1"
          max="50"
          :id="`quantity-${cartItem.addedTime}`"
          class="form-input ml-3 w-12 border border-info text-center bg-white text-sm p-0 focus:ring-accent focus:ring" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-between">
      <div class="block text-lg">NT${{ cartItem.price }}</div>
      <button @click="$emit('toBeDeleted', cartItem)" class="focus:outline-accent">
        <svg
          class="hover:text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CartItem } from '~~/types/product'

defineProps<{
  cartItem: CartItem
}>()

const emit = defineEmits(['update:quantity', 'toBeDeleted'])

function handleQuantityInput(e: Event) {
  const targetValue = (e.target as HTMLInputElement).value
  emit('update:quantity', Number(targetValue))
}
</script>
