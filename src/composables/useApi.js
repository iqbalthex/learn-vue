import { ref } from 'vue'

const API_URL = 'http://localhost:3000'

export default {
  async get(endpoint) {
    return await fetchApi('get', endpoint)
  },
  async post(endpoint, body) {
    return await fetchApi('post', endpoint, body)
  },
}


async function fetchApi(method = 'get', endpoint = '/', body) {
  const data  = ref(null)
  const error = ref(null)

  const headers = {
    'Content-Type': 'application/json',
  }

  if (localStorage.hasOwnProperty('_token')) {
    headers['Authorization'] = `Bearer ${localStorage.getItem("_token") || ''}`
  }

  if (method !== 'get') {
    body = JSON.stringify(body)
  }

  try {
    const res = await fetch(API_URL + endpoint, {
      headers,
      method,
      body,
    })

    if (! res.ok) throw await res.json()

    data.value = await res.json()

  } catch (err) {
    error.value = err
  }

  return { data, error }
}
