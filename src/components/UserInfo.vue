<script setup>

defineProps([ "phone", "status" ]);

</script>

<template>
  <div class="flex flex-col">
    <span>{{ phone }}</span>
    <span>{{ status }}</span>
  </div>
</template>
