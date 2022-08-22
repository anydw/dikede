import request from '@/utils/request'

/**
 *
 * @returns 获取工单信息 pormise
 */
export function getTaskOrder() {
  return request({
    url: '/task-service/task/search'
  })
}
