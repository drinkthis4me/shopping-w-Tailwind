<template>
  <div class="">
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
              ${{ cartStore.subtotal.toLocaleString() }}
            </span>
          </div>

          <div class="collapse-content bg-slate-100">
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
                  <span class="text-sm"
                    >${{ cartStore.subtotal.toLocaleString() }}</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-sm">Shipping</span>
                  <span class="text-sm text-slate-500"
                    >Calculated at next step</span
                  >
                </div>
                <div class="flex justify-between">
                  <span class="text-sm">Estimated taxes</span>
                  <span class="text-sm text-slate-500"
                    >Calculated at next step</span
                  >
                </div>
              </div>
            </div>
            <!-- total -->
            <div class="mt-4">
              <div class="flex justify-between">
                <span>Total</span>
                <span class="text-xl"
                  >NT${{ cartStore.total.toLocaleString() }}</span
                >
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
                <span class="text-sm"
                  >${{ cartStore.subtotal.toLocaleString() }}</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Shipping</span>
                <span class="text-sm text-slate-500"
                  >Calculated at next step</span
                >
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Estimated taxes</span>
                <span class="text-sm text-slate-500"
                  >Calculated at next step</span
                >
              </div>
            </div>
          </div>
          <!-- total -->
          <div class="mt-4">
            <div class="flex justify-between">
              <span>Total</span>
              <span class="text-xl"
                >NT${{ cartStore.total.toLocaleString() }}</span
              >
            </div>
          </div>
        </div>
      </template>
      <template #steps>
        <div class="grid">
          <ul class="steps">
            <li class="step step-primary">Cart</li>
            <li class="step step-primary">Information</li>
            <li class="step">Shipping</li>
            <li class="step">Payment</li>
          </ul>
        </div>
      </template>
      <template #form>
        <div class="border-t px-3 pt-8">
          <form @submit.prevent="onSubmitClick">
            <div class="grid space-y-3">
              <div class="flex items-baseline justify-between">
                <h2 class="whitespace-nowrap text-xl">Contact information</h2>
                <span class="text-sm">
                  Already have an account?
                  <NuxtLink
                    to="/users/login"
                    class="focus:ring-accent hover:text-secondary font-medium focus:outline-none focus:ring">
                    Log in
                  </NuxtLink>
                </span>
              </div>
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  required
                  class="focus:ring-accent peer h-11 w-full rounded-md border border-gray-300 p-2 pl-2 placeholder-transparent focus:border-none focus:outline-none focus:ring" />
                <label
                  for="email"
                  class="absolute left-0.5 -top-0.5 pl-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-400">
                  Email
                </label>
              </div>
              <div class="flex">
                <label class="label cursor-pointer">
                  <input
                    v-model="isSendingSpam"
                    type="checkbox"
                    class="checkbox checkbox-primary" />
                  <span class="label-text ml-3">
                    Email me with news and offers
                  </span>
                </label>
              </div>
            </div>
            <div class="mt-3 grid space-y-4">
              <div class="flex items-baseline">
                <h2 class="text-xl">Shipping address</h2>
              </div>
              <div class="">
                <label for="country" class="ml-1 text-gray-400">
                  Country/Region
                </label>
                <select
                  id="country"
                  placeholder=""
                  class="focus:ring-accent peer h-11 w-full cursor-pointer rounded-md border border-gray-300 bg-white p-2 focus:border-none focus:outline-none focus:ring">
                  <option
                    v-for="country in countries"
                    :key="country"
                    :value="country"
                    :selected="country === 'Taiwan'">
                    {{ country }}
                  </option>
                </select>
              </div>
              <div v-for="input in formInputs" :key="input.title">
                <FormInput
                  :title="input.title"
                  :id="input.id"
                  :type="input.type"
                  :inputmode="input.inputmode"
                  :required="input.required"
                  v-model:modelValue.trim="input.input" />
              </div>
              <div>
                <button type="submit" class="btn btn-primary w-full rounded-md">
                  Continue to shipping
                </button>
                <NuxtLink
                  to="/cart"
                  class="btn btn-ghost focus:ring-accent mt-3 w-full rounded-md focus:ring focus:ring-offset-4">
                  Return to cart
                </NuxtLink>
              </div>
            </div>
          </form>
        </div>
      </template>
      <template #footer>
        <div class="flex space-x-3 border-t py-5 px-3">
          <div class="text-sm">Refund policy</div>
          <div class="text-sm">Privacy policy</div>
          <div class="text-sm">Terms of service</div>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/useCartStore'

definePageMeta({
  layout: false,
  middleware: ['cart-w-items-only'],
})

const cartStore = useCartStore()

const summaryIsOpen = ref(true)

const isSendingSpam = ref(true)

const formInputs = ref([
  {
    title: 'First name (optional)',
    id: 'first-name',
    type: 'text',
    inputmode: 'text',
    required: false,
    input: '',
  },
  {
    title: 'Last name',
    id: 'last-name',
    type: 'text',
    inputmode: 'text',
    required: true,
    input: '',
  },
  {
    title: 'Address',
    id: 'address1',
    type: 'text',
    inputmode: 'text',
    required: true,
    input: '',
  },
  {
    title: 'Apartment, suit, ect. (optional)',
    id: 'address2',
    type: 'text',
    inputmode: 'text',
    required: false,
    input: '',
  },
  {
    title: 'City',
    id: 'city',
    type: 'text',
    inputmode: 'text',
    required: true,
    input: '',
  },
  {
    title: 'Postal code',
    id: 'postcode',
    type: 'text',
    inputmode: 'numeric',
    required: true,
    input: '',
  },
  {
    title: 'Phone',
    id: 'phone',
    type: 'tel',
    inputmode: 'tel',
    required: true,
    input: '',
  },
])

const countries = [
  'Albania',
  'Algeria',
  'Argentina',
  'Australia',
  'Austria',
  'Bahrain',
  'Bangladesh',
  'Belarus',
  'Belgium',
  'Bolivia',
  'Bosnia And Herzegovina',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Cambodia',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Dominican Republic',
  'Egypt',
  'Estonia',
  'Fiji',
  'Finland',
  'France',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyzstan',
  'Latvia',
  'Lebanon',
  'Lithuania',
  'Macao',
  'Malaysia',
  'Malta',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Montenegro',
  'Morocco',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nigeria',
  'North Macedonia',
  'Norway',
  'Oman',
  'Panama',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Saudi Arabia',
  'Serbia',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'Sweden',
  'Switzerland',
  'Taiwan',
  'Thailand',
  'Trinidad And Tobago',
  'Turkey',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uzbekistan',
  'Vietnam',
]

function onSubmitClick() {
  console.log(
    '>>> submit shipping detail',
    formInputs.value.map((i) => i.input)
  )
}
</script>
