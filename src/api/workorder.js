import request from '@/utils/request'

/**
 *
 * @returns 获取工单信息/搜查
 * pormise
 */
export function getTaskOrder(data) {
  return request({
    url: '/task-service/task/search',
    params: {
      data
    }
  })
}

/**
 *
 * @returns 获取工单状态
 *  pormise
 */
export function getTaskStatus() {
  return request({
    url: '/task-service/task/allTaskStatus'
  })
}
