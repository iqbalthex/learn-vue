<script setup>
const props = defineProps({
  dataset: { type: Array, required: true },
})

import { computed } from 'vue'
import useWindSpeed from '@/stores/windSpeed'

const windSpeeds = useWindSpeed()

const dataBySpeed = computed(() => {
  const defaultObj = { count: {}, avg: {} }

  windSpeeds.ranges.forEach(range => {
    defaultObj.count[`${range.bottom}-${range.top}`] = 0
    defaultObj.avg  [`${range.bottom}-${range.top}`] = 0
  })

  return props.dataset?.reduce(groupBySpeed, defaultObj)
})


function groupBySpeed(obj, val) {
  const spd = checkSpeed(val)

  // calculate only if pass the criteria
  if (spd) {
    obj.count[spd]++

    // count of specified criteria against total count of data
    const avg = obj.count[spd] / props.dataset.length * 100
    obj.avg[spd] = `${avg.toFixed(2)} %`
  }

  return obj
}

function checkSpeed({ spd }) {
  // check if speed value pass one of criteria (speedRanges)
  for (const range of windSpeeds.ranges) {
    if (spd > range.bottom && spd <= range.top) {
      return `${range.bottom}-${range.top}`
    }
  }
}
</script>

<template>
  <table class="text-center">
    <colgroup>
      <col class="w-28" />
      <col class="w-28" />
      <col class="w-24" />
      <col class="w-24" />
      <col class="w-8" />
    </colgroup>
    <thead class="border-b border-gray-400">
      <tr>
        <th>Batas bawah (m/s)</th>
        <th>Batas atas (m/s)</th>
        <th>Frekuensi</th>
        <th>Relatif</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="range, index in windSpeeds.ranges" :key="index"
        :class="{ invalid: range.bottom > range.top }">
        <td>
          <input class="table-input"
            type="number" min="0" step="0.01"
            v-model="range.bottom" />
        </td>
        <td>
          <input class="table-input"
            type="number" min="0" step="0.01"
            v-model="range.top" />
        </td>
        <td class="bg-violet-300/75 border-b border-r">
          <span>
            {{ dataBySpeed?.count[`${range.bottom}-${range.top}`] }}
          </span>
        </td>
        <td class="bg-violet-300/75 border-b">
          <span>
            {{ dataBySpeed?.avg[`${range.bottom}-${range.top}`] }}
          </span>
        </td>
        <td>
          <button class="px-2 py-1 bg-red-400 rounded-md font-medium"
            @click="windSpeeds.removeRange(index)">
            X
          </button>
        </td>
      </tr>

      <tr>
        <td class="opacity-40">
          <input class="table-input" disabled />
        </td>
        <td class="opacity-40">
          <input class="table-input" disabled />
        </td>
        <td class="bg-violet-300 border-b border-r opacity-40"></td>
        <td class="bg-violet-300 border-b opacity-40"></td>
        <td>
          <button class="px-2 py-1 bg-green-400 rounded-md font-medium" @click="windSpeeds.addRange">+</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
th:not(:last-child) {
  @apply border-r border-gray-300;
}

td.cell {
  @apply bg-violet-200 border border-gray-400;
}

.invalid .table-input {
  @apply bg-red-300;
}
</style>
