import { withInstall } from '@utils'
import Tooltip from './NTooltip'

export type TooltipProps = {
  position?: 'top' | 'right' | 'bottom' | 'left'
  text?: string
  withFocus?: boolean
}

export const NTooltip = withInstall(Tooltip)
