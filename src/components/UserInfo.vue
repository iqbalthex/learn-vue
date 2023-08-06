<script setup>

defineProps([ "phone", "status" ]);

</script>

<template>
  <div class="flex flex-col">
    <span class="dark:text-wa-dark-icon">{{ phone }}</span>
    <span class="dark:text-wa-dark-icon">{{ status }}</span>
  </div>
</template>
