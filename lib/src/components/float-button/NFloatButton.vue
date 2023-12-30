<script setup lang="ts">
import type { FloatButtonProps } from '.'

import { BsIcon } from '@bases'
import { useClass } from '@composable'

defineOptions({ name: 'FloatButton' })

defineProps<FloatButtonProps>()

const emit = defineEmits<{ click: [event: Event] }>()

const [cls, activate] = useClass()

function onClick(event: Event) {
  activate(150)
  emit('click', event)
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <button
    type="button"
    :="$attrs"
    @click="onClick"
    class="bottom-6 right-6 z-20 flex size-14 cursor-pointer items-center justify-center rounded-2xl border-none bg-acc text-bsc drop-shadow-xl transition duration-300 ease-fast active:scale-90 sm:bottom-12 sm:right-12"
    :class="[cls`scale-90`, absolute ? 'absolute' : 'fixed']"
  >
    <BsIcon v-if="icon" :i="icon" size="lg" />
  </button>
</template>
