<script setup>
import { ref, onMounted } from 'vue'

import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
  <app-layout>
    <div class="flex flex-col h-full px-6 py-3">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </app-layout>
</template>
