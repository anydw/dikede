<template>
  <div id="mains" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BarGraphDisplay',
  mounted() {
    this.newEscharte()
  },
  methods: {
    newEscharte() {
      const myChart = echarts.init(document.getElementById('mains'))

      const option = {
        // 标题
        title: {
          text: '销售额分布',
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
            type: 'bar',
            barWidth: 15
          }
        ],
        xAxis: {
          type: 'category',
          data: ['星期一', '星期二', '星期三']
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
  #mains{
    width: 412px;
    height: 278px;
  }
</style>
