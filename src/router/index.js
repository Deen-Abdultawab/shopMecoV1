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
  {
    path: '/idashboard/:userId',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/individual/Dashboard.vue'),
    props: true
  },
  {
    path: '/idashboard/detail/:serviceId',
    name: 'serviceDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/ServiceDetails.vue'),
    props: true
  },
  {
    path: '/services',
    name: 'serviceDash',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/individual/ServiceDash.vue')
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/individual/BookingDash.vue')
  },
  {
    path: '/serviceProfile/:serviceId',
    name: 'serviceProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/individual/ServiceProfile.vue'),
    props: true
  },
  {
    path: '/userSettings/:userId',
    name: 'userSettings',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboards/individual/SettingsDash.vue'),
    props: true
  },
  {
    path: '/messages/:userId',
    name: 'messagesDash',
    component: () => import(/* webpackChunkName: "about" */ '../components/dashboards/individual_dash/MessagesDash.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
