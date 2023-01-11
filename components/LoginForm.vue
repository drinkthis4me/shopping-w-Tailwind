<template>
  <div>
    <div v-show="bannerMsg.length > 0" class="mx-auto">
      <PageMsgBanner :msg="bannerMsg" :status="bannerStatus" />
    </div>
    <div class="w-[400px] overflow-hidden rounded-lg bg-white shadow-2xl">
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
                v-model.trim="loginInput.data.email"
                id="login-email"
                type="email"
                placeholder="foobar@example.com"
                required
                class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                :class="[isValid ? 'text-gray-900' : 'text-error']" />
              <label
                for="login-email"
                class="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                Email Address
              </label>
              <div class="relative mt-7">
                <input
                  v-model="loginInput.data.password"
                  id="login-password"
                  type="password"
                  class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                  placeholder="Password"
                  required />
                <label
                  for="login-password"
                  class="peero-focus:-top3.5 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                  Password
                </label>
              </div>
            </div>
            <div class="form-control mt-4">
              <label class="label cursor-pointer">
                <span class="label-text">Remember me</span>
                <input
                  v-model="loginInput.data.rememberMe"
                  type="checkbox"
                  class="checkbox checkbox-primary" />
              </label>
              <button v-if="!loginInput.pending" class="btn btn-primary mt-2">
                Log In
              </button>
              <button v-else class="btn loading">loading</button>
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
                v-model.trim="signupInput.data.email"
                id="signup-email"
                type="email"
                placeholder="foobar@example.com"
                required
                class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none" />
              <label
                for="signup-email"
                class="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                Email Address
              </label>
              <div class="relative mt-7">
                <input
                  v-model="signupInput.data.password"
                  id="signup-password"
                  type="password"
                  class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                  placeholder="Password"
                  required />
                <label
                  for="signup-password"
                  class="peero-focus:-top3.5 absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
                  Password
                </label>
              </div>
              <div class="relative mt-7">
                <input
                  v-model="signupInput.data.confirm_password"
                  id="signup-confirm-password"
                  type="password"
                  class="focus:border-primary peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
                  placeholder="Password"
                  required />
                <label
                  for="signup-confirm-password"
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

              <button v-if="!signupInput.pending" class="btn btn-primary mt-4">
                Sign Up
              </button>
              <button v-else class="btn loading hidden">loading</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~~/stores/useAuthStore'

const authStore = useAuthStore()
const emit = defineEmits(['login-success', 'signup-success'])
const bannerMsg = ref('')
const bannerStatus = ref('error')
const isLogin = ref(true)
const isValid = ref<boolean>(true)
const loginInput = reactive({
  data: { email: '', password: '', rememberMe: false },

  pending: false,
})
const signupInput = reactive({
  data: { email: '', password: '', confirm_password: '' },

  pending: false,
})

async function onLoginClick() {
  try {
    loginInput.pending = true

    await authStore.login(
      loginInput.data.email,
      loginInput.data.password,
      loginInput.data.rememberMe
    )
    console.log('>>> Login submitted.')
    emit('login-success')
  } catch (e) {
    if (e instanceof Error) {
      bannerMsg.value = e.message
    }
    console.error(e)
  } finally {
    loginInput.pending = false
  }
}

function pwValidator() {
  const pw1 = signupInput.data.password
  const pw2 = signupInput.data.confirm_password
  bannerStatus.value = 'error'

  if (!pw1 || !pw2) {
    bannerMsg.value = 'Password can not be blank.'
    return false
  }

  if (pw1.length < 8 || pw1.length > 16) {
    bannerMsg.value = 'Password must be 8 ~ 16 characters.'
    return false
  }

  if (pw1 !== pw2) {
    bannerMsg.value = 'Passwords are not same.'
    return false
  }

  bannerStatus.value = 'success'
  bannerMsg.value = 'Account created! Redirect to home.'
  return true
}

async function onSignupclick() {
  try {
    signupInput.pending = true
    if (!pwValidator())
      throw createError({
        name: 'Password error.',
        message: bannerMsg.value,
      })
    await authStore.signup(signupInput.data.email, signupInput.data.password)
    emit('signup-success')
    console.log('>>> Login submitted.')
  } catch (e) {
    if (e instanceof Error) {
      bannerStatus.value = 'error'
      bannerMsg.value = e.message
    }
    console.error(e)
  } finally {
    signupInput.pending = false
  }
}
</script>
