import request from '@/utils/request'

/**
 *
 * @param {*}  获取销售前几的商品
 * @returns pormise
 */
export function getGoodsTop({ topValue, start, end }) {
  return request({
    url: `/order-service/report/skuTop/${topValue}/${start}/${end}`,
    params: {
      topValue,
      start,
      end
    }
  })
}

/**
 *
 * @param {*} 获取销售额统计
 * @returns pormise
 */
export function getSale({ collectType, start, end }) {
  return request({
    url: `/order-service/report/amountCollect/${collectType}/${start}/${end}`,
    params: {
      collectType,
      start,
      end
    }
  })
}

/**
 * 获取工单统计汇总信息
 * @returns pormise
 */
export function getWorkOrder({ start, end }) {
  return request({
    url: `/task-service/task/taskReportInfo/${start}/${end}`,
    params: {
      start,
      end
    }
  })
}

