import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/home-view.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/product-list.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter(to, from, next) {
        if (store.state.user) return next('/')
        return next()
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(to, from, next) {
        if (store.state.user) return next('/')
        return next()
      },
    },
    {
      path: '/products/:id',
      name: 'Detail',
      component: () => import('../views/product-detail.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/cart-view.vue'),
    },
  ],
})

export default router
