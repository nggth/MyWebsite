
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'MenuBar', component: () => import('components/MenuBar.vue') },
      { path: 'PageIndex', component: () => import('pages/Index.vue') },
      { path: 'GridImg', component: () => import('components/GridImg.vue') },
    ]
  },
  {
    path: '/map',
    component: () => import('pages/Map.vue'),
    children: [
      { path: 'PageIndex', component: () => import('pages/Index.vue') },
      { path: 'MapComponent', component: () => import('components/MapComponent.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
