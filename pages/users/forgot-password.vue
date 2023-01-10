<template>
  <div class="flex justify-center">
    <div class="p-8">
      <PageErrorBanner :msg="errorMsg" v-show="errorMsg.length > 0" />
      <ForgotPwFrom />
    </div>
  </div>
</template>
<script setup lang="ts">
const errorMsg = ref('')
</script>
