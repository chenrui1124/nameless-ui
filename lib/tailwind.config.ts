import type { Config } from 'tailwindcss'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import { base, theme, utilities } from './tw'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./dev/**/*.{vue,ts,tsx}', './src/**/*.{vue,ts,tsx}'],
  darkMode: 'class',
  theme,
  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      addBase(base)
      addUtilities(utilities(theme))
    }),
    addDynamicIconSelectors({ prefix: 'i' })
  ],
  corePlugins: { preflight: false }
} satisfies Config
