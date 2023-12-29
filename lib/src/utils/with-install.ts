import type { App, Plugin } from 'vue'

export function withInstall<T>(comp: T) {
  ;(<T & Plugin>comp).install = (app: App) => {
    app.component(`N${(<any>comp).name}`, <any>comp)
  }
  return comp as T & Plugin
}
