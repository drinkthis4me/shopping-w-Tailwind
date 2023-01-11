<template>
  <div>Profile page for log-in user only</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['user-only']
})
</script>