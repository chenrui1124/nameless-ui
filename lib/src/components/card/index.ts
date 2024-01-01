import { withInstall } from '@utils'
import Card from './NCard.vue'

export type CardProps = {
  /**
   * @default '16rem'
   */
  width?: string
  cover?: string
  title?: string
  subtitle?: string
  /**
   * @default 'outlined'
   */
  variant?: 'solid' | 'outlined'
}

export const NCard = withInstall(Card)
