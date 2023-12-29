import type { Config } from 'tailwindcss'
import type { CSSInJS } from 'mm3'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import { themeReducer } from 'mm3'
import plugin from 'tailwindcss/plugin'

const colors: {
  [p: string]: [light: string, dark: string]
} = {
  '--nano-color-bsc': ['254, 254, 254' /* #FEFEFE */, '28, 27, 30' /* #1C1B1E */],
  '--nano-color-on-bsc': ['25, 25, 30' /* #19191E */, '225, 225, 230' /* #E1E1E6 */],
  '--nano-color-nrm': ['195, 230, 255' /* #C3E6FF */, '50, 70, 110' /* #32466E */],
  '--nano-color-on-nrm': ['0, 20, 40' /* #001428 */, '213, 227, 255' /* #D5E3FF */],
  '--nano-color-acc': ['0, 103, 192' /* #0067C0 */, '166, 200, 250' /* #A6C8FA */],
  '--nano-color-otl': ['118, 119, 120' /* #767778 */, '143, 144, 145' /* #8F9091 */],
  '--nano-color-err': ['240, 185, 180' /* #F0B9B4 */, '150, 60, 55' /* #963C37 */],
  '--nano-color-on-err': ['150, 50, 45' /* #96322D */, '255, 200, 195' /* #FFC8C3 */],
  '--nano-color-dis': ['200, 200, 200' /* #C8C8C8 */, '80, 80, 80' /* #505050 */]
} as const

export default {
  content: ['./dev/**/*.{vue,ts,tsx}', './src/**/*.{vue,ts,tsx}'],
  darkMode: 'class',
  theme: {
    opacity: themeReducer([0, 8, 12, 16, 48, 100], v => `${v}%`),
    extend: {
      colors: themeReducer(
        Object.keys(colors).map(v => v.match(/\-\-nano\-color\-(.+)/)?.[1] ?? ''),
        v => `rgba(var(--nano-color-${v}), <alpha-value>)`
      ),
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
  },
  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        '::before,::after': {
          '--tw-content': `''`
        },
        ':root': Object.keys(colors).reduce<{ [p in keyof typeof colors]: string }>(
          (result, value) => {
            result[value] = colors[value][0]
            return result
          },
          {}
        ),
        ':root:is(.dark)': Object.keys(colors).reduce<{ [p in keyof typeof colors]: string }>(
          (result, value) => {
            result[value] = colors[value][1]
            return result
          },
          {}
        )
      } satisfies CSSInJS)

      addUtilities({
        '.n-outline': {
          '&:focus-visible': {
            outline: `2px solid rgba(var(--nano-color-acc), ${theme('opacity.48')})`,
            outlineOffset: '4px'
          }
        },
        '.n-outline-danger': {
          '&:focus-visible': {
            outline: `2px solid rgba(var(--nano-color-on-err), ${theme('opacity.48')})`,
            outlineOffset: '4px'
          }
        }
      } satisfies CSSInJS)
    }),
    addDynamicIconSelectors({ prefix: 'i' })
  ],
  corePlugins: {
    preflight: false
  }
} satisfies Config
