import { createRouter, createWebHistory } from 'vue-router'
import CampingView from '@/views/CampingView.vue'
import HomeView from '@/views/HomeView.vue'
import FishingView from '@/views/FishingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/camping',
    name: 'camping',
    component: CampingView
  },
  {
    path: '/fishing',
    name: 'Cat Rough Fishing',
    component: FishingView
  },
  {
    path: '/contact',
    name: 'contactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
