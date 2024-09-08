import { createRouter, createWebHistory } from 'vue-router'; // Importar createRouter y createWebHistory

import AnimalManagement from '@/view/AnimalManagement.vue'; // Asegúrate de que el nombre del archivo sea correcto

const routes = [
  {
    path: '/',
    name: 'AnimalManagement',
    component: AnimalManagement,
  },
  // Agrega otras rutas aquí
];

const router = createRouter({
  history: createWebHistory(), // Usar createWebHistory para la historia
  routes,
});

export default router;