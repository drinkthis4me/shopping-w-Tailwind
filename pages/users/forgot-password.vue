<template>
  <div class="flex flex-col justify-center">

    <div class="mx-auto my-5">
      <ForgotPwFrom />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ['guest-only']
})
</script>
