import type { Config } from 'tailwindcss'

import { themeReducer } from 'mm3'
import { colors } from './colors'
import { toVariable } from './utils'

export const theme = {
  opacity: themeReducer([0, 8, 12, 16, 32, 48, 100], v => `${v}%`),

  extend: {
    colors: themeReducer(Object.keys(colors), v => `rgba(var(${toVariable(v)}), <alpha-value>)`),

    borderRadius: {
      inherit: 'inherit'
    },

    width: {
      10.5: '2.625rem'
    },

    transitionTimingFunction: {
      fast: 'cubic-bezier(0.36, 0.72, 0, 1)'
    }
  }
} satisfies Config['theme']
