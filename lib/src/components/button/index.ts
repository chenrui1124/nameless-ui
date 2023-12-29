import type { PureCSSIconClass } from 'mm3'

import { withInstall } from '@utils'
import Button from './NButton.vue'

export type ButtonProps = {
  text?: string
  icon?: PureCSSIconClass
  appendIcon?: PureCSSIconClass
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'outlined' | 'clean'
  loading?: boolean
  danger?: boolean
  disabled?: boolean
}

export const NButton = withInstall(Button)
