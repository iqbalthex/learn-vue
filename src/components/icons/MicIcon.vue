<script setup>

import { inject } from "vue";

const isDark = inject("isDark");

</script>

<template>
  <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="-6 -4 44 44">
    <path :fill="isDark ? '#94a3b8' : '#000'" d="M26,15a1,1,0,0,0-1,1A9,9,0,0,1,7,16a1,1,0,0,0-2,0A11,11,0,0,0,15,27V30a1,1,0,0,0,2,0V27A11,11,0,0,0,27,16,1,1,0,0,0,26,15Z" />
    <path :fill="isDark ? '#94a3b8' : '#000'" d="M16,21a6,6,0,0,0,6-6V7A6,6,0,0,0,10,7v8A6,6,0,0,0,16,21Z" />
  </svg>
</template>
