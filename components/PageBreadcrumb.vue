<template>
  <nav aria-label="Breadcrumb">
    <ol
      role="list"
      class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
        <div class="flex items-center">
          <a
            :href="breadcrumb.href"
            class="hover:text-primary mr-2 text-sm font-medium">
            {{ breadcrumb.name }}
          </a>
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="h-5 w-4 text-gray-300">
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>
      <li class="text-sm">
        <a
          :href="product.href"
          aria-current="page"
          class="hover:text-primary font-medium text-gray-500">
          {{ product.name }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { Product } from '~~/types/product'

defineProps<{ product: Product }>()
</script>
