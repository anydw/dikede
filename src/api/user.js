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
 * @param {*} randernum 验证码
 * @returns
 */
export const yzmApi = (randernum) => {
  return request({
    url: `/user-service/user/imageCode/${randernum}`,
    responseType: 'arraybuffer'
  })
}
