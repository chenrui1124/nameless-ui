<script setup lang="ts">
import type { ButtonProps } from '.'

import { BsIcon } from '@bases'

defineOptions({ name: 'Button' })

const { loading, variant = 'outlined' } = defineProps<ButtonProps>()

const emit = defineEmits<{ click: [event: Event] }>()

function onClick(e: Event) {
  if (!loading) emit('click', e)
}

defineSlots<{ default(props: void): string }>()
</script>

<template>
  <button
    :disabled
    @click="onClick"
    :tabindex="loading ? '-1' : void 0"
    :class="[
      'relative h-10 px-4 tracking-wider',
      'transition-all duration-300',
      'rounded-md border-none',
      'n-disabled disabled:text-on-bsc',

      'before:absolute before:inset-0',
      'before:rounded-inherit before:border before:border-solid',
      'before:bg-opacity-0',
      'before:transition-colors before:duration-300',

      !danger ? 'n-outline' : 'n-outline-danger',

      !loading
        ? 'cursor-pointer hover:before:bg-opacity-8 focus:before:bg-opacity-12'
        : 'cursor-wait',

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
    <!-- Icon -->
    <BsIcon v-if="icon" :i="icon" :class="!disabled && loading && 'invisible'" />

    <!-- Text -->
    <span
      class="pointer-events-none text-sm"
      :class="[
        loading && !disabled && 'invisible',
        {
          'ml-1': !icon,
          'mr-1': !appendIcon
        }
      ]"
    >
      <slot>{{ text }}</slot>
    </span>

    <!-- Append Icon -->
    <BsIcon v-if="appendIcon" :i="appendIcon" :class="{ 'opacity-0': loading && !disabled }" />

    <!-- Loading -->
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
      <span
        v-if="!disabled && loading"
        class="absolute inset-0 inline-flex items-center justify-center transition duration-300"
      >
        <BsIcon i="i-[svg-spinners--ring-resize]" />
      </span>
    </Transition>
  </button>
</template>
