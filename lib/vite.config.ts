import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import tw from 'tailwindcss'

export default defineConfig({
  plugins: [
    vue({
      script: { defineModel: true, propsDestructure: true }
    }),
    jsx({
      optimize: true
    }),
    dts({
      rollupTypes: true,
      staticImport: true,
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['vite.config.ts', 'uno.config.ts']
    })
  ],

  server: { host: '0.0.0.0' },

  css: {
    postcss: { plugins: [tw()] }
  },

  resolve: {
    alias: ['bases', 'components', 'composable', 'directives', 'utils'].reduce<{
      [key: `@${string}`]: string
    }>(
      (result, value) => {
        result[`@${value}`] = fileURLToPath(new URL(`./src/${value}/index.ts`, import.meta.url))
        return result
      },
      {
        '@lib': fileURLToPath(new URL('./src/main.ts', import.meta.url)),
        '@css': fileURLToPath(new URL('./src/main.css', import.meta.url))
      }
    )
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'NamelessUI',
      fileName: 'nameless-ui',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: { globals: { vue: 'Vue', 'vue-router': 'VueRouter' } }
    }
  }
})
