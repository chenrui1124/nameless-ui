<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePreferredDark } from '@vueuse/core'
import { NApp, NSwitch } from '@lib'
import { watchEffect } from 'vue'

const router = useRouter()

const isDark = usePreferredDark()

watchEffect(() =>
  isDark.value
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')
)
</script>

<template>
  <NApp :sidebar="{ init: false }">
    <template #sidebar>
      <div class="flex flex-col gap-2">
        <RouterLink v-for="i in router.options.routes" :to="i.path" class="text-acc">
          {{ i.name }}
        </RouterLink>
      </div>
    </template>

    <div class="flex size-full items-center justify-center">
      <RouterView />
    </div>

    <Teleport to="body">
      <div class="fixed left-1 top-1 flex flex-col"></div>

      <div class="fixed right-1 top-1">
        <NSwitch v-model="isDark" />
      </div>
    </Teleport>
  </NApp>
</template>
