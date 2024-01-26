import { reactive } from 'vue'
import { defineStore } from 'pinia'
import windSpeedsJson from '@/static_data/wind_speeds.json'

export default defineStore('windSpeed', () => {
  const ranges = reactive(windSpeedsJson)

  return {
    ranges,
    removeRange,
    addRange,
  }


  function removeRange(index) {
    ranges.splice(index, 1)
  }

  function addRange() {
    // add each difference of top and bottom ranges to result
    const totalDiffs = ranges.reduce((result, range) => {
      return result + (range.top - range.bottom)
    }, 0)

    const averageDiffs = totalDiffs / ranges.length

    const lastRange = ranges[ranges.length - 1]
    const top = parseFloat((lastRange.top + averageDiffs).toFixed(2))

    ranges.push({ bottom: lastRange.top, top })
  }
})
