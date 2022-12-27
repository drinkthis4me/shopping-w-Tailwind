<template>
  <div>
    <NuxtLayout name="error-layout">
      <template #header>
        <div class="text-7xl">404 Page Not Found</div>
      </template>
      <template #redirectEl>
        <NuxtLink
          to="/"
          class="rounded-md border-2 bg-red-400 px-6 py-3 text-5xl hover:border-orange-300 hover:bg-red-600"
          >Go Home</NuxtLink
        >
      </template>
    </NuxtLayout>
  </div>
</template>
