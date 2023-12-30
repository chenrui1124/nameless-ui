<script setup lang="ts">
import { lorem } from 'mm3'
import { NButton } from '..'
import { NModal } from '.'
</script>

<template>
  <div class="flex gap-6">
    <NModal title="Lorem" subtitle="Lorem Ipsum">
      <template #trigger="{ open }">
        <NButton @click="open">OPEN</NButton>
      </template>

      {{ lorem() }}

      <template #actions="{ close, closeWith }">
        <NButton @click="closeWith(() => console.log('Submit!'))" variant="outlined">
          CONFIRM
        </NButton>

        <NButton @click="close" variant="solid">CANCEL</NButton>
      </template>
    </NModal>

    <NModal title="Delete" subtitle="Confirm Delete" danger>
      <template #trigger="{ open }">
        <NButton @click="open">DELETE</NButton>
      </template>

      {{ lorem('sc') }}

      <template #actions="{ close, closeWith }">
        <NButton @click="closeWith(() => console.log('Delete!'))" variant="outlined" danger>
          CONFIRM
        </NButton>

        <NButton @click="close" variant="solid" danger>CANCEL</NButton>
      </template>
    </NModal>
  </div>
</template>
