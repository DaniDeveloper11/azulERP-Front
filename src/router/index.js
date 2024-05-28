import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Settings from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: () => import('../views/AddUserView.vue')
    },
  ]
})

export default router
