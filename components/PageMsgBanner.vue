<template>
  <div
    class="bg-error flex w-[400px] rounded p-3 text-white"
    :class="[status === 'error' ? 'bg-error' : 'bg-success']">
    <svg
      v-if="status === 'error'"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="mr-2">
      <path
        fill="currentColor"
        d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z" />
      <path fill="currentColor" d="M13 16h-2v2h2zm0-6h-2v5h2z" />
    </svg>
    <svg
      v-if="status === 'success'"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="mr-2">
      <path
        fill="currentColor"
        d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
    </svg>
    <div class="text-lg font-medium">{{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string; status: string }>()
</script>
