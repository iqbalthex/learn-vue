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

<div class="flex p-2 gap-2">
  <div>
    <img src="/" alt="pict" class="" />
  </div>
  <div class="w-full">
    <div class="flex justify-between">
      <span>{{ sender.name }}</span>
      <span>{{ time }}</span>
    </div>
    <div class="flex justify-between">
      <span>{{ lastMsg.text }}</span>
      <span class="w-6 h-6 text-center rounded-full bg-lime-200">4</span>
    </div>
  </div>
</div>

</template>
