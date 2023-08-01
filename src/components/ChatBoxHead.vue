<script setup>

defineProps({
  user: { type: Object, required: false }
});

import ProfilePicture from "./ProfilePicture.vue";
import UserInfo from "./UserInfo.vue";
import SearchIcon from "./SearchIcon.vue";
import TriDotIcon from "./TriDotIcon.vue";

</script>

<template>
  <div class="flex justify-between px-4 py-2 bg-gray-100">
    <div class="flex gap-2 border border-black">
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
