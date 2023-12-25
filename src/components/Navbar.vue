<script setup>
defineProps(['toggleSidebar', 'sidebarOpen'])

import { Icon } from '@iconify/vue'

import TheDropdown from '@/components/Dropdown.vue'
</script>

<template>
  <nav class="flex justify-between items-center h-full mx-6">
    <button class="text-2xl font-bold" @click="toggleSidebar">
      <Icon icon="ic:baseline-arrow-back" height="24" :horizontal-flip="!sidebarOpen" />
    </button>

    <div class="relative flex px-6">
      <the-dropdown>
        <template #toggler>
          <Icon icon="lets-icons:user-fill" height="32"
            class="border border-black rounded-full" />
        </template>
        <template #items>
          <ul class="absolute top-full right-0 w-36 mt-3 bg-indigo-100 rounded-md shadow-md overflow-hidden">
            <li class="user-menu">menu 1</li>
            <li class="user-menu">menu 2</li>
            <li class="user-menu">menu 3</li>
          </ul>
        </template>
      </the-dropdown>
    </div>
  </nav>
</template>

<style scoped>
.user-menu {
  @apply flex justify-center py-1  cursor-pointer hover:bg-white/75;
}
</style>
