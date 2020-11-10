import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dummy from '../views/Dummy'

import auth from './middleware/auth'
import cookie from 'vue-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [
        auth
      ]
    }
  },
  {
    path: '/dummy',
    name: 'Dummy',
    component: Dummy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    cookie
  }

  return middleware[0]({
    ...context
  })
})

export default router
