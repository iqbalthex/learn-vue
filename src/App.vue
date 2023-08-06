<script setup>

import { onMounted, provide, readonly, ref, watch } from "vue";
import data from "./data/chats.json";

import TheSidebar from "./components/TheSidebar.vue";
import ChatBox from "./components/ChatBox.vue";

const activeChat = ref();
const chats  = ref(data);
const user   = ref({ id: 2, name: "Iqqbal", phone: "085156312621" });
const isDark = ref(localStorage.getItem("isDark"));

watch(isDark, newValue => {
  localStorage.setItem("isDark", newValue || "");

  newValue
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
});

isDark.value && document.documentElement.classList.add("dark");

provide("user", readonly(user));
provide("chats", chats.value.map(listChat));
provide("openChat", openChat);
provide("isDark", isDark);


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
  <main class="flex min-h-screen">
    <TheSidebar />
    <ChatBox :chat="activeChat" />
  </main>
</template>

<style>
* { @apply transition-colors }
</style>
