<script setup>

import { /*beforeDestroy,*/ provide, readonly, ref } from "vue";
import data from "./data/chats.json";

import TheSidebar from "./components/TheSidebar.vue";
import ChatBox from "./components/ChatBox.vue";

const chats = ref(data);
const activeChat = ref();


provide("chats", chats.value.map(listChat));
provide("openChat", readonly(ref(openChat)));


/**
 * Change active chat being opened in chat box.
 *
 * @param  {Number}  id  ID of chat.
 */
function openChat(id) {
  activeChat.value = chats.value[id];
}

/**
 * Map (list) chat in sidebar.
 *
 * @param   {Object}  chat  Object of chat.
 * @return  {Object}
 */
function listChat(chat) {
  return {
    id: chat.id,
    sender: chat.user,
    lastMsg: chat.messages[0]
  };
}

</script>

<template>
<main class="flex min-h-screen bg-blue-200">
  <TheSidebar />
  <ChatBox :chat="activeChat" />
</main>
</template>
