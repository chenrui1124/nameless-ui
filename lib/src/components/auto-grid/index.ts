import { withInstall } from '@utils'
import AutoGrid from './NAutoGrid.vue'

export type AutoGridProps = {
  minWidth: string
  size?: 'sm' | 'md' | 'lg'
}

export const NAutoGrid = withInstall(AutoGrid)
