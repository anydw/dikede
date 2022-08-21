import router from './router'
import store from './store'

// 定义白名单
const whiteList = ['/login', '/404']
// 权限拦截
router.beforeEach(async(to, from, next) => {
  // 判断有没有token
  if (store.getters.token) {
    if (store.getters.userId) {
      await store.dispatch('user/getUserInfo')
    }
    if (to.path === '/login') {
      // 表示是登录页
      next('/') // 跳到主页
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
