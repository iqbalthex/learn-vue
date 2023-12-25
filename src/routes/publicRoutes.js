export default [
  {
    path: '/tes',
    component: () => import('@/pages/TesPage.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/pages/AdminPage.vue'),
  },
  {
    path: '/wind',
    component: () => import('@/pages/WindToRosePage.vue'),
  },
]
