<script setup lang="ts">
import { NAutoGrid } from '.'
</script>

<template>
  <NAutoGrid min-width="2.5rem" class="w-96">
    <span class="inline-block size-10 bg-acc" v-for="_ in 18"></span>
  </NAutoGrid>
</template>
