<script setup>
import { ref, inject } from 'vue'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'

import WindByDir from './WindByDir.vue'
import WindBySpd from './WindBySpd.vue'

const router = useRouter()
const winds  = inject('$winds', {})
let id, data = ref([])

onBeforeRouteUpdate((to, from) => {
  id = to.params.datasetId
  data.value = winds[id]
})
</script>

<template>
  <div class="flex flex-wrap justify-between gap-x-6 gap-y-2">
    <div class="card flex flex-col self-start">
      <h3 class="card-title">Raw data (id: {{ id }}, len: {{ data?.length }})</h3>
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
              <input class="table-input" :value="d.spd" />
            </td>
            <td class="p-0.5">
              <input class="table-input" :value="d.dir" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card flex flex-col self-start">
      <h3 class="card-title">Frequency by wind direction</h3>
      <WindByDir v-bind="{ data }" />

      <h3 class="card-title mt-2">Frequency by wind speed</h3>
      <WindBySpd v-bind="{ data }" />
    </div>

    <div class="card">
      <h3 class="card-title">Graph</h3>
      
    </div>
  </div>
</template>

<style>
.card {
  @apply p-2 bg-slate-100/75 rounded-lg;
}

.card .card-title {
  @apply text-center text-lg font-medium;
}

th:not(:last-child) {
  @apply border-r border-gray-300;
}

.table-input {
  @apply w-full py-0.5 bg-violet-200 text-center focus:bg-cyan-100 focus:outline-indigo-300;
}

</style>
