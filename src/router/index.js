import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/Login.vue'
import signup from '../views/Signup.vue'
// import aa from '../views/aa.vue'
import home from '../views/home.vue'
import admin from '../views/admin.vue'
import Proflie from '../views/Proflie.vue'
import profile from '../views/profile.vue'
import checkAc from '../views/checkAc.vue'
import nn from '../views/admin_check.vue'
import mm from '../views/admin_ch.vue'
import aa from '../views/api_t.vue'
import addCoin from '../components/addCoin.vue'
import coinHis from '../components/coinHis.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  // {
  //   path: '/aa',
  //   name: 'aa',
  //   component: aa
  // },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/coinHis',
    name: 'coinHis',
    component: coinHis
  },
  {
    path: '/checkAc',
    name: 'checkAc',
    component: checkAc
  },
  {
    path: '/addCoin',
    name: 'addCoin',
    component: addCoin
  },
  {
    path: '/Proflie/:ID_student',
    name: 'Proflie',
    component: Proflie
  },
  {
    path: '/profile/:ID_student',
    name: 'profile',
    component: profile
  },
  {
    path: '/api_t',
    name: 'api_t',
    component: aa
  },
  {
    path: '/admin_ch',
    name: 'admin_ch',
    component: mm
  },
  {
    path: '/admin_check',
    name: 'admin_check',
    component: nn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
