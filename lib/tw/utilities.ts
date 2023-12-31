import type { CSSInJS } from 'mm3'

import { toVariable } from './utils'

export const utilities = (theme: (path: string) => string) =>
  ({
    '.n-outline': {
      outline: '0 solid transparent',
      '&:focus-visible': {
        outline: `4px solid rgba(var(${toVariable('acc')}), ${theme('opacity.48')})`
      }
    },
    '.n-outline-danger': {
      outline: '0 solid transparent',
      '&:focus-visible': {
        outline: `4px solid rgba(var(${toVariable('on-err')}), ${theme('opacity.48')})`
      }
    },
    '.n-disabled': {
      '&:disabled': {
        opacity: theme('opacity.48'),
        pointerEvents: 'none'
      }
    },
  }) satisfies CSSInJS
