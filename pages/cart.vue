<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-5 py-10">
      <!-- Title -->
      <h2 class="text-center text-2xl font-bold">Cart</h2>
      <!-- Items -->
      <div v-if="cart.items.length" class="mt-5 border-y-2">
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
      <div v-else class="form-control mt-5 space-y-5">
        <div class="text-center text-lg">Your cart is currently empty.</div>
        <button
          class="btn btn-primary rounded capitalize"
          @click="navigateTo('/')">
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Cart, CartItem } from '~~/types/product'
const cart: Cart = reactive({
  id: 10001,
  created: '2023-01-01T00:00',
  items: [
    {
      addedTime: '2023-01-01T06:00',
      selectedColor: 'White',
      selectedSize: 'XS',
      quantity: 1,
      name: 'Spring Limited Edition T-Shirt ',
      price: 2000,
      id: 'product10001',
      breadcrumbs: [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Tops', href: '/products/product-tops' },
      ],
      images: [
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
          alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
          alt: 'Model wearing plain black basic tee.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
          alt: 'Model wearing plain gray basic tee.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
          alt: 'Model wearing plain white basic tee.',
        },
      ],
      colors: [
        {
          name: 'White',
          inStock: true,
          class: 'bg-white',
          selectedClass: 'ring-gray-400',
        },
        {
          name: 'Gray',
          inStock: true,
          class: 'bg-gray-200',
          selectedClass: 'ring-gray-400',
        },
        {
          name: 'Black',
          inStock: true,
          class: 'bg-gray-900',
          selectedClass: 'ring-gray-900',
        },
      ],
      sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: false },
        { name: '3XL', inStock: true },
      ],
      description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
      highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
      ],
      details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. ',
    },
    {
      addedTime: '2023-01-01T06:30',
      selectedColor: 'Black',
      selectedSize: 'L',
      quantity: 2,
      name: 'Spring Limited Edition T-Shirt ',
      price: 2000,
      id: 'product10001',
      breadcrumbs: [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Tops', href: '/products/product-tops' },
      ],
      images: [
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
          alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
          alt: 'Model wearing plain black basic tee.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
          alt: 'Model wearing plain gray basic tee.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
          alt: 'Model wearing plain white basic tee.',
        },
      ],
      colors: [
        {
          name: 'White',
          inStock: true,
          class: 'bg-white',
          selectedClass: 'ring-gray-400',
        },
        {
          name: 'Gray',
          inStock: true,
          class: 'bg-gray-200',
          selectedClass: 'ring-gray-400',
        },
        {
          name: 'Black',
          inStock: true,
          class: 'bg-gray-900',
          selectedClass: 'ring-gray-900',
        },
      ],
      sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: false },
        { name: '3XL', inStock: true },
      ],
      description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
      highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
      ],
      details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
  ],
})

const numberOfItems = computed(() => cart.items.length)

const subTotal = computed(() =>
  numberOfItems.value > 0
    ? cart.items.reduce(
        (subTotal, item) => subTotal + item.price * item.quantity,
        0
      )
    : 0
)

const shipping = computed(() => (subTotal.value < 3000 ? 150 : 0))

const total = computed(() => subTotal.value + shipping.value)

function handleDeleteItem(deleteTarget: CartItem) {
  const targetIndex = cart.items.findIndex(
    (i) => i.addedTime === deleteTarget.addedTime
  )
  if (targetIndex !== -1) {
    cart.items.splice(targetIndex, 1)
    console.log('>>> Deleted item: ', deleteTarget)
    console.log('>>> New cart: ', cart.items)
  } else console.log('>>> Target not found')
}

function onCheckoutClick() {
  console.log('>>> Cart: ', cart)
}
</script>
