import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/page/Index'
import News from '@/components/page/news'
import aboutUs from '@/components/page/aboutUs'
import contactUs from '@/components/page/contactUs'
import statement from '@/components/page/statement'
import newsInfo from '@/components/page/newsInfo'
import charter from '@/components/page/charter'
import Expert from '@/components/page/expert'
import expertInfo from '@/components/page/expertInfo'
import opus from '@/components/page/opus'
import Login from '@/components/page/Login'
import User from '@/components/page/user'
import Information from '@/components/page/Information'
import mediaFocus from '@/components/page/mediaFocus'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/Information',
      name: 'Information',
      component: Information,
      children: [
        {
          path: '',
          component: News
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'charter',
          component: charter
        },
        {
          path: 'mediaFocus',
          component: mediaFocus
        },
      ]
    },
    {
      path: '/newsInfo',
      name: 'newsInfo',
      component: newsInfo,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/expert',
      name: 'expert',
      component: Expert,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/expertInfo',
      name: 'expertInfo',
      component: expertInfo,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/opus',
      name: 'opus',
      component: opus
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/statement',
      name: 'statement',
      component: statement
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      meta: {
        keepAlive: true
      },
      component: User
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})


