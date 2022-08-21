import { login, getUserInfo } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken(),
    hrsaasTime: '',
    userInfo: {},
    userId: ''
  },
  mutations: {
    // 获取token
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = JSON.parse(JSON.stringify(userInfo))
    },
    // 移除token
    removeToken(state) {
      state.token = null
      removeToken()
    },
    // 清空用户信息
    removeUserInfo(state) {
      state.userInfo = {}
    },
    // 存储时间戳
    sethrsaasTime(state, time) {
      state.hrsaasTime = time
    },
    // 保存userId
    setUserId(state, userId) {
      state.userId = userId
    }

  },
  actions: {
    // 登录
    async login({ commit }, data) {
      const res = await login(data)
      // 获取登录的时间戳
      commit('sethrsaasTime', +new Date())
      // 提交保存token
      commit('setToken', res.data.token)
      commit('setUserId', res.data.userId)
      console.log(res, 111)
      console.log(res.data.userId)
    },
    // 获取用户信息
    async getUserInfo({ commit, state }) {
      const res = await getUserInfo(state.userId)
      commit('setUserInfo', res)
      console.log(res)
    },

    // 登出页面
    logout({ commit }) {
      commit('removeToken')
      commit('removeUserInfo')
    }

  }
}

