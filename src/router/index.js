import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [


  {
    path: '/adminicio',
    name: 'AdmInicio',
    component: () => import('../views/AdmInicio.vue')
  },

  {
    path: '/admadministrador',
    name: 'AdmAdministrador',
    component: () => import('../views/AdmAdministrador.vue'),
    // meta: { requiresAuth: true},
    // children: [
    //   {
    //     path: 'admadministrador',
    //     name: 'AdmAdministrador',    
    //   }
    // ]
  },

  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../components/Usuarios.vue')
  },

  {
    path: '/perfiles',
    name: 'Perfiles',
    component: () => import('../components/Perfiles.vue')
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/footer',
    name: 'Footer',

    component: () => import(/* webpackChunkName: "about" */ '../views/Footer.vue')
  }
  ,
  {
    path: '/principal',
    name: 'Principal',

    component: () => import(/* webpackChunkName: "about" */ '../views/Principal.vue')
  }
  ,
  {
    path: '/servicios',
    name: 'Servicios',

    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
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
  },

  {
    path: '/listaaptos',
    name: 'ListaAptos',

    component: () => import(/* webpackChunkName: "about" */ '../views/ListaAptos.vue')
  }

  ,
  {
    path: '/listacasas',
    name: 'ListaCasas',

    component: () => import(/* webpackChunkName: "about" */ '../views/ListaCasas.vue')
  }

  ,
  {
    path: '/listalocales',
    name: 'ListaLocales',

    component: () => import(/* webpackChunkName: "about" */ '../views/ListaLocales.vue')
  }

  ,
  {
    path: '/listafincas',
    name: 'ListaFincas',

    component: () => import(/* webpackChunkName: "about" */ '../views/ListaFincas.vue')
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
  },


  {
    path: '/juridico',
    name: 'Juridico',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Juridico.vue')
  },
  {
    path: '/contable',
    name: 'Contable',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Contable.vue')
  },
  {
    path: '/administrativo',
    name: 'Administrativo',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrativo.vue')
  },





]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    let token = decode(localStorage.getItem('token'));
    if(!token) {
      next({
        name: 'AdmInicio',
      })
    } else {
      next();
    }
  }else{
    next()
  }
})

export default router
