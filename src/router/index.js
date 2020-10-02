import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contas',
    name: 'Contas',
    component: () => import('../views/Bills.vue')
  },
  {
    path: '/relatorios',
    name: 'Relatorios',
    component: () => import('../views/Reports.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/Users.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
