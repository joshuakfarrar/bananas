import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import EnterBirthday from '@/components/Birthday'
import FoodsToAvoid from '@/components/Avoid'
import { requireAuth, pushToBirthdayEntryIfLoggedIn } from '../auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      beforeEnter: pushToBirthdayEntryIfLoggedIn,
      component: Login
    },
    {
      path: '/birthday',
      name: 'Birthday',
      beforeEnter: requireAuth,
      component: EnterBirthday
    },
    {
      path: '/avoid',
      name: 'Avoid',
      beforeEnter: requireAuth,
      component: FoodsToAvoid
    }
  ]
})
