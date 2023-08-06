<script setup>

defineProps({
  chat: { type: Object, required: false }
});

import ChatBoxHead from "./ChatBoxHead.vue";
import ChatBoxDialog from "./ChatBoxDialog.vue";
import ChatBoxFooter from "./ChatBoxFooter.vue";

</script>

<template>
  <div class="w-full max-w-3/4 max-h-screen grid grid-rows-[4rem_1fr_3.25rem] bg-wa-dialog dark:bg-wa-dark-dialog overflow-hidden">
    <ChatBoxHead :user="chat?.user" />
    <ChatBoxDialog :messages="chat?.messages" />
    <ChatBoxFooter />
  </div>
</template>
