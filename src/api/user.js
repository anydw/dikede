import request from '@/utils/request'

/**
 *
 * @param {*} data 登录
 * @returns
 */
export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data
  })
}

/**
 *
 * @param {*} randernum 图片验证码
 * @returns
 */
export function yzmApi(randernum) {
  return request({
    url: `/user-service/user/imageCode/${randernum}`,
    responseType: 'blob'
  })
}

/**
 *
 * @param {*} id 用户基本信息
 * @returns
 */
export function getUserInfo(id) {
  return request({
    url: `/user-service/user/${id}`
  })
}
