import { reactive } from 'vue'
import { defineStore } from 'pinia'
import windDirectionsJson from '@/static_data/wind_directions.json'

export default defineStore('windDirection', () => {
  const ranges = reactive(windDirectionsJson)

  return {
    ranges,
  }
})
