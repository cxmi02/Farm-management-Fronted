import { createRouter, createWebHistory } from 'vue-router';

import AnimalManagement from '@/view/AnimalView.vue';

const routes = [
  {
    path: '/',
    name: 'AnimalManagement',
    component: AnimalManagement,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;