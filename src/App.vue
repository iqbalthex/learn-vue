<script setup>

import { provide, readonly, ref } from "vue";
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

<!-- <chat-box> -->
  <!-- <chat-header> -->
    <!-- <destination-user> -->
      <!-- <profile-pict /> -->
      <!-- <div> -->
        <!-- <user-phone /> -->
        <!-- <user-status /> -->
      <!-- </div> -->
    <!-- </destination-user> -->

    <!-- <search-btn /> -->
    <!-- <tri-dot-btn /> -->
  <!-- </chat-header> -->

  <!-- <chat-body> -->
    <!-- <template v-for="message in messages"> -->
      <!-- <message-body :key="message.id"> -->
        <!-- <message-text /> -->
        <!-- <message-sent /> -->
      <!-- </message-body> -->
    <!-- </template> -->
  <!-- </chat-body> -->

  <!-- <chat-footer> -->
    <!-- <emoji-btn /> -->
    <!-- <plus-btn /> -->
    <!-- <text-input /> -->
    <!-- <mic-btn v-if="textEmpty" /> -->
    <!-- <send-btn v-else /> -->
  <!-- </chat-footer> -->
<!-- </chat-box> -->

</main>
</template>
