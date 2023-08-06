<script setup>

import { inject } from "vue";

const isDark = inject("isDark");

</script>

<template>
  <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="-24 0 300 300">
    <rect width="256" height="256" fill="none" />
    <circle :stroke="isDark ? '#94a3b8' : '#000'" cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
    <path fill="none" :stroke="isDark ? '#94a3b8' : '#000'" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073" />
    <circle :fill="isDark ? '#94a3b8' : '#000'" cx="92" cy="108" r="12" />
    <circle :fill="isDark ? '#94a3b8' : '#000'" cx="164" cy="108" r="12" />
  </svg>
</template>
