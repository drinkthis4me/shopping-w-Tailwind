<template>
  <div class="grid md:grid-cols-2">
    <div class="flex justify-end max-w-3xl p-5">
      <div class="grid space-y-4 w-full">
        <slot name="header"></slot>
        <div class="md:hidden">
          <slot name="summary"></slot>
        </div>
        <slot name="steps"></slot>
        <slot name="form"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
    <div class="hidden md:flex">
      <slot name="aside"></slot>
    </div>
  </div>
</template>
