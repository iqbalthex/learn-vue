<script setup>
import { reactive, provide } from 'vue'
import { useRouter } from 'vue-router'

import AppLayout from '@/layouts/AppLayout.vue'
import windsData from '@/winds.json'

const router = useRouter()
const winds = reactive(windsData)

provide('$winds', winds)

function routeIs(path) {
  return router.currentRoute.value.path === path
}
</script>

<template>
  <div class="mb-2">
    <ul class="flex gap-x-1">
      <li v-for="i in [1, 2, 3]" :key="i">
        <router-link :to="`/wind/wind-${i}`" class="tab-btn"
          :class="{ active: routeIs(`/wind/wind-${i}`) }">
          Tab {{ i }}
        </router-link>
      </li>
    </ul>
  </div>

  <div class="h-full">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>
.tab-btn {
  @apply relative block w-max px-3 py-1 cursor-pointer;
}

.tab-btn.active {
  @apply cursor-[unset];
}

.tab-btn.active:after {
  @apply content-[''] absolute left-0 bottom-0 w-full border-b-2 border-indigo-400;
}
</style>
