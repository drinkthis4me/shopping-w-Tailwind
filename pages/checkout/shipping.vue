<template>
  <NuxtLayout name="checkout">
    <template #header>
      <h1 class="p-5 text-4xl">Fancy Company Title</h1>
    </template>
    <template #summary>
      <label class="collapse w-full border-y bg-slate-300">
        <input type="checkbox" v-model="summaryIsOpen" />
        <div class="collapse-title grid grid-cols-4 text-xl">
          <div class="col-span-3 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.575 0 .875.512q.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988q-.575-.987-.05-1.962L6.6 11.6L3 4H1V2h3.25Zm3.35 7h7Z" />
            </svg>
            <span class="ml-1">
              {{ summaryIsOpen ? 'Hide' : 'Show' }} order summary
            </span>
          </div>
          <span class="justify-self-end font-medium">
            ${{ cartStore.total.toLocaleString() }}
          </span>
        </div>

        <div class="collapse-content bg-slate-100">
          <div class="mt-3 grid gap-y-3">
            <div
              class="grid grid-cols-4"
              v-for="item in cartStore.cart.items"
              :key="item.addedTime">
              <div class="indicator">
                <span class="indicator-item badge badge-secondary badge-sm">
                  {{ item.quantity }}
                </span>
                <img
                  :src="item.image.src"
                  :alt="item.image.src"
                  class="h-20 w-20 rounded-lg border-2 object-cover" />
              </div>

              <div class="col-span-2 flex flex-col justify-center">
                <p class="whitespace-nowrap text-sm">{{ item.name }}</p>
                <p class="text-sm text-slate-500">{{ item.selectedColor }}</p>
                <p class="text-sm text-slate-500">{{ item.selectedSize }}</p>
              </div>
              <div class="self-center justify-self-end text-sm">
                ${{ item.price.toLocaleString() }}
              </div>
            </div>
          </div>
          <div class="mt-4 border-y py-5">
            <div class="grid gap-y-2">
              <div class="flex justify-between">
                <span class="text-sm">Subtotal</span>
                <span class="text-sm">
                  ${{ cartStore.subtotal.toLocaleString() }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Shipping</span>
                <span class="text-sm text-slate-500">
                  ${{ cartStore.shipping.toLocaleString() }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Estimated taxes</span>
                <span class="text-sm text-slate-500">
                  ${{ cartStore.salesTax.toLocaleString() }}
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <span>Total</span>
              <span class="text-xl">
                NT${{ cartStore.total.toLocaleString() }}
              </span>
            </div>
          </div>
        </div>
      </label>
    </template>
    <template #aside>
      <div class="w-full bg-slate-100 p-12">
        <!-- items -->
        <div class="mt-3 grid gap-y-3">
          <div
            class="grid grid-cols-4"
            v-for="item in cartStore.cart.items"
            :key="item.addedTime">
            <div class="indicator">
              <span class="indicator-item badge badge-secondary badge-sm"
                >{{ item.quantity }}
              </span>
              <img
                :src="item.image.src"
                :alt="item.image.src"
                class="h-20 w-20 rounded-lg border-2 object-cover" />
            </div>

            <div class="col-span-2 flex flex-col justify-center">
              <p class="whitespace-nowrap text-sm">{{ item.name }}</p>
              <p class="text-sm text-slate-500">{{ item.selectedColor }}</p>
              <p class="text-sm text-slate-500">{{ item.selectedSize }}</p>
            </div>
            <div class="self-center justify-self-end text-sm">
              ${{ item.price.toLocaleString() }}
            </div>
          </div>
        </div>
        <!-- subtotal info -->
        <div class="mt-4 border-y py-5">
          <div class="grid gap-y-2">
            <div class="flex justify-between">
              <span class="text-sm">Subtotal</span>
              <span class="text-sm">
                ${{ cartStore.subtotal.toLocaleString() }}
              </span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm">Shipping</span>
              <span class="text-sm text-slate-500">
                ${{ cartStore.shipping.toLocaleString() }}
              </span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm">Estimated taxes</span>
              <span class="text-sm text-slate-500">
                ${{ cartStore.salesTax.toLocaleString() }}
              </span>
            </div>
          </div>
        </div>
        <!-- total -->
        <div class="mt-4">
          <div class="flex justify-between">
            <span>Total</span>
            <span class="text-xl">
              NT${{ cartStore.total.toLocaleString() }}
            </span>
          </div>
        </div>
      </div>
    </template>
    <template #steps>
      <div class="grid">
        <ul class="steps">
          <li class="step step-primary">
            <NuxtLink to="/cart">Cart</NuxtLink>
          </li>
          <li class="step step-primary">
            <NuxtLink to="/checkout/information">Information</NuxtLink>
          </li>
          <li class="step step-primary">Shipping</li>
          <li class="step">Payment</li>
        </ul>
      </div>
    </template>
    <template #form>
      <div class="grid space-y-4">
        <div class="">
          <div class="py-4 text-xl">Confirm your information</div>
          <div class="rounded-md border border-slate-300">
            <ul class="divide-y py-2 px-4">
              <li class="flex py-3">
                <div class="mr-10 whitespace-nowrap text-slate-400">
                  Contact
                </div>
                <span class="inline">{{ checkoutStore.address?.email }}</span>
              </li>
              <li class="flex py-3">
                <div class="mr-10 whitespace-nowrap text-slate-400">
                  Ship to
                </div>
                <span class="inline">
                  {{ checkoutStore.fullAddress }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <div class="py-4 text-xl">Shipping and tax</div>
          <div class="rounded-md border border-slate-300">
            <div class="py-3 px-4">
              <ul class="divide-y">
                <li
                  v-if="cartStore.shipping > 0"
                  class="flex justify-between py-3">
                  <div class="mr-10 whitespace-nowrap text-slate-400">
                    黑貓宅及便
                  </div>
                  <span class="inline">
                    NT$ {{ cartStore.shipping.toLocaleString() }}
                  </span>
                </li>
                <li class="flex justify-between py-3">
                  <div class="mr-10 whitespace-nowrap text-slate-400">
                    5% sals tax
                  </div>
                  <span class="inline">
                    NT$
                    {{ cartStore.salesTax.toLocaleString() }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-primary w-full rounded-md">
            Continue to payment
          </button>
          <NuxtLink
            to="/checkout/information"
            class="btn btn-ghost focus:ring-accent mt-3 w-full rounded-md focus:ring focus:ring-offset-4">
            Return to information
          </NuxtLink>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex space-x-3 border-t py-5 px-3">
        <NuxtLink to="/pages/about" class="hover:text-secondary text-sm">
          Refund policy
        </NuxtLink>
        <NuxtLink
          to="/pages/privacy-policy"
          class="hover:text-secondary text-sm">
          Privacy policy
        </NuxtLink>
        <NuxtLink
          to="/pages/terms-of-service"
          class="hover:text-secondary text-sm">
          Terms of service
        </NuxtLink>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/useCartStore'
import { useCheckoutStore } from '~~/stores/useCheckoutStore'

definePageMeta({
  layout: false,
  middleware: ['cart-w-items-only'],
})

const cartStore = useCartStore()

const checkoutStore = useCheckoutStore()

const summaryIsOpen = ref(true)

onMounted(() => checkoutStore.getAddress())
</script>
