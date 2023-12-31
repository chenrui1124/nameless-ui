import type { CSSInJS } from 'mm3'

import { colors } from './colors'
import { toVariable } from './utils'

export const base = {
  body: {
    perspective: '24rem'
  },

  '::before,::after': {
    '--tw-content': `''`
  },

  ':root': Object.keys(colors).reduce<{ [p in keyof typeof colors]: string }>((result, value) => {
    result[toVariable(value)] = colors[value][0]
    return result
  }, {}),

  ':root:is(.dark)': Object.keys(colors).reduce<{ [p in keyof typeof colors]: string }>(
    (result, value) => {
      result[toVariable(value)] = colors[value][1]
      return result
    },
    {}
  )
} satisfies CSSInJS
