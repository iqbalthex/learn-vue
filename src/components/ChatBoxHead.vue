<script setup>

defineProps({
  user: { type: Object, required: false }
});

import ProfilePicture from "./ProfilePicture.vue";
import UserInfo from "./UserInfo.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import TriDotIcon from "./icons/TriDotIcon.vue";

</script>

<template>
  <div class="flex justify-between px-4 py-2 bg-wa-secondary dark:bg-wa-dark-secondary">
    <div class="flex gap-2">
      <ProfilePicture />
      <UserInfo :phone="user?.phone" :status="user?.status" />
    </div>
    <div class="flex">
      <button class="w-12 h-12">
        <SearchIcon />
      </button>
      <button class="w-12 h-12">
        <TriDotIcon />
      </button>
    </div>
  </div>
</template>
