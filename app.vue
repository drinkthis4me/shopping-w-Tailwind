<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from './stores/useCartStore'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.getCart()
})
</script>
