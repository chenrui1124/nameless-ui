<script setup lang="ts">
import { ref } from 'vue'
import { NRadios } from '.'

const modelValue = ref()

const each = [
  { text: 'Windows', value: '1' },
  { text: 'Android', value: '2' },
  { text: 'Linux', value: '3' },
  { text: 'MacOS', value: '4' },
  { text: 'iOS', value: '5' }
] as const
</script>

<template>
  <div class="w-96">
    <NRadios v-model="modelValue" :each="each" />
  </div>
</template>
