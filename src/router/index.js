import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Users/Login.vue'
import HomeView from '../views/HomeView.vue'
import Settings from '@/views/SettingsView.vue'

function isAuthenticated() {
  return !!localStorage.getItem('token'); 
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { requiresAuth: true } 
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: () => import('../views/AddUserView.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/requestPurchase',
      name: 'requestPurchase',
      component: () => import('../views/RequestPurchases/RequestPurchases.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/listRequest',
      name: 'listRequest',
      component: () => import('../views/RequestPurchases/ListRequest.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/Reports/Reports.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/departments',
      name: 'departments',
      component: () => import('../views/Departments/Departments.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/orderPurchase',
      name: 'orderPurchase',
      component: () => import('../views/OrderPurchases/OrderPurchases.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/proveedors',
      name: 'proveedors',
      component: () => import('../views/Proveedors/Proveedors.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/addproveedors',
      name: 'addproveedors',
      component: () => import('../views/Proveedors/AddProveedors.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/apruveRequest',
      name: 'apruveRequest',
      component: () => import('../views/ApruveRequest/ApruveRequest.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
