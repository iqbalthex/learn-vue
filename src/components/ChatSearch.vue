<script setup>

import BaseInput from "./BaseInput.vue";
import SearchIcon from "./icons/SearchIcon.vue";

</script>

<template>

<div class="relative flex items-center">
  <SearchIcon class="absolute ms-2" />
  <BaseInput class="w-full ps-12 bg-wa-secondary focus:outline-none dark:text-white" placeholder="Search..." />
</div>

</template>
