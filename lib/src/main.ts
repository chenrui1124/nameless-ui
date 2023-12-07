import '@css'

import type { App } from 'vue'

import * as components from './components'

export function nameless(app: App) {
  for (const i in components) app.use(components[<keyof typeof components>i])
}

export * from './components'
