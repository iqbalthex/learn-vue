<script setup>

defineProps({
  messages: { type: Array, default: () => [null] }
});

import { inject } from "vue";
import OtherMessage from "./OtherMessage.vue";
import SelfMessage from "./SelfMessage.vue";

const user = inject("user");

</script>

<template>
  <div class="px-2">
    <div class="my-2" v-for="message in messages">
      <SelfMessage v-if="message?.sender?.id === user?.id" />
      <OtherMessage v-else />
    </div>
  </div>
</template>
