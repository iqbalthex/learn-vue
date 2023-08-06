<script setup>

const props = defineProps({
  sender:  { type: Object },
  lastMsg: { type: Object },
});

import { computed } from "vue";
import PersonIcon from "./icons/PersonIcon.vue";

// Clip messages
const excerpt = computed(() => {
  const msg = props.lastMsg.text.slice(0, 25);
  return `${msg}...`;
});

// Format hours and minutes to `mm.ss`.
const time = computed(() => {
  const date = new Date(props.lastMsg.sent);

  let hours   = date.getHours();
  let minutes = date.getMinutes();

  if (hours   < 10) hours   = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return `${hours}.${minutes}`;
});

const unreadCount = computed(() => {
  return 0;
});

</script>

<template>

<div class="flex px-2 py-2.5 gap-2 border-b-[1pt] dark:border-wa-dark-tertiary">
  <div class="p-1.5 border border-black rounded-full dark:border-wa-dark-icon">
    <PersonIcon />
  </div>
  <div class="w-full">
    <div class="flex justify-between">
      <div>
        <p class="dark:text-slate-400">{{ sender.name || sender.phone }}</p>
        <p class="dark:text-slate-400">{{ excerpt }}</p>
      </div>

      <div class="flex flex-col items-end">
        <template v-if="unreadCount">
          <p class="text-wa-primary dark:text-wa-dark-primary">{{ time }}</p>
          <p class="my-auto px-2 rounded-full bg-wa-primary text-white text-sm dark:bg-wa-dark-primary dark:text-black">{{ unreadCount }}</p>
        </template>
        <template v-else>
          <p class="dark:text-slate-400">{{ time }}</p>
        </template>
      </div>

    </div>
  </div>
</div>

</template>
