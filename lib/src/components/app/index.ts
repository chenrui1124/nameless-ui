import { withInstall } from '@utils'
import App from './NApp.vue'

export type AppProps = {
  /**
   * @default 'view'
   */
  size?: 'view' | 'full'
  sidebar?: {
    init?: boolean
  }
}

export const NApp = withInstall(App)
