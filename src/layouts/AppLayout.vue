<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

import TheNavbar from '@/components/Navbar.vue'

const sidebarOpen = ref(false)


function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <aside :class="[ sidebarOpen ? 'w-72' : 'w-12' ]"
    class="bg-sky-200 transition-[width] duration-500">
    <div class="flex items-center h-14 ps-4">
      <h1>brand</h1>
    </div>
    <ul class="space-y-1">
      <li>
        <router-link to="/tes" class="side-menu-item">
          <Icon icon="ant-design:home-outlined" height="24" class="mx-3" />
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/admin" class="side-menu-item">
          <Icon icon="ph:wind" height="24" class="mx-3" />
          Wind to Rose
        </router-link>
      </li>
      <li>
        <router-link to="/wind" class="side-menu-item">
          <Icon icon="mingcute:wave-line" height="24" class="mx-3" />
          Wave to Rose
        </router-link>
      </li>
    </ul>
  </aside>

  <div class="flex flex-col w-full">
    <header class="h-14 bg-rose-200">
      <the-navbar v-bind="{ toggleSidebar, sidebarOpen }" />
    </header>

    <main class="h-full px-4 lg:px-10 bg-slate-200">
      <div class="h-full bg-slate-100">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.side-menu-item {
  @apply flex w-72 py-2 bg-sky-300/50 rounded-r-2xl cursor-pointer hover:bg-sky-300 hover:font-semibold transition-colors;
}
</style>
