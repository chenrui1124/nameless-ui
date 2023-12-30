<script setup lang="ts">
import { lorem } from 'mm3'
import { NButton } from '..'
import { NModal } from '.'
</script>

<template>
  <NModal title="HELLO" subtitle="Hello World!">
    <template #trigger="{ open }">
      <NButton @click="open">OPEN</NButton>
    </template>

    <template #default>
      {{ lorem() }}
    </template>

    <template #actions="{ close, closeWith }">
      <NButton @click="closeWith(() => console.log('Submit!'))" variant="outlined">CONFIRM</NButton>
      <NButton @click="close" variant="solid">CANCEL</NButton>
    </template>
  </NModal>
</template>
