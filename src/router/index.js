import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
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
      component: () => import('../views/Users/UsersView.vue'),
      meta: { requiresAuth: true } 
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: () => import('../views/Users/AddUserView.vue'),
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
      path: '/listOrders',
      name: 'listOrders',
      component: () => import('../views/OrderPurchases/ListOrders.vue'),
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
      path: '/OrderComponent',
      name: 'OrderComponent',
      component: () => import('../views/ApproveRequest/Ordenes/PreviewOrder.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/approveRequest',
      name: 'approveRequest',
      component: () => import('../views/ApproveRequest/ApproveRequest.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/signature',
      name: 'signature',
      component: () => import('../views/signature/signatureView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/signatureForm',
      name: 'signatureForm',
      component: () => import('../components/SignatureForm.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/tutorialsView',
      name: 'tutorialsView',
      component: () => import('../views/Tutorials/TutorialsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/campoView',
      name: 'campoView',
      component: () => import('../views/Campo/CampoView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path:'/savePointView',
      name:'savePointView',
      component:() => import ('../views/Campo/SavePointView.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/listParcelas',
      name:'listParcelas',
      component:() => import ('../views/Campo/ListParcelas.vue'),
      meta:{requiresAuth:true}
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
