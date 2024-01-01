<script setup lang="ts">
import { ref } from 'vue'
import { NTextField } from '.'

const value = ref()

const valid = ref()
</script>

<template>
  <div class="flex flex-col gap-4">
    <NTextField v-model="value" placeholder="321" pattern="banana|apple" />
    <NTextField v-model="value" placeholder="321" pattern="banana|apple" variant="solid" />
    <NTextField v-model="value" clearable variant="solid" />
    <NTextField v-model="value" v-model:valid="valid" :validator="v => v == '1'" />
    <NTextField v-model="value" v-model:valid="valid" :validator="v => v == '1'" variant="solid" />
  </div>
</template>
