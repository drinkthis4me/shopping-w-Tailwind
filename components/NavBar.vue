<template>
  <nav class="bg-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <img
                class="h-8 w-8 rounded-full"
                src="~/assets/img/logo-800x600.png"
                alt="TS logo 800x600" />
            </NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline">
              <NuxtLink
                v-for="p in products"
                :key="p.title"
                :to="p.link"
                class="hover:bg-primary rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:text-slate-700 focus:bg-gray-700 focus:text-white focus:outline-none">
                {{ p.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- search icon -->
            <button
              class="hover:bg-primary rounded-full border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
              aria-label="Search"
              @click="searchIsOpen = !searchIsOpen">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
              </svg>
            </button>
            <!-- cart icon -->
            <NuxtLink
              to="/cart"
              v-if="cartStore.numberOfItems && cartStore.numberOfItems > 0">
              <div class="dropdown dropdown-end dropdown-hover">
                <div class="indicator">
                  <div class="indicator-item badge badge-secondary">
                    {{ cartStore.numberOfItems }}
                  </div>
                  <button
                    class="hover:bg-primary rounded-full border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
                    aria-label="Shopping cart">
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>
                <div
                  tabindex="0"
                  class="dropdown-content bg-base-100 mt-3 w-52 rounded shadow ring-2 ring-black ring-opacity-5">
                  <div class="card-body">
                    <span class="text-lg font-bold"
                      >{{ cartStore.numberOfItems }} Items</span
                    >
                    <span class="text-info"
                      >Subtotal: ${{
                        cartStore.subtotal.toLocaleString()
                      }}</span
                    >
                  </div>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/cart" v-else>
              <button
                class="hover:bg-primary rounded-full border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
                aria-label="Shopping cart">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z" />
                </svg>
              </button>
            </NuxtLink>

            <!-- Profile dropdown if isLogin-->
            <div v-if="authStore.currentUser" class="relative ml-4">
              <div>
                <button
                  @click="toggle"
                  class="focus:shadow-solid hover:bg-primary flex max-w-xs items-center rounded-full p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </button>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-200"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <div
                  v-show="isOpen"
                  class="absolute right-0 z-[100] mt-2 w-48 origin-top-right rounded-md shadow-lg">
                  <div
                    class="shadow-xs rounded-md bg-white py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu">
                    <NuxtLink
                      v-for="u in userCenter"
                      :key="u.title"
                      :to="u.link"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                      role="menuitem">
                      {{ u.title }}
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
            <div v-else class="relative ml-3">
              <NuxtLink to="/users/login">
                <button
                  class="focus:shadow-solid hover:bg-primary flex max-w-xs items-center rounded-full p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- search icon -->
          <button
            class="hover:bg-primary rounded-full border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
            aria-label="Search"
            @click="searchIsOpen = !searchIsOpen">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
            </svg>
          </button>
          <!-- cart icon -->
          <NuxtLink
            to="/cart"
            v-if="cartStore.numberOfItems && cartStore.numberOfItems > 0">
            <div class="dropdown dropdown-end dropdown-hover">
              <div class="indicator">
                <div class="indicator-item badge badge-secondary">
                  {{ cartStore.numberOfItems }}
                </div>
                <button
                  class="hover:bg-primary rounded-full border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
                  aria-label="Shopping cart">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z" />
                  </svg>
                </button>
              </div>
              <div
                tabindex="0"
                class="dropdown-content bg-base-100 mt-3 w-52 rounded shadow ring-2 ring-black ring-opacity-5">
                <div class="card-body">
                  <span class="text-lg font-bold"
                    >{{ cartStore.numberOfItems }} Items</span
                  >
                  <span class="text-info"
                    >Subtotal: ${{ cartStore.subtotal.toLocaleString() }}</span
                  >
                </div>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/cart" v-else>
            <button
              class="hover:bg-primary rounded-full border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
              aria-label="Shopping cart">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z" />
              </svg>
            </button>
          </NuxtLink>
          <!-- burger icon/ close icon -->
          <label
            class="btn btn-circle btn-ghost swap swap-rotate hover:bg-primary text-gray-400 hover:text-slate-700 focus:bg-gray-700 focus:text-white focus:outline-none">
            <input @change="toggle" type="checkbox" class="sr-only" />
            <svg
              class="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path
                d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              class="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <NuxtLink
          @click="toggle"
          v-for="p in products"
          :key="p.title"
          :to="p.link"
          class="hover:bg-primary block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white focus:bg-gray-700 focus:text-white focus:outline-none">
          {{ p.title }}
        </NuxtLink>
      </div>
      <div
        v-if="!authStore.currentUser"
        class="border-t border-gray-700 pt-4 pb-3">
        <div class="px-2">
          <NuxtLink
            @click="toggle"
            to="/users/login"
            class="hover:bg-primary block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white focus:bg-gray-700 focus:text-white focus:outline-none">
            <div class="flex items-center">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span class="ml-2">Member Login</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div
        v-show="authStore.currentUser"
        class="border-t border-gray-700 pt-4 pb-3">
        <div class="px-2">
          <NuxtLink
            @click="toggle"
            v-for="u in userCenter"
            :key="u.title"
            :to="u.link"
            class="hover:bg-primary mt-1 block rounded-md px-3 py-2 text-base font-medium text-white hover:text-slate-600 focus:bg-gray-700 focus:text-white focus:outline-none">
            {{ u.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
  <transition
    enter-active-class="transition ease-out duration-500"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95">
    <div v-show="searchIsOpen">
      <div class="flex justify-evenly p-2">
        <input
          type="text"
          placeholder="Search me"
          class="input input-bordered input-primary w-full max-w-lg" />
        <button class="btn btn-circle btn-ghost" @click="searchIsOpen = false">
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/stores/useAuthStore'
import { useCartStore } from '~~/stores/useCartStore'
const authStore = useAuthStore()
const cartStore = useCartStore()
const products = [
  {
    title: 'Tops',
    link: '/products/product-tops',
  },
  {
    title: 'Bottoms',
    link: '/products/product-bottoms',
  },
  {
    title: 'Socks',
    link: '/products/product-socks',
  },
  {
    title: 'Others',
    link: '/products/product-others',
  },
]

const userCenter = [
  {
    title: 'Your Profile',
    link: '/users/profile',
  },
  {
    title: 'Settings',
    link: '/',
  },
  {
    title: 'Order Status',
    link: '/',
  },
  {
    title: 'Help',
    link: '/pages/faqs',
  },
  {
    title: 'Log out',
    link: '/users/logout',
  },
]

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

const searchIsOpen = ref(false)
</script>
