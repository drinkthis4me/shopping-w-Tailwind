<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-7 px-5">
      <PageBreadcrumb :breadcrumbs="breadcrumbs" :current="'Tops'" />
      <h2 class="mt-3 text-3xl font-bold">{{ targetList?.listName }}</h2>
      <ul
        class="mt-5 grid justify-start gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20">
        <li v-for="p in targetList?.list" :key="p.id">
          <ProductCard :product-overview="p" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const breadcrumbs = [{ id: 1, name: 'Home', href: '/' }]

const productList = [
  {
    listName: 'Tops',
    list: [
      {
        id: 1,
        name: 'Spring Limited Edition T-shirt',
        href: '/products/detail-spring-limited-edition-tshirt',
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
    ],
  },
  {
    listName: 'Bottoms',
    list: [
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
    ],
  },
  {
    listName: 'Socks',
    list: [
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
    ],
  },
  {
    listName: 'Others',
    list: [
      {
        id: 1,
        name: 'Designer handbag',
        href: '#',
        price: 3990,
        description: 'Award winning handbag',
        coverImage: {
          src: 'https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          alt: 'Purple handbag with chain belt.',
        },
      },
    ],
  },
]

const route = useRoute()
const currentParams = route.params.group
const targetList = productList.find(
  (list) => list.listName.toLowerCase() === currentParams
)

if (!targetList)
  createError({ statusCode: 404, statusMessage: 'Page Not Found' })
</script>
