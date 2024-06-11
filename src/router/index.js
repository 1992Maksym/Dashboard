import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/Dashboard.vue";
import Customers from "@/views/Customers.vue";
import Help from "@/views/Help.vue";
import Income from "@/views/Income.vue";
import Product from "@/views/Product.vue";
import Promote from "@/views/Promote.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/income',
      name: 'income',
      component: Income
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/promote',
      name: 'promote',
      component: Promote
    },
  ],
})

export default router
