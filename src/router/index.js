import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/page/Index'
import HelloWorld from '@/components/page/HelloWorld'
import Login from '@/components/page/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
