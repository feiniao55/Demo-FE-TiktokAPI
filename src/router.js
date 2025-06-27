import { createRouter, createWebHistory } from 'vue-router';
import TwitterCallback from './components/TwitterCallback.vue';

const routes = [ 
  {
    path: '/api/auth/callback',
    name: 'Callback',
    component: () => import('./pages/Callback.vue'),
  },
  {
    path: '/twitter/callback',
    name: 'TwitterCallback',
    component: TwitterCallback,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;