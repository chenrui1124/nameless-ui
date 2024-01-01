import type { PropType, SlotsType } from 'vue'
import type { TooltipProps } from '.'

import { defineComponent, h, mergeProps } from 'vue'

const props = {
  position: {
    type: String as PropType<TooltipProps['position']>,
    default: 'top'
  },
  text: String,
  withFocus: Boolean
} as const

function TooltipContent({ position, text, withFocus }: TooltipProps) {
  return (
    <>
      {text && (
        <div
          class={[
            'pointer-events-none absolute z-10 rounded bg-on-bsc px-3 py-1 text-bsc drop-shadow-md transition duration-300',
            'scale-90 opacity-0 group-hover/n-tooltip:scale-100 group-hover/n-tooltip:opacity-100',
            'before:absolute before:size-2 before:rotate-45 before:bg-on-bsc',
            {
              'bottom-full left-1/2 mb-1 -translate-x-1/2 before:-bottom-1 before:left-1/2 before:-translate-x-1/2':
                position === 'top',
              'left-full top-1/2 ml-1 -translate-y-1/2 before:-left-1 before:top-1/2 before:-translate-y-1/2':
                position === 'right',
              'left-1/2 top-full mt-1 -translate-x-1/2 before:-top-1 before:left-1/2 before:-translate-x-1/2':
                position === 'bottom',
              'right-full top-1/2 mr-1 -translate-y-1/2 before:-right-1 before:top-1/2 before:-translate-y-1/2':
                position === 'left',
              'group-hover/n-tooltip:-translate-y-1': position === 'top',
              'group-hover/n-tooltip:translate-x-1': position === 'right',
              'group-hover/n-tooltip:translate-y-1': position === 'bottom',
              'group-hover/n-tooltip:-translate-x-1': position === 'left',
              'group-focus/n-tooltip:scale-100 group-focus/n-tooltip:opacity-100': withFocus,
              'group-focus/n-tooltip:-translate-y-1': position === 'top' && withFocus,
              'group-focus/n-tooltip:translate-x-1': position === 'right' && withFocus,
              'group-focus/n-tooltip:translate-y-1': position === 'bottom' && withFocus,
              'group-focus/n-tooltip:-translate-x-1': position === 'left' && withFocus
            }
          ]}>
          {text}
        </div>
      )}
    </>
  )
}

TooltipContent.props = props

export default defineComponent({
  name: 'Tooltip',
  props,
  slots: Object as SlotsType<{ default: void }>,
  setup(props, { slots }) {
    const firstNode = slots.default?.()?.[0],
      firstNodeType = firstNode.type,
      oldProps = firstNode.props,
      newProps = mergeProps({ class: 'group/n-tooltip' }, oldProps ?? {}),
      children = firstNode.children,
      otherNode = slots.default?.().splice(1)

    if (typeof firstNodeType !== 'symbol') {
      return () => (
        <>
          {h(firstNodeType as any, newProps, {
            default: () => [...(children as any)?.default?.(), h(TooltipContent, props)]
          })}
          {otherNode}
        </>
      )
    } else {
      return () => <>{slots.default}</>
    }
  }
})
