import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Products from '../views/ProductsView.vue';
import FacialCare from '../views/FacialCareView.vue';
import MakeupView from '../views/MakeupView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/facial-care',
    name: 'facial care',
    component: FacialCare,
  },
  {
    path: '/makeup',
    name: 'makeup',
    component: MakeupView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
