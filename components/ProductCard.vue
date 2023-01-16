<template>
  <div class="card card-bordered h-96 w-80 rounded-lg bg-white shadow-xl">
    <NuxtLink :to="productOverview.href" class="group">
      <figure class="group-hover:opacity-75">
        <img
          :src="productOverview.coverImage.src"
          :alt="productOverview.coverImage.alt"
          class="h-[240px] w-full object-cover object-center" />
      </figure>
      <div class="space-y-3 px-5 pt-3">
        <h2 class="text-lg group-hover:text-red-400">
          {{ productOverview.name }}
        </h2>
        <p class="font-semibold">
          NT$ {{ productOverview.price.toLocaleString() }}
        </p>
        <p class="text-sm">{{ productOverview.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import type { ProductOverview } from '~~/types/product'
defineProps<{
  productOverview: ProductOverview
}>()
</script>
