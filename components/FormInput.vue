<template>
  <div class="relative">
    <input
      :type="type"
      :id="id"
      :placeholder="title"
      :required="required"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :class="[
        formClass,
        'focus:ring-accent peer h-11 w-full rounded-md border border-gray-300 p-2  placeholder-transparent focus:border-none focus:outline-none focus:ring',
      ]" 
      :disabled = disabled
      />
    <label
      :for="id"
      class="absolute left-0.5 -top-0.5 pl-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-400">
      {{ title }}
    </label>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  id: string
  type: string
  inputmode: string
  required: boolean
  modelValue: string | number
  disabled?: boolean | false
}>()

defineEmits(['update:modelValue'])

// for Tailwindcss-forms plugins
const formClass = computed(() => {
  switch (props.type) {
    case 'textarea':
      return 'form-textarea'

    case 'checkbox':
      return 'form-checkbox'

    case 'radio':
      return 'form-radio'

    default:
      return 'form-input'
  }
})
</script>
