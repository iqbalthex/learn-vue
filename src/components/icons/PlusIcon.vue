<script setup>

import { inject } from "vue";

const isDark = inject("isDark");

</script>

<template>
  <svg class="m-auto" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
  <path :fill="isDark ? '#94a3b8' : '#000'" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z" />
  </svg>
</template>
