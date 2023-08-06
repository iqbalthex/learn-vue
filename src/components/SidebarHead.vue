<script setup>

import { inject } from "vue";

import ProfilePicture from "./ProfilePicture.vue";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";
import TriDotIcon from "./icons/TriDotIcon.vue";

const isDark = inject("isDark");

</script>

<template>

<div class="flex justify-between items-center px-4 py-2 bg-wa-secondary dark:bg-wa-dark-secondary">
  <ProfilePicture />
  <div class="flex">
    <button class="w-8 me-2" @click="isDark = !isDark">
      <SunIcon v-if="isDark" class="transition" />
      <MoonIcon v-else class="transition" />
    </button>
    <button class="w-6">
      <TriDotIcon />
    </button>
  </div>
</div>

</template>
