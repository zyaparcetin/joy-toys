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
      component: () => import('../components/product-list.vue'),
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

    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about-view.vue'),
    },*/
  ],
})

export default router

//my project but doesn't work
/* eslint-disable no-undef */
//import Vue from 'vue'
//import VueRouter from 'vue-router'
// import Homepage from '../views/homepage.vue'  (projene göre eklemeler yap)
//import Login from '../views/login.vue'
//import Register from '../views/register.vue'

//Vue.use(VueRouter)

// Asagidaki kodu projene göre düzenle
/*export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [*/
/*{
        path: '/',
        name: 'Homepage',
        component: Homepage,
      },*/

/*{ path: '/products/:id', name: 'ProductDetail', component: () => import('../views/product-detail.vue') },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        },
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/profile')
          return next()
        },
      },
    ],
  })
}*/
