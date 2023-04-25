import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const requireAuth = async (to, from, next) => {
  console.log(useAuthStore().loggedIn)
  if (useAuthStore().loggedIn == false) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const checkSession = async (to, from, next) => {
  console.log(useAuthStore().loggedIn)
  if(useAuthStore().loggedIn == true) {
    next({ name: 'home' })
  } else {
    next()
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    beforeEnter: requireAuth,
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    beforeEnter: requireAuth,
    component: () => import ('../views/SettingsPage.vue')
  },
  {
    path: '/request-quote',
    name: 'quote',
    beforeEnter: requireAuth,
    component: () => import ('../views/RequestQuote.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import ('../views/ProfilePage.vue')
  },
  {
    path: '/checkout/:id',
    name: 'checkout',
    component: () => import ('../views/account/CheckoutPage.vue')
  },
  {
    path: '/profile/type/service-provider',
    name: 'provider-type',
    component: () => import ('../views/account/ServiceProviderType.vue')
  },
  {
    path: '/report/select-address',
    name: 'make-report',
    component: () => import ('../views/reporting/CrimeReport.vue')
  },
  {
    path: '/report/make/:id',
    name: 'provider-create',
    component: () => import ('../views/reporting/MakeReport.vue')
  },
  {
    path: '/user/profile',
    name: 'profile-user',
    component: () => import ('../views/reporting/UserProfile.vue')
  },
  {
    path: '/profile/create/customer-account/:id',
    name: 'profile-create',
    component: () => import ('../views/account/create/CustomerAcc.vue')
  },
  {
    path: '/folder/:id',
    beforeEnter: requireAuth,
    name: 'other',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: checkSession,
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    beforeEnter: checkSession,
    component: () => import ('../views/RegisterPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
