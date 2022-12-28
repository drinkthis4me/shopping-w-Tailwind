<template>
  <div>
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto">
          <h1
            class="py-3 text-center text-3xl font-bold leading-tight text-red-600">
            Fancy Company Title
          </h1>
          <div class="carousel-wrapper">
            <div class="carousel w-full min-h-full" ref="carouselRef">
              <div
                v-for="n in 4"
                :key="n"
                :id="`slide${n}`"
                class="carousel-item relative w-full">
                <img src="https://placeimg.com/800/400/arch" class="w-full" />
                <div
                  class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a
                    :href="`#slide${n - 1 > 0 ? n - 1 : 4}`"
                    class="btn btn-circle border-0 bg-transparent hover:bg-red-500/75">
                    ❮
                  </a>
                  <a
                    :href="`#slide${n + 1 < 5 ? n + 1 : 1}`"
                    class="btn btn-circle border-0 bg-transparent hover:bg-red-500/75">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="siteMap">
            <ul>
              <li v-for="link in websiteMap" :key="link.title">
                {{ link.title }}
                <ul v-if="link.child">
                  <li
                    v-for="clink in link.child"
                    :key="clink.title"
                    class="ml-6">
                    {{ clink.title }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button class="btn">Button</button>
          <button class="btn btn-primary">Button</button>
          <button class="btn btn-secondary">Button</button>
          <button class="btn btn-accent">Button</button>
          <button class="btn btn-ghost">Button</button>
          <button class="btn btn-link">Button</button>
          <div class="px-4 py-6 sm:px-0">
            <!-- Replace with router content -->
            <NuxtPage />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'IndexPage',
  setup() {
    const websiteMap = [
      {
        title: 'Home',
        link: '/',
        child: [],
      },

      {
        title: 'Products',
        link: '/products',
        child: [
          {
            title: 'Tops',
            link: '/products/tops',
            child: [
              {
                title: 'tshirt 1',
                link: '/products/tops/tshirt-1',
              },
              {
                title: 'tshirt 2',
                link: '/products/tops/tshirt-2',
              },
            ],
          },
          {
            title: 'Buttoms',
            link: '/products/buttoms',
          },
          {
            title: 'Socks',
            link: '/products/socks',
          },
          {
            title: 'Others',
            link: '/products/others',
          },
        ],
      },
      {
        title: 'Service',
        link: '/pages/',
        child: [
          {
            title: 'About',
            link: '/pages/about',
          },
          {
            title: 'Contact',
            link: '/pages/contact',
          },
          {
            title: 'FAQs',
            link: '/pages/faqs',
          },
          {
            title: 'Privacy Policy',
            link: '/pages/privacy-policy',
          },
          {
            title: 'Terms of Service',
            link: '/pages/terms-of-service',
          },
        ],
      },
      {
        title: 'Members',
        link: '/users',
        child: [
          {
            title: 'Your Profile',
            link: '/users/profile',
          },
          {
            title: 'Settings',
            link: '/users/settings',
          },
        ],
      },
      {
        title: 'Cart',
        link: '/cart',
        child: [],
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

    return {
      websiteMap,
      carouselRef,
    }
  },
})
</script>
