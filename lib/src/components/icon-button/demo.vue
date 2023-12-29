<script setup lang="ts">
import { NIconButton } from '.'

const i = 'i-[solar--alt-arrow-right-line-duotone]'
</script>

<template>
  <div class="flex gap-4">
    <NIconButton :icon="i" />
    <NIconButton :icon="i" danger />
    <NIconButton :icon="i" disabled />
    <NIconButton :icon="i" disabled danger />
  </div>
</template>
