<script setup lang="ts">
import type { ModalProps } from '.'

import { useOverlay, useVisible } from '@composable'

defineOptions({ name: 'Modal' })

defineProps<ModalProps>()

const { show, hide } = useOverlay()

const { visible, open, close, closeWith } = useVisible({
  beforeOpen: () => show(close),
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
    <Transition
      :enter-from-class="$style['modal-enter-from']"
      :leave-to-class="$style['modal-leave-to']"
      :enter-active-class="$style['modal-enter-active']"
      :leave-active-class="$style['modal-enter-active']"
    >
      <div
        v-if="visible"
        :style="{ width }"
        class="pointer-events-auto fixed left-1/2 top-1/2 z-30 flex max-h-[88dvh] w-[28rem] max-w-[80dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl border border-solid bg-bsc p-6 transition duration-700 ease-fast"
        :class="danger ? 'border-on-err' : 'border-acc'"
      >
        <!--* Title *-->
        <div v-if="title" class="text-2xl" :class="danger ? 'text-on-err' : 'text-acc'">
          {{ title }}
        </div>
        <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl">{{ subtitle }}</div>

        <!--* Content *-->
        <div v-if="$slots.default" class="overflow-auto text-sm leading-6 text-on-bsc">
          <slot></slot>
        </div>

        <!--* Actions *-->
        <div v-if="$slots.actions" class="flex justify-end gap-4">
          <slot name="actions" v-bind="{ close, closeWith }"></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style module>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%) rotateX(45deg) scale3d(0.5, 0.5, 0.5);
}

.modal-enter-active,
.modal-leave-active {
  transform-style: preserve-3d;
}
</style>
