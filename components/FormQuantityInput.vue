<template>
  <div class="flex w-full flex-col">
    <label :for="labelName" class="label">
      <span class="label-text">{{ labelName }}</span>
    </label>
    <div class="relative">
      <button
        type="button"
        class="btn btn-primary absolute top-0 left-0 h-full min-h-0 w-10 rounded-none text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="onMinusClick">
        -
      </button>
      <input
      :id="labelName"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        type="number"
        class="w-full appearance-none border border-slate-200 p-2 text-center hover:border-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
      <button
        type="button"
        class="btn btn-primary absolute top-0 right-0 h-full min-h-0 w-10 rounded-none text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="onPlusClick">
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{labelName: string, modelValue: number }>()

const emit = defineEmits(['update:modelValue'])

function validNumber(n: number) {
  return n > 0 ? true : false
}

function onMinusClick() {
  if (validNumber(props.modelValue - 1))
    emit('update:modelValue', props.modelValue - 1)
}

function onPlusClick() {
  emit('update:modelValue', props.modelValue + 1)
}
</script>
