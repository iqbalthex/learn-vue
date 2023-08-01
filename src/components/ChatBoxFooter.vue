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
  <div class="flex px-4 py-2 bg-gray-100">
    <button class="w-12 border border-black">
      <EmojiIcon />
    </button>
    <button class="w-12 border border-black">
      <PlusIcon />
    </button>
    <button class="w-full border border-black">
      <MessageInput @typing="updateButton" />
    </button>
    <button class="w-12 border border-black">
      <MicIcon v-if="textEmpty" />
      <SendIcon v-else />
    </button>
  </div>
</template>
