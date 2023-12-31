import { withInstall } from '@utils'
import Switch from './NSwitch.vue'

export type SwitchProps = {
  disabled?: boolean
}

export type SwitchModel = {
  modelValue: boolean | undefined
}

export const NSwitch = withInstall(Switch)
