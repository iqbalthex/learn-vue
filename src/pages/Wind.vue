<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useWindStore from '@/stores/wind'
import WindByDir from '@/components/WindByDir.vue'
import WindBySpd from '@/components/WindBySpd.vue'
//import WindPlot  from '@/components/WindPlot.vue'

const route = useRoute()
const winds = useWindStore()

onMounted(winds.fetch)

const dataset = computed(() => {
  return winds.datasets.find(dset => dset.id === route.params.datasetId)
})
</script>

<template>
  <div class="flex flex-wrap justify-between gap-x-6 gap-y-2">
    <div class="card flex flex-col self-start">
      <h3 class="card-title">Raw data (id: 0, len: {{ dataset?.length }})</h3>
      <div class="table-wrapper h-80 overflow-y-scroll">
        <table class="text-center">
          <colgroup>
            <col class="w-8" />
            <col class="w-40" />
            <col class="w-24" />
            <col class="w-24" />
            <col class="w-24" />
            <col class="w-16" />
          </colgroup>
          <thead class="sticky top-0 bg-slate-100 border-b border-gray-400">
            <tr>
              <th>#</th>
              <th class="p-0.5">Time</th>
              <th class="p-0.5">Latitude</th>
              <th class="p-0.5">Longitude</th>
              <th class="p-0.5">Direction (degree)</th>
              <th class="p-0.5">Speed (m/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data, index in dataset?.data || []" :key="index">
              <th class="border-b border-gray-300">{{ index + 1 }}</th>
              <td class="p-0.5">
                <input class="table-input" :value="new Date(data.time).toLocaleString()" readonly />
              </td>
              <td class="p-0.5">
                <input class="table-input" v-model="data.lat"
                  type="number" step="0.001" min="-180" max="180" />
              </td>
              <td class="p-0.5">
                <input class="table-input" v-model="data.lon"
                  type="number" step="0.001" min="-180" max="180" />
              </td>
              <td class="p-0.5">
                <input class="table-input" v-model="data.dir"
                  type="number" min="0" max="359"  />
              </td>
              <td class="p-0.5">
                <input class="table-input" v-model="data.spd"
                  type="number" step="0.001" min="0" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Graph</h3>
      <!-- <wind-plot v-bind="{ dataset }" /> -->
    </div>

    <div class="card flex flex-col self-start">
      <h3 class="card-title mt-2">Frequency by wind speed</h3>
      <wind-by-spd :dataset="dataset?.data || []" />
    </div>

    <div class="card flex flex-col self-start">
      <h3 class="card-title">Frequency by wind direction</h3>
      <wind-by-dir :dataset="dataset?.data || []" />
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

.table-wrapper::-webkit-scrollbar {
  @apply w-2.5;
}

.table-wrapper::-webkit-scrollbar-track {
  @apply rounded-full bg-transparent hover:bg-gray-300/50;
}

.table-wrapper::-webkit-scrollbar-thumb {
  @apply bg-violet-300 rounded-full hover:bg-violet-400;
}

.table-input {
  @apply w-full py-1 bg-violet-200 text-center focus:bg-cyan-100 focus:outline-indigo-300;
}

input[type=number]::-webkit-inner-spin-button {
  @apply hidden;
}
</style>
