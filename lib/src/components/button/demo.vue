<script setup lang="ts">
import { NButton } from '.'

const variant = ['solid', 'outlined', 'clean'] as const

function print() {
  console.log('Hello')
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <NButton v-for="i in variant" @click="print" :variant="i">HELLO</NButton>
    </div>

    <div class="flex gap-4">
      <NButton danger v-for="i in variant" @click="print" :variant="i">HELLO</NButton>
    </div>

    <div class="flex gap-4">
      <NButton loading v-for="i in variant" @click="print" :variant="i">HELLO</NButton>
    </div>

    <div class="flex gap-4">
      <NButton loading danger v-for="i in variant" @click="print" :variant="i">HELLO</NButton>
    </div>

    <div class="flex gap-4">
      <NButton disabled v-for="i in variant" @click="print" :variant="i">HELLO</NButton>
    </div>

    <div class="flex gap-4">
      <NButton loading disabled v-for="i in variant" @click="print" :variant="i">HELLO</NButton>
    </div>
  </div>
</template>
