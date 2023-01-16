<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-10 px-5">
      <PageBreadcrumb :breadcrumbs="breadcrumbs" :current="'Socks'" />
      <h2 class="mt-3 text-3xl font-bold">Socks</h2>
      <div
        class="mt-5 grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20">
        <ProductCard
          :product-overview="p"
          v-for="p in productsForSocks"
          :key="p.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const breadcrumbs = [{ id: 1, name: 'Home', href: '/' }]

const productsForSocks = [
  {
    id: 1,
    name: 'Everyday A plus high-end tennis socks',
    href: '#',
    price: 1790,
    description: 'High socks with cushion to the heel',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1616531758364-731625b1f273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      alt: 'Model sitting down with white sneakers and white socks.',
    },
  },
  {
    id: 2,
    name: 'Socks #2',
    href: '#',
    price: 249,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1615486364462-ef6363adbc18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Placeholder image for socks.',
    },
  },
  {
    id: 3,
    name: 'Socks #3',
    href: '#',
    price: 249,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1615486364462-ef6363adbc18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Placeholder image for socks.',
    },
  },
  {
    id: 4,
    name: 'Socks #4',
    href: '#',
    price: 249,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1615486364462-ef6363adbc18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Placeholder image for socks.',
    },
  },
]
</script>
