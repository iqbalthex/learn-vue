<script setup>

import ChatSearch from "./ChatSearch.vue";
import FilterIcon from "./FilterIcon.vue";
import ChatList from "./ChatList.vue";

</script>

<template>

<div class="flex p-2 gap-1 items-center border-b bg-white border-slate-400">
  <ChatSearch class="w-full" />
  <button>
    <FilterIcon />
  </button>
</div>

<ChatList />

</template>
