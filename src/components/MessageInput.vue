<script setup>

const emit = defineEmits(["typing"]);

import { ref, watch } from "vue";

import BaseInput from "./BaseInput.vue";

const textEmpty = ref("");
let typingTimeout;

watch(textEmpty, (newValue, oldValue) => {
  const newIsEmpty = newValue.length < 1;
  const oldIsEmpty = oldValue.length < 1;
  if (newIsEmpty === oldIsEmpty) return;

  typingTimeout && clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => emit("typing", newIsEmpty), 2000);
});

</script>

<template>
  <BaseInput class="w-full dark:text-white" placeholder="Type a message..." v-model="textEmpty" />
</template>
