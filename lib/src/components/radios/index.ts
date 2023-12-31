import type { PureCSSIconClass } from 'mm3'

import { withInstall } from '@utils'
import Radios from './NRadios.vue'

export type RadiosProps = {
  each:
    | { icon?: PureCSSIconClass; text: string; value: string }[]
    | string[]
    | readonly { icon?: PureCSSIconClass; text: string; value: string }[]
    | readonly string[]
}

export type RadiosModel = {
  modelValue: string
}

export const NRadios = withInstall(Radios)
