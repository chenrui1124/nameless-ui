<script setup lang="ts">
import { NButton } from '..'
import { NTooltip } from '.'
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <NTooltip text="Hello" with-focus>
      <NButton>HELLO</NButton>
    </NTooltip>

    <div class="flex gap-4">
      <NTooltip text="Hello" position="left">
        <NButton>HELLO</NButton>
      </NTooltip>

      <NTooltip text="Hello" position="right">
        <NButton>HELLO</NButton>
      </NTooltip>
    </div>

    <NTooltip text="Hello" position="bottom">
      <NButton>HELLO</NButton>
    </NTooltip>
  </div>
</template>
