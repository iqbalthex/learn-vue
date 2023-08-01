<script setup>

defineProps({
  chat: { type: Object, required: false }
});

import ChatBoxHead from "./ChatBoxHead.vue";
import ChatBoxDialog from "./ChatBoxDialog.vue";
import ChatBoxFooter from "./ChatBoxFooter.vue";

</script>

<template>
  <div class="w-full max-w-3/4 grid grid-rows-[4rem_auto_3.25rem]">
    <ChatBoxHead :user="chat?.user" />
    <ChatBoxDialog />
    <ChatBoxFooter />
  </div>
</template>
