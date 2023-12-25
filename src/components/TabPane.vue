<script setup>
const props = defineProps({
  defaultTab: { required: true },
})

import { ref } from 'vue'

const active = ref(props.defaultTab)

function setActive(value) {
  active.value = value
}

function isActive(value) {
  return active.value === value
}
</script>

<template>
  <slot name="tabs" v-bind="{ setActive, isActive }" />
  <slot name="contents" :is-active="isActive" />
</template>
