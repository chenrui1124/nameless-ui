<script setup lang="ts">
import { ref } from 'vue'
import { NTextField } from '.'

const value = ref()

const valid = ref()
</script>

<template>
  <div class="flex flex-col gap-4">
    <NTextField v-model="value" placeholder="321" pattern="banana|apple" />
    <NTextField v-model="value" clearable />
    <NTextField v-model="value" icon="i-[ri--search-2-fill]" clearable />
    <NTextField v-model="value" v-model:valid="valid" :validator="v => v == '1'" />
    <NTextField v-model="value" v-model:valid="valid" :validator="v => v == '1'" disabled />
  </div>
</template>
