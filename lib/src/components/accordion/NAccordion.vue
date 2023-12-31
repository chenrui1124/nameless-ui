<script setup lang="ts">
import type { AccordionProps } from '.'

import { ref } from 'vue'
import { BsIcon } from '@bases'
import { AccordionBodyByGrid, AccordionBodyByHeight } from './include/AccordionBody'

defineOptions({ name: 'Accordion' })

const { mode = 'grid', init } = defineProps<AccordionProps>()

const model = ref<boolean | undefined>(init)

function toggle() {
  requestAnimationFrame(() => (model.value = !model.value))
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    class="rounded-lg border border-solid bg-bsc transition duration-300"
    :class="danger ? 'border-on-err' : 'border-acc'"
  >
    <div
      @click="toggle"
      class="flex h-12 cursor-pointer select-none items-center gap-4 rounded-inherit px-6 transition-colors duration-300"
      :class="{
        [danger ? 'bg-on-err/12' : 'bg-acc/12']: model,
        'text-acc hover:bg-acc/8': !danger,
        'text-on-err hover:bg-on-err/8': danger
      }"
    >
      <div class="pointer-events-none flex-1 pb-px text-base tracking-wider">
        {{ title }}
      </div>
      <BsIcon
        i="i-[solar--alt-arrow-right-line-duotone]"
        size="lg"
        class="-mr-2 transition duration-300"
        :class="{ 'rotate-90': model }"
      />
    </div>

    <component :is="mode === 'grid' ? AccordionBodyByGrid : AccordionBodyByHeight" :model="model">
      <slot></slot>
    </component>
  </div>
</template>
