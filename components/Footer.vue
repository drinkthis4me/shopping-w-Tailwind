<template>
  <div class="footer-wraper">
    <footer class="footer bg-base-200 text-base-content p-10">
      <div v-for="link in links" :key="link.title">
        <span class="footer-title">{{ link.title }}</span>
        <a
          v-for="cLink in link.child"
          :key="cLink.title"
          class="link link-hover hover:text-red-500"
          :href="cLink.link">
          {{ cLink.title }}
        </a>
      </div>
      <div>
        <form @submit.prevent="onSubmit">
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-90">
            <label class="label">
              <span class="label-text">
                Subscribe for latest collections, offers and news about the
                brand.
              </span>
            </label>
            <div class="relative">
              <input
                v-model="emailInput"
                type="email"
                placeholder="username@example.com"
                class="input input-bordered w-full pr-16"
                required />
              <button
                type="submit"
                class="btn absolute top-0 right-0 rounded-l-none hover:border-red-500 hover:bg-red-500">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </footer>
    <footer
      class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
      <div class="grid-flow-col items-center">
        <img
          class="h-10 w-10 rounded-full"
          src="~/assets/img/logo-800x600.png"
          alt="company logo" />
        <p>
          © Fancy company Inc. <br />
          2022 All Rights Reserved
        </p>
      </div>
      <div class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
              class="fill-current hover:text-red-500">
              <path
                fill="currentColor"
                d="M160 128a32 32 0 1 1-32-32a32.1 32.1 0 0 1 32 32Zm68-44v88a56 56 0 0 1-56 56H84a56 56 0 0 1-56-56V84a56 56 0 0 1 56-56h88a56 56 0 0 1 56 56Zm-52 44a48 48 0 1 0-48 48a48 48 0 0 0 48-48Zm16-52a12 12 0 1 0-12 12a12 12 0 0 0 12-12Z" />
            </svg>
          </a>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current hover:text-red-500">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current hover:text-red-500">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current hover:text-red-500">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'PageFooter',
  setup() {
    const links = [
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
          {
            title: 'Order Status',
            link: '/users/order-status',
          },
          {
            title: 'Returns',
            link: '/users/returns',
          },
        ],
      },
    ]

    const emailInput = ref('')

    async function postRequest(inputData: string) {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      await useFetch(url, {
        method: 'POST',
        body: JSON.stringify({
          title: 'This is a test',
          body: 'Email should be user input',
          userId: 1,
          email: inputData,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        parseResponse: JSON.parse,
      })
        .then((response) =>
          console.log('>>> Response data:', response.data.value)
        )
        .catch((error) => console.log('>>> Error:', error.data))
    }

    function onSubmit() {
      postRequest(emailInput.value)
      console.log('>>> Subscribe success!')
    }

    return {
      links,
      emailInput,

      onSubmit,
    }
  },
})
</script>
