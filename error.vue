<template>
  <div>
    <NuxtLayout name="error-layout">
      <template #header>
        <div class="text-7xl">Something went wrong</div>
      </template>
      <template #redirectEl>
        <NuxtLink to="/" class="btn btn-error btn-outline btn-lg">
          Go Home
        </NuxtLink>
      </template>
    </NuxtLayout>
  </div>
</template>
