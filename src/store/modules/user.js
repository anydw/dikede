import { login, yzmApi } from '@/api/user'
export default {
  namespaced: true,
  state: {
    token: null,
    code: '',
    yanZhenMa: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    getcode(state, code) {
      state.code = code
    },
    setyanZhenMa(state, yanZhenMa) {
      state.yanZhenMa = yanZhenMa
    }
  },
  actions: {
    async login({ commit }, data) {
      const res = await login(data)
      console.log(res)
      // 提交保存token
      commit('setToken', res.data.token)
    },
    // 获取图形验证码
    async getyanZhenMa({ commit }, payload) {
      const len = 32
      const chars = 'ABCDEFGHIJKLMNOPQRSTWXYZabcdefhijkmnprstwxyz2345678'
      const maxPos = chars.length
      let character = ''
      for (let i = 0; i < len; i++) {
        character += chars.charAt(Math.floor(Math.random() * maxPos))
      }
      commit('getcode', character)
      const res = await yzmApi(character)
      console.log(res)
      if (res.status === 200) {
        const imgurl = 'data:image/png;base64,' + btoa(
          new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
        commit('setyanZhenMa', imgurl)
      }
    }
  }
}

