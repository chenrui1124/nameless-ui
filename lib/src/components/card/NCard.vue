<script setup lang="ts">
import type { CardProps } from '.'

const { width = '16rem', variant = 'outlined' } = defineProps<CardProps>()

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <div
    :style="{ width }"
    class="relative flex flex-col gap-4 rounded-xl p-6 transition-colors duration-300"
    :class="{
      'bg-bsc-var drop-shadow': variant === 'solid',
      'bg-transparent before:pointer-events-none before:absolute before:inset-0 before:rounded-inherit before:border before:border-solid before:border-otl':
        variant === 'outlined'
    }"
  >
    <!-- Cover -->
    <img v-if="cover" :src="cover" class="-mx-6 -mt-6 rounded-t-inherit" />

    <!-- Title -->
    <div v-if="title" class="text-xl text-acc transition-colors duration-300">{{ title }}</div>
    <div v-if="subtitle" class="-mt-2 pl-px text-sm text-otl transition-colors duration-300">
      {{ subtitle }}
    </div>

    <!-- Content -->
    <div class="text-sm text-on-bsc transition-colors duration-300">
      <slot></slot>
    </div>
  </div>
</template>
