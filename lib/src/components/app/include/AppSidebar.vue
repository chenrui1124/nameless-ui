<script setup lang="ts">
defineOptions({ name: 'AppSidebar' })

const visible = defineModel<boolean | undefined>({ required: true })

let toggle = function () {
  if (typeof visible.value == 'undefined') {
    visible.value = false
  } else {
    visible.value = !visible.value
  }

  toggle = function () {
    visible.value = !visible.value
  }
}

defineSlots<{ default(props: void): any }>()
</script>

<template>
  <aside :style="{ gridArea: 'aside' }" class="relative">
    <button
      @click="toggle"
      class="peer/n-app-sidebar-folding absolute -right-7 top-1/2 z-10 flex h-16 w-6 -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-md border-none bg-transparent transition-all duration-300 n-outline max-md:pointer-events-none max-md:hidden"
      :class="[
        'before:-mb-0.5 after:-mt-0.5 before&after:inline-block before&after:h-4 before&after:w-1 before&after:rounded-full before&after:bg-otl before&after:transition before&after:duration-300 hover&focus:before&after:bg-on-bsc',
        visible || typeof visible == 'undefined'
          ? 'hover&focus:before:rotate-12 hover&focus:after:-rotate-12'
          : 'before:-rotate-12 after:rotate-12'
      ]"
    />

    <div
      class="relative h-full w-0 transition-all duration-500 ease-fast peer-hover/n-app-sidebar-folding:brightness-90 peer-focus/n-app-sidebar-folding:brightness-90 md:overflow-hidden"
      :class="{ 'md:w-64': visible || typeof visible == 'undefined' }"
    >
      <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div
          v-if="visible"
          @click="visible = false"
          class="fixed inset-0 z-30 bg-black/16 backdrop-blur-sm transition duration-300 md:pointer-events-none md:hidden"
        />
      </Transition>

      <div
        style="max-width: calc(100vw - 3rem)"
        class="fixed inset-y-0 left-0 box-border h-full w-64 bg-bsc-var p-2 transition duration-500 ease-fast max-md:z-30 md:absolute"
        :class="{ 'max-md:-translate-x-full': !visible }"
      >
        <slot></slot>

        <button
          @click="visible = !visible"
          class="absolute -right-11 top-1 z-30 size-10 cursor-pointer rounded-md border-none bg-transparent transition-all duration-500 ease-fast n-outline md:pointer-events-none md:hidden"
          :class="[
            'before:top-1/2 after:bottom-1/2 before&after:absolute  before&after:left-1/2 before&after:inline-block before&after:h-0.5 before&after:w-5 before&after:-translate-x-1/2 before&after:rounded-full before&after:bg-otl before&after:transition before&after:duration-300 hover&focus:before&after:bg-on-bsc',
            visible
              ? 'before:-translate-y-px before:rotate-45 after:translate-y-px after:-rotate-45'
              : 'before:-translate-y-1.5 after:translate-y-1.5'
          ]"
        />
      </div>
    </div>
  </aside>
</template>
