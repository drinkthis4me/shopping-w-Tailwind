<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-10 px-5">
      <PageBreadcrumb :breadcrumbs="breadcrumbs" :current="'Bottoms'" />
      <h2 class="mt-3 text-3xl font-bold">Bottoms</h2>
      <div
        class="mt-5 grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20">
        <ProductCard
          :product-overview="p"
          v-for="p in productsForBottoms"
          :key="p.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const breadcrumbs = [{ id: 1, name: 'Home', href: '/' }]

const productsForBottoms = [
  {
    id: 1,
    name: 'Loose fit jeans',
    href: '#',
    price: 1790,
    description: '100% cotten jeans fit all bodies',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      alt: 'Model in jeans in front of stairs.',
    },
  },
  {
    id: 2,
    name: 'Bottoms #2',
    href: '#',
    price: 249,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Placeholder image for jeans.',
    },
  },
  {
    id: 3,
    name: 'Bottoms #3',
    href: '#',
    price: 249,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Placeholder image for jeans.',
    },
  },
  {
    id: 4,
    name: 'Bottoms #4',
    href: '#',
    price: 249,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Placeholder image for jeans.',
    },
  },
]
</script>
