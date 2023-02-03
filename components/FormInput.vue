<template>
  <div class="relative">
    <input
      :type="type"
      :id="id"
      placeholder=""
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="peer h-11 w-full rounded-md border border-gray-300 p-2 pl-2 placeholder-transparent focus:border-2 focus:border-black focus:outline-none" />
    <label
      :for="id"
      class="absolute left-0.5 -top-0.5 pl-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-400">
      {{ title }}
    </label>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  id: string
  type: string
  inputmode: string
  required: boolean
  modelValue: string
}>()

defineEmits(['update:modelValue'])
</script>
