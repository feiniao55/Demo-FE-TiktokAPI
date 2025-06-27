import { createRouter, createWebHistory } from 'vue-router';

import Callback from './components/Callback.vue';
import TwitterCallback from './components/TwitterCallback.vue';

const routes = [ 
  {
    path: '/api/auth/callback',
    name: 'Callback',
    component: Callback,
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