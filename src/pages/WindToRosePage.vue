<script setup>
import useWindStore from '@/stores/wind'

const winds = useWindStore()
</script>

<template>
  <div class="mb-2">
    <ul class="flex gap-x-1">
      <li v-for="dataset, index in winds.datasets" :key="index">
        <router-link :to="`/wind/${dataset?.id}`" class="tab-btn"
          :class="{ active: $route.path === `/wind/${dataset?.id}` }">
          {{ dataset?.name || `Data ${index}` }}
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
