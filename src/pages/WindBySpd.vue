<script setup>
const props = defineProps({
  data: { type: Array, required: true },
})

import { computed } from 'vue'

const dataBySpd = computed(() => {
  const defaultObj = {
    count: {
      '0.01 - 0.10': 0,
      '0.11 - 0.20': 0,
      '0.21 - 0.30': 0,
      '0.31 - 0.40': 0,
      '0.41 - 0.50': 0,
    },
    avg: {
      '0.01 - 0.10': 0,
      '0.11 - 0.20': 0,
      '0.21 - 0.30': 0,
      '0.31 - 0.40': 0,
      '0.41 - 0.50': 0,
    },
  }

  return props.data.reduce(groupBySpd, defaultObj)
})

function groupBySpd(obj, val) {
  const spd = checkSpd(val)

  if (spd) {
    obj.count[spd]++

    const avg = obj.count[spd] / props.data.length * 100
    obj.avg[spd] = `${avg.toFixed(1)} %`
  }

  return obj
}

function checkSpd({ spd }) {
  if (0.01 < spd && spd <= 0.10) return "0.01 - 0.10"
  if (0.11 < spd && spd <= 0.20) return "0.11 - 0.20"
  if (0.21 < spd && spd <= 0.30) return "0.21 - 0.30"
  if (0.31 < spd && spd <= 0.40) return "0.31 - 0.40"
  if (0.41 < spd && spd <= 0.50) return "0.41 - 0.50"
}
</script>

<template>
  <table class="text-center">
    <colgroup>
      <col class="w-32" />
      <col v-for="i in Array.from({ length: 5 })" class="w-20" />
    </colgroup>
    <thead class="border-b border-gray-400">
      <tr>
        <th>Speed (m/s)</th>
        <th>0.01 - 0.10</th>
        <th>0.11 - 0.20</th>
        <th>0.21 - 0.30</th>
        <th>0.31 - 0.40</th>
        <th>0.41 - 0.50</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="border-b border-gray-300">Frequency</th>
        <td class="cell">{{ dataBySpd.count['0.01 - 0.10'] }}</td>
        <td class="cell">{{ dataBySpd.count['0.11 - 0.20'] }}</td>
        <td class="cell">{{ dataBySpd.count['0.21 - 0.30'] }}</td>
        <td class="cell">{{ dataBySpd.count['0.31 - 0.40'] }}</td>
        <td class="cell">{{ dataBySpd.count['0.41 - 0.50'] }}</td>
      </tr>
      <tr>
        <th class="border-b border-gray-300">Relative</th>
        <td class="cell">{{ dataBySpd.avg['0.01 - 0.10'] }}</td>
        <td class="cell">{{ dataBySpd.avg['0.11 - 0.20'] }}</td>
        <td class="cell">{{ dataBySpd.avg['0.21 - 0.30'] }}</td>
        <td class="cell">{{ dataBySpd.avg['0.31 - 0.40'] }}</td>
        <td class="cell">{{ dataBySpd.avg['0.41 - 0.50'] }}</td>
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
</style>
