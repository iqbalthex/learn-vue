<script setup>

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);

</script>

<template>
  <input type="text" class="px-2 py-1 rounded-lg dark:bg-wa-dark-tertiary" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
