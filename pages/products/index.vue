<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-5 sm:py-10 lg:max-w-none ">
        <h2 class="text-3xl font-bold">Collections</h2>
        <div class="mt-5 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-x-2">
          <div v-for="c in collections" :key="c.name" class="mb-5 lg:mb-0">
            <NuxtLink :to="c.href" class="group">
              <div
                class="relative h-80 w-full overflow-hidden group-hover:opacity-75">
                <img
                  :src="c.imageSrc"
                  :alt="c.imageAlt"
                  class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-2 text-lg font-semibold">
                <span>{{ c.name }}</span>
              </h3>
              <h3>
                <p class="text-sm text-slate-500">{{ c.description }}</p>
              </h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const collections = [
  {
    name: 'Tops',
    description: 'Daily essentials t-shirts',
    imageSrc: '/img/collection-tshirt-pexels-j-sarkar-991509.jpg',
    imageAlt: 'Men in a white t-shirt.',
    href: '/products/tops',
  },
  {
    name: 'Buttoms',
    description: 'Fasnionable jeans and pants',
    imageSrc: '/img/collection-jeans-pexels-anna-shvets-4557647.jpg',
    imageAlt: 'Two girls in jeans holding hands.',
    href: '#',
  },
  {
    name: 'Socks',
    description: 'High quality cotton socks',
    imageSrc: '/img/collection-socks-pexels-mikhail-nilov-6968427.jpg',
    imageAlt: 'Feet cross with white socks.',
    href: '#',
  },
  {
    name: 'Others',
    description: 'Designers chosen handbags and more',
    imageSrc: '/img/collection-bag-pexels-godisable-jacob-1936848.jpg',
    imageAlt: 'Woman holding a brown handbag.',
    href: '#',
  },
]
</script>
