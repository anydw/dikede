<template>
  <div id="main" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'DataRelationDisplay',
  props: {
    mouthList: {
      type: Object,
      default: () => ({})
    },
    weekList: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      mouthSeriesList: [],
      mouthXaxisList: []
    }
  },
  watch: {
    mouthList: {
      handler(news, olds) {
        // console.log(news, olds, 'nihao')
        this.mouthSeriesList = news.series
        this.mouthXaxisList = news.xAxis
      }
    },
    weekList: {
      handler(news, olds) {
        console.log(news, 1111)
      }
    },
    deep: true

  },
  mounted() {
    setTimeout(() => {
      this.newEcharte()
    }, 500)
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
            data: this.mouthSeriesList,
            type: 'line'
          }
        ],
        grid: {
          left: '18%',
          bottom: '10%'
        },
        xAxis: {
          type: 'category',
          data: this.mouthXaxisList,
          // 默认两侧显示空白
          boundaryGap: false,
          axisLabel: {
            interale: 0,
            formatter(value) {
              var mouth = new Date(value)
              return [`${mouth.getMonth() + 1}月${mouth.getDate()}日`]
            }
          }
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
