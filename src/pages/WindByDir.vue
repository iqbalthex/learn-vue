<script setup>
const props = defineProps({
  data: { type: Array, required: true },
})

import { computed } from 'vue'

const dataByDir = computed(() => {
  const defaultObj = {
    count: {
      N: 0, NE: 0, E: 0, SE: 0, S: 0, SW: 0, W: 0, NW: 0,
    },
    avg: {
      N: 0, NE: 0, E: 0, SE: 0, S: 0, SW: 0, W: 0, NW: 0,
    },
  }

  return props.data.reduce(groupByDir, defaultObj)
})

function groupByDir(obj, val) {
  const dir = checkDir(val)
  obj.count[dir]++

  const avg = obj.count[dir] / props.data.length * 100
  obj.avg[dir] = `${avg.toFixed(1)} %`

  return obj
}

function checkDir({ dir }) {
  if (  0 < dir && dir <=  45) return "N"
  if ( 45 < dir && dir <=  90) return "NE"
  if ( 90 < dir && dir <= 135) return "E"
  if (135 < dir && dir <= 180) return "SE"
  if (180 < dir && dir <= 225) return "S"
  if (225 < dir && dir <= 270) return "SW"
  if (270 < dir && dir <= 315) return "W"
  if (315 < dir && dir <= 360) return "NW"
}
</script>

<template>
  <table class="text-center">
    <colgroup>
      <col class="w-24" />
      <col v-for="i in Array.from({ length: 8 })" class="w-14" />
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
        <td class="cell">{{ dataByDir.count.N }}</td>
        <td class="cell">{{ dataByDir.count.NE }}</td>
        <td class="cell">{{ dataByDir.count.E }}</td>
        <td class="cell">{{ dataByDir.count.SE }}</td>
        <td class="cell">{{ dataByDir.count.S }}</td>
        <td class="cell">{{ dataByDir.count.SW }}</td>
        <td class="cell">{{ dataByDir.count.W }}</td>
        <td class="cell">{{ dataByDir.count.NW }}</td>
      </tr>
      <tr>
        <th class="border-b border-gray-300">Relative</th>
        <td class="cell">{{ dataByDir.avg.N }}</td>
        <td class="cell">{{ dataByDir.avg.NE }}</td>
        <td class="cell">{{ dataByDir.avg.E }}</td>
        <td class="cell">{{ dataByDir.avg.SE }}</td>
        <td class="cell">{{ dataByDir.avg.S }}</td>
        <td class="cell">{{ dataByDir.avg.SW }}</td>
        <td class="cell">{{ dataByDir.avg.W }}</td>
        <td class="cell">{{ dataByDir.avg.NW }}</td>
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
