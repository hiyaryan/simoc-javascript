import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Wiki from '../views/Wiki'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: Wiki
  }
]

const router = new VueRouter({
  routes: [
    // using redirect route to show syntax
    { path: '/wikipedia', redirect: '/wiki'}
  ]
})

export default router
