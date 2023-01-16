<template>
  <div>
    <h1>Tops for product: {{ $route.params.id }}</h1>
    <div class="bg-white pt-7">
    <PageBreadcrumb :breadcrumbs="product.breadcrumbs" :current="product.name"/>
    <div
      class="mx-auto mt-5 flex max-w-2xl flex-row-reverse flex-wrap justify-center lg:max-w-7xl lg:gap-x-8">
      <div class="max-w-md basis-full">
        <ProductCarousel :images="product.images" />
      </div>
      <div class="pt-5">
        <ProductCarouselIndicator :images="product.images" />
      </div>
    </div>

    <!--Product info -->
    <div
      class="lg:grid-col-3 mx-auto max-w-2xl px-4 pt-10 pb-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-8">
        <div class="text-center text-3xl font-bold">
          {{ product.name }}
        </div>
      </div>

      <!-- Form -->
      <div class="mt-5 lg:row-span-3">
        <div class="flex justify-center">
          <div class="text-error mr-5 text-lg font-semibold tracking-tight">
            NTD$ {{ Math.floor(product.price * 0.75).toLocaleString() }}
          </div>
          <div class="text-lg tracking-tight text-slate-400 line-through">
            NTD$ {{ product.price.toLocaleString() }}
          </div>
        </div>

        <form @submit.prevent="onSubmitClick" class="mt-5 space-y-1">
          <div class="mx-auto max-w-md">
            <FormSelectOptions
              :label-name="'Color'"
              :list-options="product.colors"
              v-model="selectedColor" />
          </div>
          <div class="mx-auto max-w-md">
            <FormSelectOptions
              :label-name="'Size'"
              :list-options="product.sizes"
              @update:model-value="(v) => (selectedSize = v)"
              v-model="selectedSize" />
          </div>
          <div class="mx-auto max-w-md">
            <FormQuantityInput
              :label-name="'Quantity'"
              v-model.number="quantity" />
          </div>
          <div class="form-control mx-auto max-w-md">
            <button
              type="submit"
              class="btn btn-primary rounded-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-9.83-3.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2l-2.76 5H8.53l-.13-.27L6.16 6l-.95-2l-.94-2H1v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
              </svg>
              <span> Add to Cart</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Description and details -->
      <div
        class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-300 lg:pt-5 lg:pb-10 lg:pr-8">
        <div>
          <div class="sr-only">Description</div>
          <p class="text-base">{{ product.description }}</p>
        </div>

        <div class="mt-10">
          <div class="text-sm font-medium">Highlights</div>
          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li
                v-for="hl in product.highlights"
                :key="hl"
                class="text-slate-400">
                <span class="text-slate-600">{{ hl }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10">
          <div class="text-sm font-medium">Details</div>
          <div class="mt-4 space-y-6">
            <p class="text-sm text-slate-600">{{ product.details }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
import type { Product } from '~~/types/product'
const product: Product = {
  name: 'Spring Limited Edition T-Shirt ',
  price: 2000,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Tops', href: '/products/tops' },
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
}
const selectedColor = ref(product.colors[0].name)

const selectedSize = ref(product.sizes[0].name)

const quantity = ref(1)

function onSubmitClick() {
  console.log('>>> Item add to cart.')
}
</script>