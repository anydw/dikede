import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

const TimeOut = 3600
function isCheckTimeOut() {
  return (+new Date() - store.getters.hrsaasTime) / 1000 > TimeOut
}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// request interceptor
// 请求拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    if (isCheckTimeOut()) {
      store.dispatch('user/logout')
      router.push('/login')
      Message.error('接口超时')
      return Promise.reject(new Error('接口超时'))
    }
    config.headers['Authorization'] = store.getters.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  // const { success, message, data } = response
  // if (success) {
  // } else {
  // Message.error(message)
  // return Promise.reject(new Error(message))
  // }
  return response
}, (err) => {
  return Promise.reject(err)
})

export default service
