import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  //   You cannot use the `createWebHashHistory` mode, otherwise, when you want to scroll to a specific section using the header's navigation, the page will be redirected.
  history: createWebHistory(),
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
