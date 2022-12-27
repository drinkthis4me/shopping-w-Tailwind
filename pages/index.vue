<template>
  <div>
    <div>
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <!-- Replace with your content -->
            <NuxtPage />
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from '../stores/counter-store'
export default defineComponent({
  name: 'IndexPage',
  setup() {
    const store = useCounterStore()
    return {
      store,
    }
  },
})
</script>
