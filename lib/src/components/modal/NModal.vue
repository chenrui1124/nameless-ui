<script setup lang="ts">
import type { ModalProps } from '.'

import { useOverlay, useVisible } from '@composable'

defineOptions({ name: 'Modal' })

defineProps<ModalProps>()

const { show, hide } = useOverlay()

const { visible, open, close, closeWith } = useVisible({
  beforeOpen: show,
  beforeClose: hide
})

defineSlots<{
  trigger(props: { open: typeof open }): any
  default(props: void): any
  actions(props: { close: typeof close; closeWith: typeof closeWith }): any
}>()
</script>

<template>
  <slot name="trigger" v-bind="{ open }"></slot>

  <Teleport to="body">
    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
      <div
        v-show="visible"
        class="pointer-events-none fixed inset-0 z-30 flex items-center justify-center transition duration-700 ease-out"
        style="perspective: 50rem"
      >
        <Transition
          :enter-from-class="$style['modal-enter-from']"
          :leave-to-class="$style['modal-leave-to']"
          :enter-active-class="$style['modal-enter-active']"
          :leave-active-class="$style['modal-enter-active']"
        >
          <div
            v-if="visible"
            class="pointer-events-auto mx-4 flex w-[28rem] max-w-full flex-col gap-4 rounded-2xl border border-solid border-acc bg-bsc p-6 transition duration-700 ease-fast max-sm:mb-24"
          >
            <!--* Title *-->
            <div v-if="title" class="text-2xl text-acc">{{ title }}</div>
            <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl">{{ subtitle }}</div>

            <!--* Content *-->
            <div v-if="$slots.default" class="text-sm leading-6 text-on-bsc">
              <slot></slot>
            </div>

            <!--* Actions *-->
            <div v-if="$slots.actions" class="flex justify-end gap-4">
              <slot name="actions" v-bind="{ close, closeWith }"></slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style module>
.modal-enter-from {
  transform: translateY(-50%) rotateX(80deg);
}

.modal-leave-to {
  transform: translateY(-50%) rotateX(80deg);
}

.modal-enter-active,
.modal-leave-active {
  transform-style: preserve-3d;
}
</style>
