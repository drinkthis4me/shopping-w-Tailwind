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
        :value="quantity"
        @input="
          $emit('update:quantity', ($event.target as HTMLInputElement).value)
        "
        type="number"
        max="50"
        required
        class="hover:border-primary w-full appearance-none border border-slate-200 p-2 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
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
const props = defineProps<{
  labelName: string
  quantity: number
}>()

const emit = defineEmits(['update:quantity'])

function isGreaterThanZero(n: number) {
  return n > 0 ? true : false
}

function onMinusClick() {
  if (isGreaterThanZero(props.quantity - 1))
    emit('update:quantity', props.quantity - 1)
}

function onPlusClick() {
  emit('update:quantity', props.quantity + 1)
}
</script>
