<template>
  <div>
    <div class="flex flex-col justify-center">
      <div class="mx-auto my-5">
        <LoginForm
          @login-success="onLoginSuccess"
          @signup-success="onSignupSuccess" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['guest-only']
})

function onLoginSuccess() {
  navigateTo('/')
}
function onSignupSuccess() {
  navigateTo('/')
}
</script>
