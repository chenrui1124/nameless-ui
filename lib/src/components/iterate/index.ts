import { withInstall } from '@utils'
import Iterate from './NIterate.vue'

export type IterateProps<T> = {
  each: T[] | readonly T[]
  init?: number
}

export const NIterate = withInstall(Iterate)
