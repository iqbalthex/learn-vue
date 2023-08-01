<script setup>

defineProps({

});

import { ref } from "vue";

// import EmojiIcon from "./EmojiIcon.vue";
// import MicIcon from "./MicIcon.vue";
// import PlusIcon from "./PlusIcon.vue";
// import SendIcon from "./SendIcon.vue";
import MessageInput from "./MessageInput.vue";

const textEmpty = ref(true);

function updateButton(isEmpty) {
  textEmpty.value = isEmpty;
}

</script>

<template>
  <div class="flex justify-between items-center px-4 py-2 bg-gray-100">
    <button>
      <EmojiIcon />
    </button>
    <button>
      <PlusIcon />
    </button>
    <button>
      <MessageInput @typing="updateButton" />
    </button>
    <button>
      <MicIcon v-if="textEmpty" />
      <SendIcon v-else />
    </button>
  </div>
</template>
