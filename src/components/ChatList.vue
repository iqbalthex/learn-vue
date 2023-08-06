<script setup>

import { inject } from "vue";
import ChatItem from "./ChatItem.vue";

const chats = inject("chats", []);
const openChat = inject("openChat");

</script>

<template>

<div class="overflow-y-scroll h-full bg-wa-secondary dark:bg-wa-dark-dialog">
  <div v-for="(chat, index) in chats" :key="chat.id">
    <ChatItem
      :sender="chat.sender"
      :lastMsg="chat.lastMsg"
      @click="openChat(index)" />
  </div>
</div>

</template>

<style scoped>

.overflow-y-scroll::-webkit-scrollbar {
  display: none;
}

</style>