<script setup lang="ts">
import type { ButtonProps } from '.'

import { useAttrs } from 'vue'
import { BsIcon } from '@bases'

defineOptions({ name: 'Button' })

const { variant = 'outlined', loading, disabled } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [event: Event] }>()

const attrs = useAttrs()

function onClick(event: Event) {
  if (!loading && !disabled) emit('click', event)
}

defineSlots<{ default(props: void): string }>()
</script>

<template>
  <button
    type="button"
    :="$attrs"
    :disabled="disabled"
    :tabindex="loading ? '-1' : void 0"
    @click="onClick"
    :class="[
      'relative h-10 rounded-md border-none px-4 tracking-wider transition-colors duration-300',
      'before:absolute before:inset-0 before:rounded-inherit before:border before:border-solid before:bg-opacity-0 before:transition-colors before:duration-300',
      'cursor-pointer disabled:cursor-not-allowed disabled:text-on-bsc disabled:opacity-48 disabled:before:hidden',
      danger ? 'n-outline-danger' : 'n-outline',
      loading
        ? 'cursor-wait'
        : 'cursor-pointer hover:before:bg-opacity-8 focus:before:bg-opacity-12',
      {
        [`before:bg-on-bsc ${danger ? 'bg-err text-on-err' : 'bg-nrm text-on-nrm'}`]:
          variant === 'solid',

        '': variant === 'outlined',
        [`bg-bsc disabled:before:border-transparent ${
          danger
            ? 'text-on-err before:border-err before:bg-on-err'
            : 'text-acc before:border-otl before:bg-acc'
        } ${!loading && (danger ? 'focus:before:border-on-err' : 'focus:before:border-acc')}`]:
          variant === 'outlined',

        [`bg-transparent ${danger ? 'text-on-err before:bg-on-err' : 'text-acc before:bg-acc'}`]:
          variant === 'clean',

        'before:border-transparent': ['solid', 'clean'].includes(variant),
        'disabled:bg-dis': ['solid', 'outlined'].includes(variant)
      }
    ]"
  >
    <BsIcon v-if="icon" :i="icon" :class="{ 'opacity-0': loading && !disabled }" />
    <span
      class="pointer-events-none text-sm"
      :class="{ 'ml-1': !icon, 'mr-1': !appendIcon, 'opacity-0': loading && !disabled }"
    >
      <slot>{{ text }}</slot>
    </span>
    <BsIcon v-if="appendIcon" :i="appendIcon" :class="{ 'opacity-0': loading && !disabled }" />
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
      <span
        v-if="loading && !disabled"
        class="absolute inset-0 inline-flex items-center justify-center transition duration-300"
      >
        <BsIcon i="i-[svg-spinners--ring-resize]" />
      </span>
    </Transition>
  </button>
</template>
