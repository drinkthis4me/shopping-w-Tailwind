<template>
  <div class="w-100 mx-auto overflow-hidden rounded-lg bg-white shadow-2xl">
    <div class="px-10 pt-4 pb-8">
      <header class="mb-5 text-center text-4xl font-semibold">
        Member Center
      </header>
      <section class="flex justify-center">
        <div class="tabs">
          <a
            class="tab tab-bordered text-lg"
            :class="[isLogin ? 'tab-active' : '']"
            tabindex="0"
            @click="isLogin = true">
            Log In
          </a>
          <a
            class="tab tab-bordered text-lg"
            :class="[isLogin ? '' : 'tab-active']"
            tabindex="0"
            @click="isLogin = false">
            Sign Up
          </a>
        </div>
      </section>
      <section v-if="isLogin" class="mt-5">
        <form @submit.prevent="onLoginClick">
          <div class="relative">
            <input
              id="user-email"
              name="user-email"
              type="email"
              placeholder="foobar@example.com"
              required
              class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
              :class="[isValid ? 'text-gray-900' : 'text-error']" />
            <label
              for="user-email"
              class="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
              Email Address
            </label>
            <div class="relative mt-7">
              <input
                id="user-password"
                type="password"
                class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                placeholder="Password" />
              <label
                for="user-password"
                class="peero-focus:-top3.5 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                Password
              </label>
            </div>
          </div>
          <div class="form-control mt-4">
            <label class="label cursor-pointer">
              <span class="label-text">Remember me</span>
              <input type="checkbox" class="checkbox checkbox-primary" />
            </label>
            <button class="btn btn-primary mt-2">Log In</button>
            <!-- Show if login is pending -->
            <button class="btn loading hidden">loading</button>
          </div>
        </form>
        <NuxtLink
          to="/users/forgot-password"
          class="hover:text-secondary focus:ring-primary mt-4 block text-center text-sm font-medium hover:underline focus:outline-none focus:ring-2">
          Forgot your password?
        </NuxtLink>
      </section>
      <section v-else class="mt-5">
        <form @submit.prevent="onSignupclick">
          <div class="relative">
            <input
              id="user-email"
              name="user-email"
              type="email"
              placeholder="foobar@example.com"
              required
              class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none" />
            <label
              for="user-email"
              class="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
              Email Address
            </label>
            <div class="relative mt-7">
              <input
                id="user-password"
                type="password"
                class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                placeholder="Password" />
              <label
                for="user-password"
                class="peero-focus:-top3.5 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                Password
              </label>
            </div>
            <div class="relative mt-7">
              <input
                id="confirm-password"
                type="password"
                class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                placeholder="Password" />
              <label
                for="confirm-password"
                class="peero-focus:-top3.5 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                Confirm Password
              </label>
            </div>
          </div>
          <div class="form-control mt-4">
            <div class="inline-block">
              By signing up, you agree to <br />the
              <a
                href="/pages/terms-of-service"
                class="text-secondary text-sm font-medium hover:underline">
                Terms of Service
              </a>
              and
              <a
                href="/pages/privacy-policy"
                class="text-secondary text-sm font-medium hover:underline">
                Privacy Policy
              </a>
            </div>

            <button class="btn btn-primary mt-4">Sign Up</button>
            <!-- Show if login is pending -->
            <button class="btn loading hidden">loading</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLogin = ref(true)
const isValid = ref<boolean>(true)

const emit = defineEmits(['login-success', 'signup-success', 'error'])

function onLoginClick() {
  emit('login-success')
  console.log('>>> Login submitted.')
}

function onSignupclick() {
  emit('signup-success')
  console.log('>>> Login submitted.')
}
</script>
