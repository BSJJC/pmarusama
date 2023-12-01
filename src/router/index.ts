import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  /**
   * Don't use the `createWebHashHistory` mode, otherwise, when you want to scroll to a specific section using the Header's navigation, the page will be redirected.
   */
  history: createWebHistory(),
  routes: [
    {
      name: '',
      path: '/',
      component: () => import('@/layout/main-layout/main-layout.vue'),
      children: [
        {
          name: 'home',
          path: '/',
          component: () => import('@/views/home/home-index.vue'),
        },
        {
          name: 'information',
          path: '/information',
          //   use information's layout here
          component: () => import('@/layout/information-layout/information-layout.vue'),
          children: [
            {
              name: 'information-list',
              path: '',
              component: () => import('@/views/information/information-list.vue'),
            },
            {
              name: 'specific-information',
              path: ':date',
              component: () => import('@/views/information/information-detail/information-detail-index.vue'),
            },
          ],
        },
      ],
    },
    {
      name: 'test',
      path: '/test',
      component: () => import('@/views/info-test.vue'),
    },
  ],
});

export default router;
