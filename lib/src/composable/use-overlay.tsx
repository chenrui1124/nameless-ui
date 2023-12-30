import { Transition, computed, defineComponent, h, ref, render } from 'vue'

export function useOverlayCreator() {
  const $visible = ref<boolean>()
  const $action = ref<Function>()
  const $events = computed(() => ($action.value ? { click: $action.value } : {}))

  render(
    h(
      defineComponent(() => () => (
        <Transition
          enterFromClass='opacity-0'
          leaveToClass='opacity-0'
          enterActiveClass='transition duration-300 ease-in-out'
          leaveActiveClass='transition duration-300 ease-in-out'>
          {$visible.value && (
            <div {...$events} class='fixed inset-0 z-20 bg-on-bsc/16 backdrop-blur-sm'></div>
          )}
        </Transition>
      ))
    ),
    document.body
  )

  return () => ({
    show: (action?: Function) => {
      $visible.value = true
      $action.value = action
    },
    hide: () => {
      $visible.value = false
      !$action.value && ($action.value = undefined)
    }
  })
}

export const useOverlay = useOverlayCreator()
