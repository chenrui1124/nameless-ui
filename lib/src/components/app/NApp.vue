<script setup lang="ts">
import type { AppProps } from '.'

import { ref } from 'vue'
import AppSidebar from './include/AppSidebar.vue'

defineOptions({ name: 'App' })

const { size = 'view', sidebar } = defineProps<AppProps>()

const sidebarVisible = ref<boolean | undefined>(sidebar?.init)

defineSlots<{
  sidebar(props: void): any
  default(props: void): any
}>()
</script>

<template>
  <div
    style="grid-template-areas: 'aside main'; grid-template-columns: auto 1fr"
    class="grid bg-bsc"
    :class="{
      'h-dvh w-screen': size === 'view',
      'size-full': size === 'full'
    }"
  >
    <AppSidebar v-if="$slots.sidebar" v-model="sidebarVisible">
      <slot name="sidebar"></slot>
    </AppSidebar>

    <main
      style="grid-area: main"
      class="overflow-y-auto overflow-x-hidden bg-inherit transition-all duration-300"
    >
      <slot></slot>
    </main>
  </div>
</template>

<style>
body {
  @apply m-0;
}
</style>
