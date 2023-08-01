<script setup>

import ChatList from "./ChatList.vue";
import ChatSearch from "./ChatSearch.vue";
import FilterIcon from "./icons/FilterIcon.vue";

</script>

<template>

<div class="flex p-2 gap-1 items-center border-b bg-white">
  <ChatSearch class="w-full" />
  <button>
    <FilterIcon />
  </button>
</div>

<ChatList />

</template>
