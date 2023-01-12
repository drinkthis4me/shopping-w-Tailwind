<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-between">
        <!-- Carouse start -->
        <div class="carousel w-[450px]">
          <div
            v-for="n in 4"
            :key="n"
            :id="`item${n}`"
            class="carousel-item w-full">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1078474880/display_1500/stock-photo-black-plain-shortsleeve-cotton-t-shirt-isolated-on-a-white-background-stylish-round-collar-shirt-1078474880.jpg"
              class="w-full" />
          </div>
        </div>
        <!-- Carousel end -->
        <!-- indicator start -->
        <div class="flex w-full justify-center gap-3 py-2">
          <a v-for="n in 4" :key="n" :href="`#item${n}`">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1078474880/display_1500/stock-photo-black-plain-shortsleeve-cotton-t-shirt-isolated-on-a-white-background-stylish-round-collar-shirt-1078474880.jpg"
              class="w-20" />
          </a>
        </div>
        <!-- indicator end -->
      </div>
    </div>

    <!--info & form -->
    <div class="container mx-auto mt-5 flex flex-col space-y-5">
      <div class="text-center text-3xl font-bold">
        Spring Limited Edition T-Shirt
      </div>
      <div class="flex justify-center">
        <div class="text-error mr-5 text-lg font-semibold">NTD$ 1,500</div>
        <div class="text-lg text-slate-400 line-through">NTD$ 2,000</div>
      </div>
      <form @submit.prevent="onSubmitClick" class="space-y-1">
        <div class="mx-auto max-w-md">
          <FormSelectOptions
            :label-name="'Color'"
            :list-options="colors"
            v-model="selectedColor" />
        </div>
        <div class="mx-auto max-w-md">
          <FormSelectOptions
            :label-name="'Size'"
            :list-options="sizes"
            @update:model-value="(v) => (selectedSize = v)"
            v-model="selectedSize" />
        </div>
        <div class="mx-auto max-w-md">
          <FormQuantityInput
            :label-name="'Quantity'"
            v-model.number="quantity" />
        </div>
        <div class="form-control mx-auto max-w-md">
          <button type="submit" class="btn btn-primary rounded-none">
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
      <div class="flex justify-center">
        <div class="w-[450px] text-slate-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          reiciendis quis, ab eaque pariatur blanditiis dolorum cumque. Unde
          nostrum nesciunt sunt ad possimus. Fuga, recusandae.
        </div>
      </div>
    </div>
    <!-- info & form end -->
  </div>
</template>

<script setup lang="ts">
const colors = ref(['Black', 'White', 'Red', 'Green', 'Blue'])
const selectedColor = ref(colors.value[0])

const sizes = ref(['XS', 'S', 'M', 'L', 'XL'])
const selectedSize = ref(sizes.value[0])

const quantity = ref(1)

function onSubmitClick() {
  console.log('>>> Item add to cart.')
}
</script>
