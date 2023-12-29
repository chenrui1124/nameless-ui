<script setup lang="ts">
import { ref } from 'vue'
import { NSwitch } from '.'

const modelValue = ref()

function print(v: boolean | undefined) {
  console.log(v)
}
</script>

<template>
  <div class="flex gap-4">
    <NSwitch v-model="modelValue" @switch="print" />
    <NSwitch v-model="modelValue" disabled />
  </div>
</template>
