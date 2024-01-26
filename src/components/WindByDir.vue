<script setup>
const props = defineProps({
  dataset: { type: Array, required: true },
})

import { computed } from 'vue'
import useWindDirection from '@/stores/windDirection'

const windDirections = useWindDirection()

const dataByDir = computed(() => {
  const defaultObj = { count: {}, avg: {} }

  windDirections.ranges.forEach(range => {
    defaultObj.count[`${range.bottom}-${range.top}`] = 0
    defaultObj.avg  [`${range.bottom}-${range.top}`] = 0
    console.log(defaultObj)
  })

  return props.dataset?.reduce(groupByDir, defaultObj)
})


function groupByDir(obj, val) {
  const dir = checkDir(val)

  // calculate only if pass the criteria
  if (dir) {
    obj.count[dir]++

    // count of specified criteria against total count of data
    const avg = obj.count[dir] / props.dataset.length * 100
    obj.avg[dir] = `${avg.toFixed(2)} %`
  }

  return obj
}

function checkDir({ dir }) {
  // check if speed value pass one of criteria (speedRanges)
  for (const range of windDirections.ranges) {
    if (dir > range.bottom && dir <= range.top) {
      return `${range.bottom}-${range.top}`
    }
  }
}
</script>

<template>
  <table class="text-center">
    <colgroup>
      <col class="w-24" />
      <col v-for="_, index in windDirections.ranges" :key="index" class="w-20" />
    </colgroup>
    <thead class="border-b border-gray-400">
      <tr>
        <th>Direction</th>
        <th v-for="range, index in windDirections.ranges" :key="index">
          {{ range.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="border-b border-gray-300">Frequency</th>
        <td v-for="range, index in windDirections.ranges" :key="index">
          {{ dataByDir?.count[`${range.bottom}-${range.top}`] }}
        </td>
      </tr>
      <tr>
        <th class="border-b border-gray-300">Relative</th>
        <td v-for="range, index in windDirections.ranges" :key="index">
          {{ dataByDir?.avg[`${range.bottom}-${range.top}`] }}
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
</style>
