<script setup>
const props = defineProps({
  dataset: { type: Array, required: true },
})

import { computed, /* onMounted */ } from 'vue'
//import Plotly from 'plotly.js-strict-dist-min'
import useWindStore          from '@/stores/wind'
import useWindSpeedStore     from '@/stores/windSpeed'
import useWindDirectionStore from '@/stores/windDirection'

const winds         = useWindStore()
const windSpeed     = useWindSpeedStore()
const windDirection = useWindDirectionStore()

const plotData = computed(() => {
  const spdCount = windSpeed.ranges.length
  const dirCount = windDirection.directions.length

  // [ [ 0, ..., dirCount ], ..., spdCount ]
  const dataPlaceholder = windSpeed.ranges.reduce((obj, range) => {
    const key = `${range.bottom}-${range.top}`

    // ['0.1-0.2']: [ 0, ..., dirCount ]
    obj[key]  = Array.from({ length: dirCount }, () => 0)

    return obj
  }, {})

  let totalSpeed = 0

  // props.dataset.forEach(dset => {
  const tesData = []

  for (let i = 0; i < 100; i++) {
    tesData.push({
      dir: Math.random() * 360,
      spd: parseFloat((Math.random() * .4 + .1).toFixed(3)),
    })
  }

  tesData.forEach(dset => {
    const i = scanSpd(dset)
    const j = scanDir(dset)

    if (dataPlaceholder[i]?.hasOwnProperty(j)) {
      dataPlaceholder[i][j] += dset.spd
      totalSpeed += dset.spd
    }
  })

  const dataAverages = []

  for (const key in dataPlaceholder) {
    const total = dataPlaceholder[key]
      .reduce((total, value) => (total += value))

    dataAverages[key] =  total / totalSpeed
  }

  return {
    data: dataPlaceholder,
    totalData: totalSpeed,
    dataAverages,
  }
})

// onMounted(() => {
//   Plotly.newPlot("plot", [])
// })


function scanSpd({ spd }) {
  const spdRange = windSpeed.ranges

  for (let i = 0; i < spdRange.length; i++) {
    if (spd > spdRange[i].bottom && spd <= spdRange[i].top) {
      return `${spdRange[i].bottom}-${spdRange[i].top}`
    }
  }
}

function scanDir({ dir }) {
  const dirRange = windDirection.directions

  for (let i = 0; i < dirRange.length; i++) {
    if (dir > dirRange[i].bottom && dir <= dirRange[i].top) {
      return i
    }
  }
}
</script>

<template>
  <div id="plot">
    
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
  @apply w-full py-1 bg-violet-200 text-center focus:bg-cyan-100 focus:outline-indigo-300;
}
</style>
