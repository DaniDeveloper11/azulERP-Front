import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Users/Login.vue'
import HomeView from '../views/HomeView.vue'
import Settings from '@/views/SettingsView.vue'

// Función para verificar si el usuario está autenticado
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
      path: '/solicitarRequisicion',
      name: 'solicitarRequisicion',
      component: () => import('../views/Requisiones/SolicitarRequisicion.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/listaRequisiciones',
      name: 'listaRequisiciones',
      component: () => import('../views/Requisiones/ListaRequisiciones.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/Reports/Reports.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/makeBuyOrder',
      name: 'makeBuyOrder',
      component: () => import('../views/BuyOrder/MakeBuyOrder.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/supplier',
      name: 'supplier',
      component: () => import('../views/Proovedores/Supplier.vue'),
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
