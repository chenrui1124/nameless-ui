<script setup lang="ts">
import type { RadiosProps } from '.'

import { BsIcon } from '@bases'

defineOptions({ name: 'Radios' })

defineProps<RadiosProps>()

const modelValue = defineModel<string>({ required: true })
</script>

<template>
  <div class="flex flex-col gap-2">
    <label
      v-for="i in each"
      :key="typeof i == 'string' ? i : i.value"
      class="relative box-border inline-flex h-12 min-w-12 select-none items-center justify-center gap-4 rounded-lg border border-solid px-4 outline outline-0 outline-transparent transition-all duration-300 hover:bg-acc/8 has-[:focus-visible]:outline-4 has-[:focus-visible]:outline-acc/48"
      :class="[
        (typeof i == 'string' ? i : i.value) == modelValue
          ? 'pointer-events-none border-acc bg-acc/12 text-acc'
          : 'cursor-pointer border-otl text-on-bsc'
      ]"
    >
      <BsIcon v-if="typeof i != 'string' && i.icon" :i="i.icon" class="-m-1" />
      <span class="mr-auto text-sm">{{ typeof i == 'string' ? i : i.text }}</span>
      <span
        class="pointer-events-none box-border inline-flex size-4 items-center justify-center rounded-full border-solid bg-bsc transition-all duration-300"
        :class="
          (typeof i == 'string' ? i : i.value) == modelValue ? 'border-4' : 'border border-otl'
        "
      >
        <input
          type="radio"
          v-model="modelValue"
          :value="typeof i == 'string' ? i : i.value"
          class="m-0 rounded-md border-none opacity-0 outline-none"
        />
      </span>
    </label>
  </div>
</template>
