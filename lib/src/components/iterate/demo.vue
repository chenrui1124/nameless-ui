<script setup lang="ts">
import { NButton } from '..'
import { NIterate } from '.'

const each = ['solid', 'outlined', 'clean'] as const
</script>

<template>
  <NIterate
    :each="each"
    @before-next="v => console.log(v)"
    @after-next="v => console.log(v)"
    #="{ item, next }"
  >
    <NButton @click="next" :variant="item">Next</NButton>
  </NIterate>
</template>
