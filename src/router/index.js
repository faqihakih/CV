import Vue from "vue";
import Router from "vue-router";
import home from '../views/home.vue'
import Detail from '../views/detail.vue'
// import Project from '../views/Project.vue'
// import Team from '../views/Team.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  // {
  //   path: '/Team',
  //   name: 'Team',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  // }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
