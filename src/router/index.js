import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/chisiamo',
    name: 'chisiamo',
    component: () => import('../views/ChiSiamo.vue')
  },
  {
    path: '/servizi',
    name: 'Servizi',
    component: () => import('../views/Servizi.vue')
  },
  {
    path: '/aree',
    name: 'aree',
    component: () => import('../views/Aree.vue')
  },
  {
    path: '/eventi',
    name: 'Eventi',
    component: () => import('../views/Eventi.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

 
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;

    }

    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 }
  },
})

export default router
