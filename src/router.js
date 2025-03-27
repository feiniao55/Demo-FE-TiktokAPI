import { createRouter, createWebHistory } from 'vue-router';

const routes = [ 
  {
    path: '/api/auth/callback',
    name: 'Callback',
    component: () => import('./pages/Callback.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;