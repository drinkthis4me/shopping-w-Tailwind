<template>
  <div class="flex">
    <div class="mr-5 shrink-0 self-center bg-white">
      <NuxtLink :to="`products/detail-${cartItem.id}`">
        <img
          :src="cartItem.images[0].src"
          :alt="cartItem.images[0].alt"
          class="h-20 w-20 object-cover object-center hover:opacity-75 sm:h-24 sm:w-24" />
      </NuxtLink>
    </div>
    <div class="flex flex-grow flex-col">
      <NuxtLink :to="`products/detail-${cartItem.id}`">
        <h3 class="hover:text-primary text-lg font-medium">
          {{ cartItem.name }}
        </h3>
      </NuxtLink>
      <p class="hidden text-sm text-slate-500 sm:inline-block">
        {{ cartItem.details }}
      </p>
      <div class="flex flex-wrap sm:space-x-1">
        <div class="flex">
          <label for="size" class="label">
            <span class="label-text">Size</span>
          </label>
          <select
            @change="
              $emit('update:size', ($event.target as HTMLSelectElement).value)
            "
            :value="cartItem.selectedSize"
            id="size"
            class="bg-white pl-1 text-sm">
            <option
              v-for="o in cartItem.sizes"
              :key="o.name"
              :value="o.name"
              :disabled="!o.inStock">
              {{ o.name }}
            </option>
          </select>
        </div>
        <div class="flex">
          <label for="color" class="label">
            <span class="label-text">Color</span>
          </label>
          <select
            @change="
              $emit('update:color', ($event.target as HTMLSelectElement).value)
            "
            :value="cartItem.selectedColor"
            id="color"
            class="bg-white pl-1 text-sm">
            <option
              v-for="o in cartItem.colors"
              :key="o.name"
              :value="o.name"
              :disabled="!o.inStock">
              {{ o.name }}
            </option>
          </select>
        </div>
        <div class="flex">
          <label :for="`quantity-${cartItem.addedTime}`" class="label">
            <span class="label-text">Quantity</span>
          </label>
          <input
            @input=" $emit(
                'update:quantity',
                ($event.target as HTMLInputElement).value
              )"
            :value="cartItem.quantity"
            type="number"
            required
            min="1"
            max="50"
            :id="`quantity-${cartItem.addedTime}`"
            class="w-10 appearance-none bg-white pl-1 text-sm" />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between">
      <div class="block text-lg font-medium">NT${{ cartItem.price }}</div>
      <button @click="$emit('toBeDeleted', cartItem)">
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

defineEmits(['update:color', 'update:size', 'update:quantity', 'toBeDeleted'])
</script>
