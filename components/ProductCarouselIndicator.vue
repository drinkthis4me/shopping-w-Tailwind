<template>
  <div class="flex justify-center gap-x-2 gap-y-2 lg:flex-col">
    <div v-for="(item, index) in images" :key="item.src">
      <a :href="`#item${index}`">
        <img :src="item.src" class="w-20 h-20 object-cover object-center" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Image } from '~~/types/product'
defineProps<{
  images: Image[]
}>()
</script>
