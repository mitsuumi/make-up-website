import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Products from '../views/ProductsView.vue';
import Cosmetics from '../views/CosmeticsView.vue';
import MakeupView from '../views/MakeupView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import MembershipView from '../views/MembershipView.vue';
import OrderView from '../views/OrderView.vue';
import ProductItemsView from '../views/ProductItemsView.vue';

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
    path: '/product/:id',
    name: 'product',
    component: ProductItemsView,
  },
  {
    path: '/cosmetics',
    name: 'cosmetics',
    component: Cosmetics,
  },
  {
    path: '/makeup',
    name: 'makeup',
    component: MakeupView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/membership',
    name: 'membership',
    component: MembershipView,
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
