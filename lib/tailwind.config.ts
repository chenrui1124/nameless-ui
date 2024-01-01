import type { Config } from 'tailwindcss'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import { base, theme, utilities, variants } from './tw'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./dev/**/*.{vue,ts,tsx}', './src/**/*.{vue,ts,tsx}'],
  darkMode: 'class',
  theme,
  plugins: [
    plugin(({ addBase, addUtilities, addVariant, theme }) => {
      addBase(base)
      addUtilities(utilities(theme))
      for (const arg of variants) addVariant(...arg)
    }),
    addDynamicIconSelectors({ prefix: 'i' })
  ],
  corePlugins: { preflight: false }
} satisfies Config
