<template>
  <div class="w-100 mx-auto overflow-hidden rounded-lg bg-white shadow-2xl">
    <div class="px-10 pt-4 pb-8">
      <header class="mb-5 text-center text-4xl font-semibold">
        Forgot your password?
      </header>
      <div class="text-xl">
        We will send you an email to reset your password.
      </div>
      <section class="mt-5">
        <form @submit.prevent="onSubmitClick">
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
          </div>
          <div class="form-control mt-4">
            <button class="btn btn-primary mt-2">Submit</button>
            <!-- Show if login is pending -->
            <button class="btn loading hidden">loading</button>
          </div>
        </form>
        <NuxtLink
          to="/users/login"
          class="hover:text-secondary focus:ring-primary mt-4 block text-center text-sm font-medium hover:underline focus:outline-none focus:ring-2">
          Return to log in
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const isValid = ref(true)

function onSubmitClick(){
  console.log('>>> Recovery email sent.')
}
</script>
