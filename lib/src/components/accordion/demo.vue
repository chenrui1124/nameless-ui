<script setup lang="ts">
import { lorem } from 'mm3'
import { NAccordion } from '.'
</script>

<template>
  <div class="flex w-96 flex-col gap-2">
    <NAccordion title="Accordion" init>{{ lorem('sc') }}</NAccordion>
    <NAccordion title="风琴面板" mode="height">{{ lorem() }}</NAccordion>
    <NAccordion title="Danger" danger>{{ lorem() }}</NAccordion>
  </div>
</template>
