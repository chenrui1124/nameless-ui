import type { SlotsType } from 'vue'

import { ref, computed, defineComponent } from 'vue'

type AccordionBodyProps = {
  model: boolean | undefined
}

const ctx = {
  props: { model: { type: Boolean, required: true } },
  slots: Object as SlotsType<{ default: void }>
}

export const AccordionBodyByGrid = defineComponent(
  (props: AccordionBodyProps, { slots }) => {
    return () => (
      <div
        class={[
          'grid px-6 transition-all duration-500 ease-fast',
          props.model ? 'pb-6 pt-4' : 'pb-0 pt-0'
        ]}
        style={{ gridTemplateRows: props.model ? '1fr' : '0fr' }}>
        <div class='overflow-hidden text-sm text-on-bsc'>{slots.default?.()}</div>
      </div>
    )
  },
  { ...ctx, name: 'AccordionBodyByGrid' }
)

export const AccordionBodyByHeight = defineComponent(
  (props: AccordionBodyProps, { slots }) => {
    const el = ref<HTMLElement>()

    const height = computed(() => (props.model ? el.value?.offsetHeight + 'px' : '0'))

    return () => (
      <div
        style={{ height: height.value }}
        class='relative overflow-hidden transition-all duration-500 ease-fast'>
        <div
          ref={el}
          class='absolute inset-x-0 bottom-0 rounded-b-2xl px-6 pb-6 pt-4 text-sm text-on-bsc transition-colors duration-300'>
          {slots.default?.()}
        </div>
      </div>
    )
  },
  { ...ctx, name: 'AccordionBodyByGrid' }
)
