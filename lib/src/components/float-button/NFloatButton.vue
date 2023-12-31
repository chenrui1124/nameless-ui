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
    :disabled
    @click="onClick"
    class="bottom-6  right-6 z-20 flex size-14 cursor-pointer items-center justify-center rounded-lg border-none bg-acc text-bsc drop-shadow-xl transition-all duration-300 ease-fast n-outline n-disabled active:scale-90 disabled:bg-dis sm:bottom-12 sm:right-12"
    :class="[cls`scale-90`, absolute ? 'absolute' : 'fixed']"
  >
    <BsIcon v-if="icon" :i="icon" size="lg" />
  </button>
</template>
