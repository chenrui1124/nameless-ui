import { withInstall } from '@utils'
import Accordion from './NAccordion.vue'

export type AccordionProps = {
  /**
   * @default 'grid'
   */
  mode?: 'grid' | 'height'
  init?: boolean
  title?: string
  danger?: boolean
}

export const NAccordion = withInstall(Accordion)
