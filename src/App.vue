<script setup>

import { ref } from "vue";

const chats = ref([
  {
    id: 1,
    destination: {
      name: "Iqbal",
      phone: "085156312621",
      // pict: null,
      // status: null,
    },
    messages: [
      {        
        id: 1,
        sent: "123",
        text: "lorem",
      }
    ]
  }
]);

</script>

<template>
<main>

<sidebar>
  <side-header />
  <side-nav>
    <search-input />
    <filter-btn />
  </side-nav>

  <side-body>
    <chat-list>
      <template v-for="chat in chats">
        <chat-summary :key="chat.id" />
      </template>
    </chat-list>
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
