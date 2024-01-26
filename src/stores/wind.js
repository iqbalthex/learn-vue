import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import useApi from '@/composables/useApi'

export default defineStore('wind', () => {
  const datasets = reactive([]) /* = [
    {
      id: 'wind-0',
      data:[
        { time, lat, lon, dir, spd }, ...
      ]
    }, ...
  ] */

  const ranges = reactive({
    datetime: [ '2023-06-01', '2023-06-03' ], // min 2021-09-03, max 2023-08-19
    lat: [ -6, -8 ],   // min   89, max -89
    lon: [ 112, 114 ], // min -179, max 179
  })

  return {
    datasets,
    fetch: fetchWind,
  }


  async function fetchWind() {
    let endpoint = '/api/v1/datasets/winds?'

    for (const param in ranges) {
      endpoint += `${param}=${ranges[param][0]}_${ranges[param][1]}&`
    }

    const { data, error } = await useApi.get(endpoint)

    if (error.value) {
      console.log(35, error.value)
      return
    }

    datasets.push({
      id: `wind-${datasets.length}`,
      name: null,
      data: data.value.datasets,
    })
  }
})
