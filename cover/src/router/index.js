import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import LoginViewVue from '../views/LoginView.vue'
const {cookies} = useCookies()
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginViewVue
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue'),
    beforeEnter() {
      if(!cookies.get('LegitUser')) {
        router.push({name: 'login'})
      }
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/product/:id',
    name: 'SingleProduct',
    component: () => import('../views/SingleProductView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
