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
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/registro',
    name: 'Registro',

    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  }

  ,
  {
    path: '/ofertas',
    name: 'Ofertas',

    component: () => import(/* webpackChunkName: "about" */ '../views/Ofertas.vue')
  }

  ,
  {
    path: '/tabla',
    name: 'Tabla',

    component: () => import(/* webpackChunkName: "about" */ '../views/Tabla.vue')
  }

  ,
  {
    path: '/carrusel',
    name: 'Carrusel',

    component: () => import(/* webpackChunkName: "about" */ '../views/Carrusel.vue')
  },

  {
    path: '/inicio',
    name: 'Inicio',

    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },

  {
    path: '/tipoinmueble',
    name: 'TipoInmueble',

    component: () => import(/* webpackChunkName: "about" */ '../views/TipoInmueble.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
