<script setup>

import { computed } from "vue";

defineProps({
  sender: { type: String, required: true },
  lastSent: { type: String, required: true },
  lastMsg: { type: String, required: true },
});

// const time = computed(() => lastSent);

</script>

<template>

<div class="flex w-1/5 p-2 gap-2 border-b border-slate-400">
  <div>pict</div>
  <div class="w-full">
    <div class="flex justify-between">
      <div>{{ sender }}</div>
      <div>{{ lastSent }}</div>
    </div>
    <div>{{ lastMsg }}</div>
  </div>
</div>

</template>
