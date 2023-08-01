<script setup>

import ProfilePicture from "./ProfilePicture.vue";
import TriDotIcon from "./icons/TriDotIcon.vue";

</script>

<template>

<div class="flex justify-between px-4 py-2 bg-gray-100">
  <ProfilePicture />
  <button class="w-6">
    <TriDotIcon />
  </button>
</div>

</template>
