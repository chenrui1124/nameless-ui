<script setup lang="ts">
import type { IconButtonProps } from '.'

import { BsIcon } from '@bases'
import { useClass } from '@composable'

defineOptions({ name: 'IconButton' })

defineProps<IconButtonProps>()

const emit = defineEmits<{ click: [event?: Event] }>()

const [cls, activate] = useClass()

function onClick(event: Event) {
  activate(150)
  emit('click', event)
}
</script>

<template>
  <button
    :disabled
    @click="onClick"
    :class="[
      'group/n-icon-button',
      'relative inline-flex h-10 w-10.5 cursor-pointer items-center justify-center rounded-md border-none bg-opacity-0 transition-colors duration-300 n-disabled',
      'hover:bg-opacity-8 focus:bg-opacity-12',
      'disabled:text-dis',
      danger ? 'bg-on-err text-on-err n-outline-danger' : 'bg-acc text-acc n-outline'
    ]"
  >
    <BsIcon
      :i="icon"
      :class="[
        cls`scale-75`,
        'transition duration-300 ease-fast group-active/n-icon-button:scale-75'
      ]"
      size="lg"
    />
  </button>
</template>
