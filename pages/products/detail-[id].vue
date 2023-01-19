<template>
  <div>
    <div
      v-if="!product"
      class="grid items-center justify-center text-4xl font-medium">
      Loading ...
    </div>
    <div v-else class="bg-white py-7 px-5">
      <PageBreadcrumb
        :breadcrumbs="product.breadcrumbs"
        :current="product.name" />
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
                v-model:model-value="selectedColor" />
            </div>
            <div class="mx-auto max-w-md">
              <FormSelectOptions
                :label-name="'Size'"
                :list-options="product.sizes"
                v-model:model-value="selectedSize" />
            </div>
            <div class="mx-auto max-w-md">
              <FormQuantityInput
                :label-name="'Quantity'"
                v-model:quantity="quantity" />
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
import type { Color, Size, Cart, CartItem } from '~~/types/product'
const { data: product } = useLazyFetch('/api/product', {
  method: 'GET',
})

function findFirstInstock(targetOptions: Color[] | Size[] | undefined) {
  let i = 0
  if (targetOptions) while (targetOptions[i].inStock === false) i++
  return i
}

const selectedColor = ref('')
const selectedSize = ref('')

const quantity = ref(1)

watchEffect(() => {
  if (product.value) {
    const inStockColorIndex = findFirstInstock(product.value.colors)
    selectedColor.value = product.value.colors[inStockColorIndex].name

    const inStockSizeIndex = findFirstInstock(product.value.sizes)
    selectedSize.value = product.value.sizes[inStockSizeIndex].name
  }
})

const cartFromLS = localStorage.getItem('cart')

function onSubmitClick() {
  const currentTime = new Date().toISOString()
  if (product.value) {
    const newItem: CartItem = {
      name: product.value.name,
      id: product.value.id,
      price: product.value.price,
      image: product.value.images[0],
      addedTime: currentTime,
      selectedColor: selectedColor.value,
      selectedSize: selectedSize.value,
      quantity: quantity.value,
    }

    if (cartFromLS && cartFromLS !== 'undefined') {
      // Get existing cart and push item
      const cart: Cart = JSON.parse(cartFromLS)
      cart.items.push(newItem)
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      // Create a new cart
      const id = `cart#${Math.floor(Math.random() * 1000000)}`
      const newCart: Cart = {
        id: id,
        created: currentTime,
        items: [newItem],
      }
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
    console.log('>>> Item add to cart.')
  } else {
    console.log('>>> Product is null')
  }
}
</script>
