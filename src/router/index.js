import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: resolve => require(['@/views/Home.vue'], resolve),
      },
      {
        path: '/live',
        name: 'LiveCasino',
        component: () => import('../views/LiveCasino.vue')
      },
      {
        path: '/promotion',
        name: 'Promotion',
        component: () => import('../views/Promotion.vue')
      },
      {
        path: '/online',
        name: 'OnlineService',
        component: () => import('../views/OnlineService.vue')
      },
      {
        path: '/mobile',
        name: 'Mobile',
        component: () => import('../views/Mobile.vue')
      },
      {
        path: '/deposit',
        name: 'Deposit',
        component: () => import('../views/Deposit.vue')
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
