<script setup lang="ts">
import type { SwitchModel, SwitchProps } from '.'

defineOptions({ name: 'Switch' })

defineProps<SwitchProps>()

const modelValue = defineModel<SwitchModel>({ required: true })

const emit = defineEmits<{ switch: [newValue: boolean] }>()

function onSwitch() {
  requestAnimationFrame(() => {
    modelValue.value = !modelValue.value
    requestAnimationFrame(() => emit('switch', modelValue.value!))
  })
}
</script>

<template>
  <button
    :disabled
    @click="onSwitch"
    :class="[
      'group/n-switch',
      'relative h-7 w-12 cursor-pointer rounded-full border-none transition-all duration-300 n-outline n-disabled',

      'before:absolute before:inset-0 before:rounded-inherit before:border before:border-solid before:transition before:duration-300',

      'after:pointer-events-none after:absolute after:-right-1 after:top-1/2 after:inline-block after:size-9 after:-translate-y-1/2 after:rounded-full after:bg-on-bsc after:bg-opacity-0 after:transition after:duration-300 after:ease-fast hover:after:bg-opacity-8 focus:after:bg-opacity-12',

      {
        'bg-acc before:border-transparent after:translate-x-0 disabled:bg-dis': modelValue,
        'bg-bsc before:border-otl after:-translate-x-5 disabled:before:border-dis': !modelValue
      }
    ]"
  >
    <span
      class="pointer-events-none absolute right-1 top-1/2 inline-block size-5 -translate-y-1/2 rounded-full transition duration-300 ease-fast group-active/n-switch:scale-125"
      :class="{
        'translate-x-0 bg-bsc': modelValue,
        '-translate-x-5 scale-75 bg-otl group-disabled/n-switch:bg-dis': !modelValue
      }"
    ></span>
  </button>
</template>
