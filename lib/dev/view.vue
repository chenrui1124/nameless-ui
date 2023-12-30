<script setup lang="ts">
import { NSwitch } from '@lib'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isDark = ref()

function onSwitch(v: boolean) {
  v
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')
}
</script>

<template>
  <div class="flex h-screen w-screen items-center justify-center bg-bsc transition duration-200">
    <RouterView />

    <Teleport to="body">
      <div class="fixed left-1 top-1 flex flex-col">
        <RouterLink v-for="i in router.options.routes" :to="i.path" class="text-acc">
          {{ i.name }}
        </RouterLink>
      </div>

      <div class="fixed right-1 top-1">
        <NSwitch v-model="isDark" @switch="onSwitch" />
      </div>
    </Teleport>
  </div>
</template>

<style>
body {
  @apply m-0;
}
</style>
