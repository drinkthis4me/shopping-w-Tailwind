<template>
  <div class="flex min-h-screen justify-center">
    <div class="p-8">
      <!-- Warning msg -->
      <div
        v-show="!isValid"
        class="w-100 bg-error mx-auto mb-3 flex overflow-hidden p-3">
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0-4q.425 0 .713-.288Q13 12.425 13 12V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4q0 .425.288.712q.287.288.712.288Zm0 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" />
        </svg>
        <div class="text-bold text-lg">Incorrect email or password</div>
      </div>

      <!-- Login card -->
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
            <form ref="loginFormRef" @submit="checkValid">
              <div class="relative">
                <input
                  id="user-email"
                  name="user-email"
                  type="email"
                  placeholder="foobar@example.com"
                  required
                  class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                  :class="[isValid? 'text-gray-900': 'text-error']"
                  />
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
            <a
              href="/"
              class="hover:text-secondary focus:ring-primary mt-4 block text-center text-sm font-medium hover:underline focus:outline-none focus:ring-2">
              Forgot your password?
            </a>
          </section>
          <section v-else class="mt-5">
            <form>
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
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'LoginPage',
  setup() {
    const isLogin = ref(true)
    const isValid = ref<boolean>(true)

    const loginFormRef = ref<HTMLFormElement | null>(null)

    function checkValid(e: Event) {
      if (!loginFormRef.value?.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        isValid.value = false
        console.log('>>> Incorrect email or password')
      } else return
      // Redirect to homepage
    }

    return {
      isLogin,
      isValid,
      loginFormRef,

      checkValid,
    }
  },
})
</script>
<style lang=""></style>
