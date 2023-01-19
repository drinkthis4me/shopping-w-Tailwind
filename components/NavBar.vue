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
            <button
              class="hover:bg-primary rounded border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
              aria-label="Search">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
              </svg>
            </button>

            <NuxtLink to="/cart">
              <button
                class="hover:bg-primary rounded border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
                aria-label="Shopping cart">
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z" />
                </svg>
              </button>
            </NuxtLink>
            <!-- Profile dropdown if isLogin-->
            <div v-if="authStore.currentUser" class="relative ml-3">
              <div>
                <button
                  @click="toggle"
                  class="focus:shadow-solid hover:bg-primary flex max-w-xs items-center rounded p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
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
                enter-active-class="transition ease-out duration-100"
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
                  class="focus:shadow-solid hover:bg-primary flex max-w-xs items-center rounded p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
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
          <button
            class="hover:bg-primary rounded border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
            aria-label="Search">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
            </svg>
          </button>

          <NuxtLink to="/cart">
            <button
              class="hover:bg-primary rounded border-2 border-transparent p-1 text-3xl text-gray-400 hover:text-slate-700 focus:text-white focus:outline-none"
              aria-label="Shopping cart">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z" />
              </svg>
            </button>
          </NuxtLink>
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="hover:bg-primary inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-slate-700 focus:bg-gray-700 focus:text-white focus:outline-none">
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
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
            v-for="u in userCenter"
            :key="u.title"
            href="#"
            class="hover:bg-primary mt-1 block rounded-md px-3 py-2 text-base font-medium text-white hover:text-slate-600 focus:bg-gray-700 focus:text-white focus:outline-none">
            {{ u.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/stores/useAuthStore'
const authStore = useAuthStore()
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
</script>
