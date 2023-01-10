<template>
  <div>
    <div class="flex justify-center">
      <div class="p-8">
        <PageErrorBanner :msg="errorMsg" v-show="errorMsg.length > 0" />
        <LoginForm
          @login-success="onLoginSuccess"
          @signup-success="onSignupSuccess"
          @error="errorMsg = 'error testing'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const errorMsg = ref('')

function onLoginSuccess() {
  navigateTo('/')
}
function onSignupSuccess() {
  navigateTo('/')
}
</script>
