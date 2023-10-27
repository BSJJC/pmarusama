import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  /**
   * Don't use the `createWebHashHistory` mode, otherwise, when you want to scroll to a specific section using the Header's navigation, the page will be redirected.
   */
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/layout-index.vue'),
      children: [
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
        {
          name: 'date',
          path: '/information/date',
          component: () => import('@/views/information/AllInformations/allinformation-index.vue'),
        },
      ],
    },
  ],
});

export default router;
