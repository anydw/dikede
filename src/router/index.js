import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: () => import('@/layout/index'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home/index')
      },
      {
        path: '/task',
        component: () => import('@/views/task/business'),
        children: [
          {
            path: 'operation',
            component: () => import('@/views/task/operation')
          }
        ]
      }

    ]
  }

]
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
