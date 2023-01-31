<template>
  <fieldset class="mt-4">
    <legend class="sr-only">Choose a color</legend>
    <label class="label">
      <span class="label-text">Color</span>
    </label>
    <div class="flex items-center space-x-3">
      <div v-for="c in colors" :key="c.name">
        <input
          :value="c.name"
          @change="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
          type="radio"
          :id="`color-${c.name}`"
          :checked="modelValue === c.name ? true : false"
          class="peer sr-only"
          :aria-labelledby="`color-choice-${c.name}-label`" />
        <label
          :for="`color-${c.name}`"
          :class="[
            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none peer-checked:ring peer-checked:ring-offset-1',
            c.selectedClass,
          ]">
          <span class="sr-only">{{ c.name }}</span>
          <span
            aria-hidden="true"
            :class="[
              'h-8 w-8 rounded-full border border-black border-opacity-10',
              c.class,
            ]"></span>
        </label>
      </div>
    </div>
  </fieldset>
</template>
<script setup lang="ts">
import type { Color } from '~~/types/product'
defineProps<{
  colors: Color[]
  modelValue: string
}>()

defineEmits(['update:modelValue'])
</script>
