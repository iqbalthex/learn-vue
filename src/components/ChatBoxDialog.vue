<script setup>

defineProps({
  messages: { type: Array, default: () => [] }
});

import { inject } from "vue";

import OtherMessage from "./OtherMessage.vue";
import SelfMessage from "./SelfMessage.vue";

const userId = inject("user").id;

</script>

<template>
  <div class="max-w-[75vw] px-2 flex flex-col overflow-y-scroll">
    <template v-for="message in messages" :key="message.id">
      <!-- <SelfMessage v-if="message.sender?.id === userId" :message="message" /> -->
      <SelfMessage v-if="Math.random() > .5" :message="message" />
      <OtherMessage v-else :message="message" />
    </template>
  </div>
</template>
