<script setup>

const emit = defineEmits(["typing"]);

import { ref, watch } from "vue";

const textEmpty = ref("");
let typingTimeout;

watch(textEmpty, (newValue, oldValue) => {
  const newIsEmpty = newValue.length < 1;
  const oldIsEmpty = oldValue.length < 1;
  if (newIsEmpty === oldIsEmpty) return;

  typingTimeout && clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => emit("typing", newIsEmpty), 250);
});

</script>

<template>
  <input v-model="textEmpty" type="text" class="px-2 py-1 rounded-lg" />
</template>
