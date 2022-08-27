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
 * 获取销售订单数量统计
 * @returns pormise
 */
export function getOrderSize({ start, end }) {
  return request({
    url: '/order-service/report/orderCount',
    params: {
      start,
      end
    }
  })
}
/**
 * 获取销售额统计
 * @returns pormise
 */
export function getSale({ start, end }) {
  return request({
    url: '/order-service/report/orderAmount',
    params: {
      start,
      end
    }
  })
}

/**
 * 获取工单统计
 * @returns pormise
 */
export function getRepairOrder({ start, end }) {
  return request({
    url: `/task-service/task/taskReportInfo/${start}/${end}`,
    params: {
      start,
      end
    }
  })
}

/**
 *
 * @param {*}  获取销售额折线图数据统计
 * @returns pormise
 */
export function getLineChart({ collectType, start, end }) {
  return request({
    url: `/order-service/report/amountCollect/${collectType}/${start}/${end}`,
    params: {
      collectType,
      start,
      end
    }
  })
}

