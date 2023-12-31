<script setup lang="ts">
import { lorem } from 'mm3'
import { NButton, NModal } from '..'
import { NFloatButton } from '.'
</script>

<template>
  <NModal title="Lorem">
    <template #trigger="{ open }">
      <NFloatButton icon="i-[solar--alt-arrow-right-line-duotone]" @click="open" />
    </template>

    {{ lorem('sc') }}

    <template #actions="{ close }">
      <NButton @click="close">Confirm</NButton>
    </template>
  </NModal>
</template>
