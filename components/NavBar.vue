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
                class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white focus:bg-gray-700 focus:text-white focus:outline-none">
                {{ p.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="rounded border-2 border-transparent p-1 text-3xl text-gray-400 hover:bg-gray-700 hover:text-white focus:text-white focus:outline-none"
              aria-label="Search">
              <Icon name="ic:sharp-search" />
            </button>

            <NuxtLink to="/cart">
              <button
                class="rounded border-2 border-transparent p-1 text-3xl text-gray-400 hover:bg-gray-700 hover:text-white focus:text-white focus:outline-none"
                aria-label="Shopping cart">
                <Icon name="ic:baseline-shopping-cart" />
              </button>
            </NuxtLink>
            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  @click="toggle"
                  class="focus:shadow-solid flex max-w-xs items-center rounded p-1 text-3xl text-gray-400 hover:bg-gray-700 hover:text-white focus:text-white focus:outline-none"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true">
                  <Icon name="ic:baseline-person" />
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
                  class="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg">
                  <div
                    class="shadow-xs rounded-md bg-white py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu">
                    <a
                      v-for="u in userCenter"
                      :key="u.title"
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem">
                      {{ u.title }}
                    </a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none">
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
          v-for="p in products"
          :key="p.title"
          :to="p.link"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-gray-700 focus:bg-gray-700 focus:text-white focus:outline-none">
          {{ p.title }}
        </NuxtLink>
      </div>
      <div class="border-t border-gray-700 pt-4 pb-3">
        <div class="px-2">
          <NuxtLink
            v-for="u in userCenter"
            :key="u.title"
            href="#"
            class="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none">
            {{ u.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default defineComponent({
  name: 'NavBar',
  setup() {
    const products = [
      {
        title: 'Tops',
        link: '/products/',
      },
      {
        title: 'Buttoms',
        link: '/',
      },
      {
        title: 'Socks',
        link: '/',
      },
      {
        title: 'Others',
        link: '/',
      },
    ]

    const userCenter = [
      {
        title: 'Sign in',
        link: '/',
      },
      {
        title: 'Sign up',
        link: '/',
      },
      {
        title: 'Your Profile',
        link: '/',
      },
      {
        title: 'Settings',
        link: '/',
      },
      {
        title: 'Help',
        link: '/',
      },
    ]

    const isOpen = ref(false)

    function toggle() {
      isOpen.value = !isOpen.value
    }
    return {
      products,
      userCenter,

      isOpen,
      toggle,
    }
  },
})
</script>
