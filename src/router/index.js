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
        path: '/taskbusiness',
        component: () => import('@/views/taskbusiness')
      },
      {
        path: '/taskoperation',
        component: () => import('@/views/taskoperation')
      },
      {
        path: '/noderegion',
        component: () => import('@/views/noderegion')
      },
      {
        path: '/nodenode',
        component: () => import('@/views/nodenode')
      },
      {
        path: '/nodepartner',
        component: () => import('@/views/nodepartner')
      },
      {
        path: '/vmindex',
        component: () => import('@/views/vmindex')
      },
      {
        path: '/vmstatus',
        component: () => import('@/views/vmstatus')
      },
      {
        path: '/vmtype',
        component: () => import('@/views/vmtype')
      },
      {
        path: '/userindex',
        component: () => import('@/views/userindex')
      },
      {
        path: '/useruser-task-stats',
        component: () => import('@/views/useruser-task-stats')
      },
      {
        path: '/user-work',
        component: () => import('@/views/user-work')
      },
      {
        path: '/sku-class',
        component: () => import('@/views/sku-class')
      },
      {
        path: '/sku-sku',
        component: () => import('@/views/sku-sku')
      },
      {
        path: '/policyindex',
        component: () => import('@/views/policyindex')
      },
      {
        path: '/orderindex',
        component: () => import('@/views/orderindex')
      },
      {
        path: '/reportindex',
        component: () => import('@/views/reportindex')
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
