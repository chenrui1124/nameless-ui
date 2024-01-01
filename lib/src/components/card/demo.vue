<script setup lang="ts">
import { lorem } from 'mm3'
import { NCard } from '.'
</script>

<template>
  <div class="flex gap-2">
    <NCard
      v-for="i in <const>['solid', 'outlined']"
      :variant="i"
      title="Lorem"
      subtitle="Lorem ipsum dolor sit"
      cover="https://th.wallhaven.cc/lg/85/8586my.jpg"
    >
      {{ lorem() }}
    </NCard>
  </div>
</template>
