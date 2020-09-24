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
    // route level code-splitting
    // this generates a separate chunk (contas.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contas" */ '../views/Contas.vue')
  },
  {
    path: '/relatorios',
    name: 'Relatorios',
    // route level code-splitting
    // this generates a separate chunk (relatorios.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "relatorios" */ '../views/Relatorios.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    // route level code-splitting
    // this generates a separate chunk (usuarios.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "usuarios" */ '../views/Usuarios.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
