<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import TabPane   from '@/components/TabPane.vue'

const data = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]
</script>

<template>
  <tab-pane :default-tab="1">
    <template #tabs="{ setActive, isActive }">
      <div class="mb-2">
        <ul class="flex gap-x-1">
          <li>
            <button class="tab-btn"
              :class="{ active: isActive(1) }"
              @click="setActive(1)">
              Tab 1
            </button>
          </li>
          <li>
            <button class="tab-btn"
              :class="{ active: isActive(2) }"
              @click="setActive(2)">
              Tab 2
            </button>
          </li>
          <li>
            <button class="tab-btn"
              :class="{ active: isActive(3) }"
              @click="setActive(3)">
              Tab 3
            </button>
          </li>
        </ul>
      </div>
    </template>

    <template #contents="{ isActive }">
      <div class="h-full">
        <!-- <router-view></router-view> -->
        <div v-show="isActive(1)" class="flex flex-wrap justify-between gap-x-6 gap-y-2">
          <div class="card flex flex-col">
            <h3 class="card-title">Raw data</h3>
            <table class="text-center">
              <colgroup>
                <col class="w-8" />
                <col class="w-40" />
                <col class="w-40" />
              </colgroup>
              <thead class="border-b border-gray-400">
                <tr>
                  <th>#</th>
                  <th class="p-0.5">Speed (m/s)</th>
                  <th class="p-0.5">Direction (degree)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d, index in data" :key="index">
                  <th class="border-b border-gray-300">{{ index + 1 }}</th>
                  <td class="p-0.5">
                    <input class="table-input" :value="Math.random().toFixed(2)" />
                  </td>
                  <td class="p-0.5">
                    <input class="table-input" :value="Math.random().toFixed(2)" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card flex flex-col self-start">
            <h3 class="card-title">Frequency by wind direction</h3>
            <table class="text-center">
              <colgroup>
                <col class="w-24" />
                <col v-for="i in Array.from({ length: 8 })" class="w-10" />
              </colgroup>
              <thead class="border-b border-gray-400">
                <tr>
                  <th>Direction</th>
                  <th>N</th>
                  <th>NE</th>
                  <th>E</th>
                  <th>SE</th>
                  <th>S</th>
                  <th>SW</th>
                  <th>W</th>
                  <th>NW</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="border-b border-gray-300">Frequency</th>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                </tr>
                <tr>
                  <th class="border-b border-gray-300">Relative</th>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>

            <h3 class="card-title mt-2">Frequency by wind speed</h3>
            <table class="text-center">
              <colgroup>
                <col class="w-32" />
                <col v-for="i in Array.from({ length: 5 })" class="w-20" />
              </colgroup>
              <thead class="border-b border-gray-400">
                <tr>
                  <th>Speed (m/s)</th>
                  <th>0.1 - 1.0</th>
                  <th>1.1 - 2.0</th>
                  <th>2.1 - 3.0</th>
                  <th>3.1 - 4.0</th>
                  <th>4.1 - 5.0</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="border-b border-gray-300">Frequency</th>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                  <td class="cell">{{ parseInt(Math.random() * 10) }}</td>
                </tr>
                <tr>
                  <th class="border-b border-gray-300">Relative</th>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                  <td class="cell">{{ Math.random().toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card">
            <h3 class="card-title">Graph</h3>
            
          </div>
        </div>
        <div v-show="isActive(2)" class="tab-content">
          Content 2
        </div>
        <div v-show="isActive(3)" class="tab-content">
          Content 3
        </div>
      </div>
    </template>
  </tab-pane>
</template>

<style scoped>
.tab-btn {
  @apply relative block w-max px-3 py-1 cursor-pointer;
}

.tab-btn.active:after {
  @apply content-[''] absolute left-0 bottom-0 w-full border-b-2 border-indigo-400;
}

.card {
  @apply p-2 bg-white rounded-md;
}

.card .card-title {
  @apply text-center text-lg font-medium;
}

th:not(:last-child) {
  @apply border-r border-gray-300;
}

.table-input {
  @apply w-full py-0.5 bg-violet-200/75 text-center focus:bg-cyan-100 focus:outline-none;
}

td.cell {
  @apply bg-violet-200 border border-gray-400;
}
</style>
