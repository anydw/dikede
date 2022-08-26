<template>
  <div id="main" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  mounted() {
    this.newEcharte()
  },
  methods: {
    newEcharte() {
      const myChart = echarts.init(document.getElementById('main'))

      const option = {
        // 标题
        title: {
          text: '销售额趋势图',
          left: 'center',
          textStyle: {
            fontSize: 15,
            fontWeight: 'bold'
          }
        },
        // 自定义tooltip内容
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            var res = `销售额:${params[0].value}` + '<br/>' + params[0].name
            return res
            // console.log(params)
          }
        },
        series: [
          {
            data: [1000, 2000, 3000, 4000, 5000],
            type: 'line'
          }
        ],
        xAxis: {
          type: 'category',
          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
          // 默认两侧显示空白
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          name: '单位：元'
        }

      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
  #main{
    width: 412px;
    height: 278px;
  }
</style>
