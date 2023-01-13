<template>
  <div class="carousel w-[450px]">
    <div
      v-for="(item, index) in images"
      :key="item.src"
      :id="`item${index}`"
      class="carousel-item w-full">
      <img :src="item.src" :alt="item.alt" class="w-full h-full object-contain object-center" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Image } from '~~/types/product'
defineProps<{
  images: Image[]
}>()
</script>
