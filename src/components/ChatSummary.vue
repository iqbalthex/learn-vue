<script setup>

import { computed } from "vue";

const props = defineProps({
  sender: { type: Object, required: true },
  lastMsg: { type: Object, required: true },
});

const time = computed(() => {
  const date = new Date(props.lastMsg.sent);

  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return `${minutes}.${seconds}`;
});

</script>

<template>

<div class="flex w-1/5 p-2 gap-2 border-b border-slate-400">
  <div>
    <img src="./" alt="pict" class="" />
  </div>
  <div class="w-full">
    <div class="flex justify-between">
      <div>{{ sender.name }}</div>
      <div>{{ time }}</div>
    </div>
    <div>{{ lastMsg.text }}</div>
  </div>
</div>

</template>
