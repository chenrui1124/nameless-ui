import { Transition, computed, defineComponent, h, ref, render } from 'vue'

function useOverlayFactory() {
  const $visible = ref<boolean>(),
    $action = ref<(e: Event) => void>(),
    $events = computed(() => ($action.value ? { onClick: $action.value } : {}))

  const Overlay = defineComponent(() => {
    return () => (
      <Transition enterFromClass='opacity-0' leaveToClass='opacity-0'>
        <div
          v-show={$visible.value}
          class='fixed inset-0 z-30 bg-on-bsc/32 dark:bg-on-bsc/16 backdrop-blur-sm transition duration-500'
          {...$events.value}></div>
      </Transition>
    )
  })

  render(h(Overlay), document.body)

  return () => ({
    show: (action?: (e: Event) => void) => {
      $visible.value = true
      $action.value = action
    },
    hide: () => {
      $visible.value = false
      !$action.value && ($action.value = void 0)
    }
  })
}

export const useOverlay = useOverlayFactory()
