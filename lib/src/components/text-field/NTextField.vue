<script setup lang="ts">
import type { TextFieldModel, TextFieldProps } from '.'

import { computed } from 'vue'
import { BsIcon } from '@bases'

defineOptions({ name: 'TextField', inheritAttrs: false })

const { validator } = defineProps<TextFieldProps>()

const modelValue = defineModel<TextFieldModel['modelValue']>({ required: true })

const valid = defineModel<TextFieldModel['valid']>('valid')

function clear() {
  modelValue.value = ''
}

const isValid = validator
  ? computed(() => {
      valid.value = validator(modelValue.value)
      return !modelValue.value || valid.value
    })
  : true
</script>

<template>
  <div class="relative inline-flex h-10 rounded-md">
    <input
      :="{ ...$attrs, autocomplete, pattern, placeholder, disabled }"
      :type="secret ? 'password' : 'text'"
      v-model="modelValue"
      class="peer/n-text-field flex-1 rounded-inherit border border-solid border-transparent text-sm text-on-bsc transition-all duration-300 n-disabled placeholder:text-on-bsc invalid:bg-err invalid:text-on-err invalid:n-outline-danger focus:bg-bsc invalid:focus:border-on-err disabled:bg-dis"
      :class="[
        clearable ? 'pr-10' : 'pr-3',
        icon ? 'pl-10' : 'pl-3',
        isValid
          ? 'bg-nrm n-outline focus:border-acc'
          : 'bg-err n-outline-danger focus:border-on-err'
      ]"
    />

    <BsIcon
      v-if="icon"
      :i="icon"
      class="absolute inset-y-2 left-2 text-on-nrm peer-focus/n-text-field:text-acc"
      size="lg"
    />

    <Transition enter-from-class="scale-0" leave-to-class="scale-0">
      <button
        v-if="clearable && !disabled"
        v-show="modelValue"
        @click="clear"
        class="absolute inset-y-0 right-0 inline-flex size-10 items-center justify-center rounded-inherit border-none bg-transparent text-otl transition duration-300 n-outline hover:text-on-err focus:text-on-err"
      >
        <BsIcon i="i-[solar--close-circle-bold]" size="lg" />
      </button>
    </Transition>
  </div>
</template>
