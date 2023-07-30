<script setup>

import { ref } from "vue";

import ChatSummary from "./components/ChatSummary.vue";

const chats = ref([
  { id: 1,
    user: {
      name: "Iqbal", phone: "085156312621"
    },
    messages: [
      { id: 1, sent: "2023-07-30T01:00:00", text: "lorem ipsum" },
      { id: 2, sent: "2023-07-30T02:00:00", text: "ipsum amet" },
      { id: 3, sent: "2023-07-30T03:00:00", text: "sit lorem" },
    ],
  },
  { id: 2,
    user: {
      name: "Arie", phone: "085156312321"
    },
    messages: [
      { id: 1, sent: "2023-07-30T01:00:00", text: "lorem amet" },
      { id: 2, sent: "2023-08-30T02:00:00", text: "ipsum dolor" },
      { id: 3, sent: "2023-09-30T03:00:00", text: "dolor sit" },
    ],
  },
  { id: 3,
    user: {
      name: "Maulana", phone: "085156312345"
    },
    messages: [
      { id: 1, sent: "2023-07-30T01:00:00", text: "lorem sit" },
      { id: 2, sent: "2023-07-30T12:00:00", text: "amet ipsum" },
      { id: 3, sent: "2023-08-30T23:00:00", text: "sit dolor" },
    ],
  },
]);

</script>

<template>
<main class="bg-blue-200">

<sidebar>
  <side-header />
  <side-nav>
    <search-input />
    <filter-btn />
  </side-nav>

  <side-body>
    <div data-chat-list style="background: #777">
      <template v-for="chat in chats" :key="chat.id">
        <chat-summary
          :sender="chat.user.name"
          :lastSent="chat.messages[0].sent"
          :lastMsg="chat.messages[0].text"
          />
      </template>
    </div>
  </side-body>
</sidebar>

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
