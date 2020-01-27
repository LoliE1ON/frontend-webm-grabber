import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Webm from "../views/Webm";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/webm/:id/:boardId',
    name: 'webm',
    component: Webm
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
