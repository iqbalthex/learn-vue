<script setup>

import BaseInput from "./BaseInput.vue";
import SearchIcon from "./SearchIcon.vue";

</script>

<template>

<div class="relative flex items-center">
  <SearchIcon class="absolute ms-2" />
  <BaseInput class="w-full ps-12 bg-gray-100" placeholder="Search..." />
</div>

</template>
