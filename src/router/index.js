import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/started',
    name: 'started',
    component: () => import(/* webpackChunkName: "about" */ '../views/Started.vue')
  },
  {
    path: '/individual',
    name: 'individual',
    component: () => import(/* webpackChunkName: "about" */ '../views/Individual.vue')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
