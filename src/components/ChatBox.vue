<script setup>

defineProps({
  chat: {
    type: Object, required: false,
    default() {
      return {};
    }
  }
});

</script>

<template>
  <div class="w-3/4 max-w-3/4 border border-black">
    {{ chat }}
  </div>
</template>
