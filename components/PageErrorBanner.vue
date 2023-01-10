<template>
  <div
    class="bg-error mx-auto mb-3 flex w-100 overflow-hidden rounded p-3 text-white">
    <svg width="32" height="32" viewBox="0 0 24 24" class="mr-2">
      <path
        fill="currentColor"
        d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z" />
      <path fill="currentColor" d="M13 16h-2v2h2zm0-6h-2v5h2z" />
    </svg>
    <div class="text-bold text-lg">{{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
