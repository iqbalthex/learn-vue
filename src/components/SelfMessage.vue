<script setup>

const props = defineProps({
  message: { type: Object },
});

import { computed } from "vue";

// Format hours and minutes to `mm.ss`.
const time = computed(() => {
  const date = new Date(props.message.sent);

  let hours   = date.getHours();
  let minutes = date.getMinutes();

  if (hours   < 10) hours   = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return `${hours}.${minutes}`;
});

</script>

<template>
  <div class="w-1/2 my-1 px-2 py-1 self-end bg-white rounded-lg rounded-tr-none shadow-md dark:bg-wa-dark-tertiary dark:text-white">
    <div class="w-min">{{ message?.sender?.phone }}</div>
    <div class="flex justify-between">
      <div>{{ message?.text }}</div>
      <div class="ms-2 mt-2 self-end text-sm">{{ time }}</div>
    </div>
  </div>
</template>
