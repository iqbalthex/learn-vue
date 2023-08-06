<script setup>

defineProps({

});

import { ref } from "vue";

import EmojiIcon from "./icons/EmojiIcon.vue";
import MicIcon from "./icons/MicIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import SendIcon from "./icons/SendIcon.vue";
import MessageInput from "./MessageInput.vue";

const textEmpty = ref(true);

function updateButton(isEmpty) {
  textEmpty.value = isEmpty;
}

</script>

<template>
  <div class="flex px-4 py-2 bg-wa-secondary dark:bg-wa-dark-secondary">
    <button class="w-12">
      <EmojiIcon />
    </button>
    <button class="w-12">
      <PlusIcon />
    </button>
    <button class="w-full">
      <MessageInput @typing="updateButton" />
    </button>
    <button class="w-12">
      <MicIcon v-if="textEmpty" />
      <SendIcon v-else />
    </button>
  </div>
</template>
