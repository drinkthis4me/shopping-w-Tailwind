<template>
  <div>
    <header class="bg-white shadow">
      <div class="mx-auto">
        <h1
          class="py-3 text-center text-3xl font-bold leading-tight text-slate-800">
          Fancy Company Title
        </h1>
        <div class="carousel-wrapper">
          <div class="carousel max-h-full w-full" ref="carouselRef">
            <div
              v-for="n in 4"
              :key="n"
              :id="`slide${n}`"
              class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/400/arch" alt="Random placeholder image" class="w-full" />
              <div
                class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  :href="`#slide${n - 1 > 0 ? n - 1 : 4}`"
                  class="btn btn-circle border-0 bg-transparent hover:bg-primary/75">
                  ❮
                </a>
                <a
                  :href="`#slide${n + 1 < 5 ? n + 1 : 1}`"
                  class="btn btn-circle border-0 bg-transparent hover:bg-primary/75">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-5 sm:py-10 lg:max-w-none">
            <h2 class="text-3xl font-bold">Collections</h2>
            <div
              class="mt-5 md:grid md:grid-cols-2 md:space-x-2 lg:grid-cols-4">
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
    </main>
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

const carouselRef = ref<HTMLDivElement | null>(null)

function autoslider(numSlides: number) {
  if (carouselRef.value !== null) {
    let slide = 0
    const target = carouselRef.value
    setInterval(() => {
      if (slide >= target.scrollWidth) {
        slide = 0
      } else {
        slide += target.scrollWidth / numSlides
      }
      target.scrollLeft = slide
    }, 6000) // 6 sec delay between each slide
  }
}

onMounted(() => {
  autoslider(4)
})
</script>
