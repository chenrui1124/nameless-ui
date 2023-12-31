import type { PureCSSIconClass } from 'mm3'

import { withInstall } from '@utils'
import FloatButton from './NFloatButton.vue'

export type FloatButtonProps = {
  icon?: PureCSSIconClass
  /**
   * position: absolute
   */
  absolute?: boolean
  disabled?: boolean
}

export const NFloatButton = withInstall(FloatButton)
