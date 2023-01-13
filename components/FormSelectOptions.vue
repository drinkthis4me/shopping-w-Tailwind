<template>
  <div class="flex w-full flex-col">
    <label :for="labelName" class="label">
      <span class="label-text">{{ labelName }}</span>
    </label>
    <select
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
      :id="labelName"
      class="hover:border-primary cursor-pointer border bg-white p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <option v-for="option in listOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{ labelName: string; listOptions: string[]; modelValue: string }>()

defineEmits(['update:modelValue'])
</script>
