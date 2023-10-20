import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/home/home-index.vue'),
    },
    {
      name: 'information',
      path: '/information',
      component: () => import('@/views/information/information-index.vue'),
    },
  ],
});

export default router;
