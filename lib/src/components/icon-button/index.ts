import type { PureCSSIconClass } from 'mm3'

import { withInstall } from '@utils'
import IconButton from './NIconButton.vue'

export type IconButtonProps = {
  icon: PureCSSIconClass
  disabled?: boolean
  danger?: boolean
}

export const NIconButton = withInstall(IconButton)
