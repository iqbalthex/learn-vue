import { createRouter, createWebHashHistory } from 'vue-router'
import publicRoutes from './publicRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ ...publicRoutes ],
})

export default router
