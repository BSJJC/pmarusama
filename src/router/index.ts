import { createRouter, createWebHistory } from 'vue-router';

let date = '';

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
          component: () => import('../views/information/information-index.vue'),
        },
        {
          name: 'date',
          path: '/information/:date',
          beforeEnter: (to) => {
            let str = to.params.date as string;

            str = str.split(/(?=\d{3}$)/).join('-');
            date = str;
          },
          component: () => import(`../views/information/AllInformations/${date}.vue`),
        },
      ],
    },
  ],
});

export default router;
