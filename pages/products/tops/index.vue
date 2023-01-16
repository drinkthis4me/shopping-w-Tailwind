<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-10 px-5">
      <PageBreadcrumb :breadcrumbs="breadcrumbs" :current="'Tops'" />
      <h2 class="text-3xl font-bold mt-3">Tops</h2>
      <div
        class="mt-5 grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20">
        <ProductCard :product-overview="p" v-for="p in products" :key="p.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const breadcrumbs = [
  { id: 1, name: 'Home', href: '/' },
]

const products = [
  {
    id: 1,
    name: 'Spring Limited Edition T-shirt',
    href: '/products/tops/spring-limited-edition-tshirt',
    price: 2000,
    description: 'The Basic Tee 6-Pack',
    coverImage: {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  },
  {
    id: 2,
    name: 'Tshirt #2',
    href: '#',
    price: 399,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80',
      alt: 'Placeholder image for tshirt.',
    },
  },
  {
    id: 3,
    name: 'Tshirt #3',
    href: '#',
    price: 399,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80',
      alt: 'Placeholder image for tshirt.',
    },
  },
  {
    id: 4,
    name: 'Tshirt #4',
    href: '#',
    price: 399,
    description: 'Lorem ipsum dolor sit amet consectetur',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80',
      alt: 'Placeholder image for tshirt.',
    },
  },
]

</script>
