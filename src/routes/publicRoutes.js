const importPage = name => () => import(`@/pages/${name}.vue`)

export default [
  {
    path: '/tes',
    component: importPage('TesPage'),
  },
  {
    path: '/admin',
    component: importPage('AdminPage'),
  },
  {
    path: '/wind',
    component: importPage('WindToRosePage'),
    children: [
      {
        path: ':datasetId?',
        component: importPage('Wind'),
      },
    ],
  },
]
