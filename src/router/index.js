import Vue from "vue";
import Router from "vue-router";
// import app from '../app'
import Detail from '../views/detail.vue'
// import Project from '../views/Project.vue'
// import Team from '../views/Team.vue'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   name: 'app',
  //   component: app
  // },
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
