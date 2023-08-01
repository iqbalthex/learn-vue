<script setup>

defineProps({
  chat: { type: Object, required: false }
});

import ChatBoxHead from "./ChatBoxHead.vue";
import ChatBoxDialog from "./ChatBoxDialog.vue";

</script>

<template>
  <div class="w-full max-w-3/4 flex flex-col">
    <ChatBoxHead :user="chat?.user" />
    <ChatBoxDialog />
    <!-- <ChatBoxFooter /> -->
  </div>
</template>
