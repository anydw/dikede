<template>
  <div class="main_container_box">
    <div class="main_top">
      <div class="main_top_left">
        <!-- 左一 -->
        <div class="top_left">
          <div class="title">
            <h3>工单统计</h3>
            <span>{{ start }}~{{ end }}</span>
          </div>
          <div class="title_statistics">
            <div>
              <p>{{ totalList[0]+totalList[1] }}</p>
              <p class="title_text">工单总数（个）</p>
            </div>
            <div>
              <p>{{ completedTotalList[0]+completedTotalList[1] }}</p>
              <p class="title_text">完成工单（个）</p>
            </div>
            <div>
              <p>{{ progressTotalList[0]+progressTotalList[1] }}</p>
              <p class="title_text">进行工单（个）</p>
            </div>
            <div>
              <p>{{ cancelTotalList[0]+cancelTotalList[1] }}</p>
              <p class="title_text">取消工单（个）</p>
            </div>

          </div>
        </div>
        <div class="top_right">
          <div class="title">
            <h3>销售统计</h3>
            <span>{{ start }}~{{ end }}</span>
          </div>
          <div class="title_statistics">
            <div>
              <p>{{ orderQuantity }}</p>
              <p class="title_text">订单量（个）</p>
            </div>
            <div>
              <p>{{ orderSale }}</p>
              <p class="title_text">销售额（万元）</p>
            </div>
          </div>
        </div>
        <div class="main_right">
          <div class="title">
            <h3>商品热榜</h3>
            <span>{{ start }}~{{ end }}</span>
          </div>
          <div class="main_right-body">
            <div v-for="(item,index) in topList" :key="index" class="main_right-body-rank">
              <div class="rank-top1">{{ index+1 }}</div>
              <div class="rank-name">{{ item.skuName }}</div>
              <div class="rank-num">{{ item.count }}单</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_container_left">
        <div class="title">
          <h3>销售数据</h3>
          <span>{{ start }}~{{ end }}</span>
        </div>
        <div class="week_month_year">
          <span :class="{active:cur==1}" class="span_change" @click="changeStyleWeek">周</span>
          <span :class="{active:cur==2}" class="span_change" @click="changeStyleMouth">月</span>
          <span :class="{active:cur==3}" class="span_change" @click="changeStyleYear">年</span>
        </div>
        <div class="main_container_left_bottom">
          <!-- 左 -->
          <div class="echarts_left">
            <DataRelationDisplay
              v-if="mouthList !=''"
              :mouth-list="mouthList"
              :week-list="weekList"
            />
          </div>
          <!-- 右 -->
          <div class="echarts_right">
            <BarGraphDisplay />
          </div>
        </div>
      </div>
    </div>
    <div class="main_bottom">
      <div class="main_bottom_left">
        <div class="title">
          <h3>合作商点位数top5</h3>
        </div>
      </div>
      <div class="main_bottom_right">
        <div class="title">
          <h3>异常设备监控</h3>
          <i class="el-icon-circle-plus-outline" />
        </div>
        <div class="content">
          <img src="http://likede2-admin.itheima.net/img/empty.87c4f71b.png" alt="">
          <p>暂无数据</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BarGraphDisplay from './components/BarGraphDisplay'
import DataRelationDisplay from './components/DataRelationDisplay'
import dayjs from 'dayjs'
import { getGoodsTop, getOrderSize, getSale, getRepairOrder, getLineChart } from '@/api'
export default {
  name: 'Home',
  components: {
    DataRelationDisplay,
    BarGraphDisplay
  },
  data() {
    return {
      start: dayjs(this.chooseMonth).startOf('month').format('YYYY-MM-DD'), // 当月开始第一天
      end: dayjs(`${new Date()}`).format('YYYY-MM-DD'), // 当月实际天数
      topValue: 10, // 销售额前十榜单
      topList: [], // 商品榜单数据
      orderQuantity: '', // 订单数量
      orderSale: '', // 销售额
      totalList: [], // 工单总数
      completedTotalList: [], // 完成工单
      progressTotalList: [], // 进行工单
      cancelTotalList: [], // 取消工单
      cur: 1, // 样式初始值
      weekList: {}, // 周时间
      mouthList: {}, // 月时间
      // 获取前七天的函数
      fn() {
        var _date = new Date() // 获取今天日期
        _date.setDate(_date.getDate() - 6)// 日期回到7天前
        var year = _date.getFullYear()
        var month = _date.getMonth() + 1
        var day = _date.getDate()
        if (month < 10) {
          month = '0' + month
        }
        if (day < 10) {
          day = '0' + day
        }
        var dateTemp = year + '-' + month + '-' + day
        _date.setDate(_date.getDate() + 7)// 日期重置
        return dateTemp
      }
    }
  },
  created() {
    // console.log(this.fn())
    this.getGoodsTop()
    this.getOrderSize()
    this.getSale()
    this.getRepairOrder()
    this.getLineChart()
  },
  methods: {
    // 销售前几的数据-商品热榜
    async getGoodsTop() {
      const tse = {
        start: this.start,
        end: this.end,
        topValue: this.topValue
      }
      const res = await getGoodsTop(tse)
      // console.log(res)
      this.topList = res.data
    },
    // 销售订单数量统计
    async getOrderSize() {
      const start = dayjs(this.chooseMonth).startOf('month').format('YYYY-MM-DD HH:mm:ss')
      const end = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss')
      // console.log(start)
      const res = await getOrderSize({ start, end })
      // console.log(res.data)
      this.orderQuantity = res.data
    },
    // 销售额统计
    async getSale() {
      const start = dayjs(this.chooseMonth).startOf('month').format('YYYY-MM-DD HH:mm:ss')
      const end = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss')
      const res = await getSale({ start, end })
      // console.log(res)
      this.orderSale = (res.data / 1000000).toFixed(2)
    },
    // 工单统计
    async getRepairOrder() {
      const start = dayjs(this.chooseMonth).startOf('month').format('YYYY-MM-DD HH:mm:ss')
      const end = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss')
      const { data } = await getRepairOrder({ start, end })
      // console.log(data)
      this.totalList = data.map(val => val.total)
      this.completedTotalList = data.map(val => val.completedTotal)
      this.cancelTotalList = data.map(val => val.cancelTotal)
      this.progressTotalList = data.map(val => val.progressTotal)
      // console.log(this.totalList, 1111)
    },
    // 销售额折线图数据统计
    async getLineChart() {
      const tse = {
        start: this.start,
        end: this.end,
        collectType: 1
      }
      const res = await getLineChart(tse)
      this.mouthList = res.data
      // console.log(res.data, 111111)
    },
    async changeStyleWeek() {
      const tse = {
        start: this.fn(),
        end: this.end,
        collectType: 1
      }
      const res = await getLineChart(tse)
      console.log(res)
      this.weekList = res.data
      this.cur = 1
    },
    async changeStyleMouth() {
      this.cur = 2
      const tse = {
        start: this.start,
        end: this.end,
        collectType: 1
      }
      const res = await getLineChart(tse)
      this.mouthList = res.data
    },
    changeStyleYear() {
      this.cur = 3
    }
  }

}

</script>

<style lang="scss" scoped>
  .main_container_box{
    position: absolute;
    top: 60px;
    left: 165px;
    width:1183px;
    height: 560px;
    background-color: #eee;
    .main_top_left{
      display: flex;
      .top_left{
        width: 470px;
        height: 166px;
        background: #e9f3ff;
      background-image:url('~@/assets/common/zuoyi.png');
      background-repeat: no-repeat,no-repeat;
      background-position: 0 0,calc(100% - 12px) 100%;
        margin: 10px;
        border-radius: 15px;
        .title{
          display: flex;
          align-items: center;
          padding-left: 15px;
          h3{
            font-size: 16px;
            color: #333333;
          }
          span{
            padding-left: 10px;
            font-size: 12px;
            color: #999999
          };
        }
        .title_statistics{
            display: flex;
            justify-content: space-around;
          p{
            font: 400;
            text-align: center;
            color: #072074;
            font-size: 36px;
            margin: 0;
          }
          .title_text{
            font-size: 12px;
            color: #91a7dc;
            margin:5px 0 0;
          }
          }
      }
      .top_right{
        width: 380px;
        height: 166px;
        background: #fbefe8 url('~@/assets/common/sale.png') no-repeat calc(100% - 12px) 100%;
        margin: 10px;
        border-radius: 15px;
        .title{
          display: flex;
          align-items: center;
          padding-left: 15px;
          h3{
            font-size: 16px;
            color: #333333;
          }
          span{
            padding-left: 10px;
            font-size: 12px;
            color: #999999
          };
        }
        .title_statistics{
            display: flex;
            justify-content: space-around;
          p{
            text-align: center;
            color: #ff5757;
            font-size: 36px;
            margin: 0;
          }
          .title_text{
            font-size: 12px;
            color: #de9690;
            margin:5px 0 0;
          }
          }
      }
      .main_right{
        width: 294px;
        height: 538px;
        background-color: #fff;
        border-radius: 15px;
        margin: 10px;
        .title{
          display: flex;
          align-items: center;
          padding-left: 15px;
           h3{
            font-size: 16px;
            color: #333333;
          }
          span{
            padding-left: 10px;
            font-size: 12px;
            color: #999999
          };
        }
        .main_right-body{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .main_right-body-rank{
            display: flex;
            justify-content: space-between;
            height: 20px;
            font-size: 14px;
            color: #333;
            margin: 14px 0;
            .rank-num{
              margin-right: 15px;
            }
            .rank-name{
              width: 100px;
              display: flex;
              justify-content:flex-start;
              margin-left: -50px;
            }
            .rank-top1{
              margin-left: 30px;
              text-align: center;
              width: 21px;
              height: 20px;
              color: #8e5900;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAACMElEQVQ4T82UPWgUURDHf3OXQy/4VYqVgoWKhYioKIaAhmguicaAWIitZewSEBQFQQvBtFZimdIEFSFFVBI/clFQz4OYRgQt1YgnuX1vZPdud9/tbhLt3Oa9fbv7m//M/GeFxKWfT33D2I1YBWPBKNjmGuwT51a/y+GpTS5GUtBP/RqAfGAASOyjAPFz6XjSwhGd4D3Krgi+uy+tJgA7ilvUKiw+jbUJFdFxVPqIIulCb0NpqMhN3VXvnMvRZ/H3Pi8FnS9pXEu3fonaRgEs0jWdgE6wxC+Kcgbj56DVExrVcrlmJRRL90wA1VkKfOGnr7RKjrNS4k3woHI8hrZ0PmyM28BGJtLzvAG9z0Fy3PEbdQnhAD2cFEH1XXczfbLrmmEv6X0hOkaedh6hPBR9wBoskyhf8Rhm27GPqDiWCr0a2iusbXhuQGb3IFxHKbCOUkP2GEXaGQHOsfnQVqSYa/gzafxwCJwS2Jol/3Ye5S5buCX7qKfN/7rrNnUztKrxw+lSRmXg1cWVJ2q6czt5qWC0kGmtUH1j2uqI7pSB8sKK0KAcM53DePZGrNYdVSd1dEROl28mRz2VfviCTnVcwdjLGM3F0xUNg0XtNRmcu5oE+vfLQgPFk0f24tkhTO08tg3sEti2exgdlcHyXBZwVWikehwN9+5/4v+B6ssdP4D1GYoWZX91wz8p1cf9NTyzFuOBMeD5q9dcTXNvwHq/5UKl+Ffdj6BZMDdIAP2Qgv4B21H4JL7cBkgAAAAASUVORK5CYII=);
            }
            .rank-top2{
              text-align: center;
              width: 21px;
              height: 20px;
              color: #494949;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAACF0lEQVQ4T8WTz4vTUBDHZzYUbcEf9NBzkhaKnsRCFEqhFHqJCXv1IP4L620XBEVB0IPgXj2Jx/4DevHSW6EULw2WdpOWliKUFn+BNu+9jrxAS0zTbvZk4JE3TN7nfb+TGYTIs1gsvgkhrgkhQK7VahW898TfS6XS9TAGo9DZbEZJgOHLDMP4h4Oe53WJ6OYanslkNuoSqAwc5HK5jTZEdNB1XdJ1fXPTdDoNlIaBUXg0Xy6XN+clbws6mUwS2Q+DK5XKFtTXNC2NiEJ6GI1GsdB9aqvVagBtt9upbDb7Syr9goj3NU37LBOe5+1UuqsstVotgHqed5eI3uJwOHxMRHdUVT1ERBoMBheuab1ex0ajoRiG8VEI8QH7/f4lRVE+AcBXIcQxEQ12tVScUlmWQqFwCwBeAEBK07R7gezxeJzmnJ8AwAPGmMoYOwg3fBgWra2iKKt8Pt8HgHeqqr5GRLbV/I7jvOGcHyWcJiCiU9M0H+2dqG63W2CMOUKIVBw4opoh4g3TNM/2QmWy0+kcc85fnjdRAHBiWdar6Khv2V9/0Gq1nnLOnwghDmJ6dEVEz23bfhYFyngnVCabzeZtIjoCgIe+7wMigu/774UQp7Ztd+KA50LXh3q9Hq33xWJxr5D/A3Vd9wcAXImx+VPX9asXsj+fz3/7vn9Z1pExJuu4WeGYMfbHsqx0or8vocvlMhHUtu0t6F9KkMngoAlOWAAAAABJRU5ErkJggg==)
            }
            .rank-top3{
              text-align: center;
              width: 21px;
              height: 20px;
              color: #8e5900;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAACd0lEQVQ4T82VMWgUQRSGv3fLabQWi4AI6VIKIiEWIgSDJiSoIFhZBEzAgCgpLAQPTLAWo5yRbSwURBHDRTSmECSKcgiGaMBOLIJ2FpqcuzNPZnb33MvGRDuvuZ2Ze9/8773/7QlrPvpicBKj24gtGAUTgwFik65J9mJ3ZsHqigzNj+YxUoA+Hwg9UNMg9xwpqIMCUQpUd6n1cDn9aqgFqjNcRmlvbrb1J4pcUOSVJMFuL05VG3dBAvTfu17nmcuiNULpp3mTPusLk4As/QyYKmsCXRmSksjom9/xjleAPjmcpO/ruQnQZRGDnC1Cp6gzIhWsy0FrveG6QA9w5TAQpSpdhLHIubpXqvcI2M4Np3SCMlXp5bM/eHQoxOaUuro61Tatp2ta/txBx94m0BodwCnRGfqBDvq4Jq7nD3tC3wAfmGtGsxSpC/zaePVy4d2QViixl/NYFkRvUqadMYRv/OQ+9uAVTKnViy21zWqdAL3VOhcrBByjRMB3rnqfap0yy/QhdPGjawfxVmnaxVsrrWezeS6D1FZbGkrnxy8o86zwVE5giua/c+AksfYknc913w2D9202DJlnZU4uLdzdeKJud+9ES+MYG3i1DpSfrha1zgrBRaksfN0Q6stxa/8RVI9n5i4OQ9rA2DyQ8aXHa0e9kH72A53qGqBhB7BWWofBl0RRnZbK++m1QLf+I9QrntyzmzjoQVe7aQiUYmgEL1k1czKx9Gk94KbQpuoaYfacf0/8P1Ctd15HaSsoUlZl39KZf1Kqs0er2KhMFKUmd0aP0rF0z86jbq2RDC+O/FX3dXawShyXk7+NHNDPerZ2YBPJ8IcC9BfAsOweLKuvfgAAAABJRU5ErkJggg==);
            }
            .rank-top4{
             display: inline-block;
              width: 16px;
              height: 20px;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAo0lEQVQ4T2P8/f7FfwYKAOOoAQyjYcAwGgYMgz8MGBl+gHP6fwYOXDkeX1Le8JeRsRikkeX//97/DAwB2AzBZsBVBkbGAlYB8T3IGn5/eOnC8P//BAYGBm1kcSQD/r9nYmKuZ+ITnc7IyPgHm23///9n+f3hZRYjA2MDA8N/QZAaxj/vXzxiYGTc8u3b3zo+Kak3xJRu/z89E/n7j7np////VgAGUHY6vIpVhgAAAABJRU5ErkJggg==);
              text-align: center;
              font-size: 12px;
              font-family: zihun143-zhengkuchaojihei,zihun143;
              font-weight: 400;
              color: #e9b499;
              line-height: 14px;
            }
          }
        }
      }
    }
    .main_container_left{
      // display: flex;
      position: absolute;
      top: 195px;
      left: 10px;
      width: 850px;
      height: 352px;
      background-color:#fff;
       border-radius: 15px;
        .title{
          display: flex;
          align-items: center;
          padding-left: 15px;
           h3{
            font-size: 16px;
            color: #333333;
          }
          span{
            padding-left: 10px;
            font-size: 12px;
            color: #999999
          };
        }
        .active{
          font-weight: 700;
           color: #000;
           box-shadow: 1px 1px  #eee;
           background-color: #fff;
        }
        .week_month_year{
          position: absolute;
          top: 18px;
          right: 14px;
          display: flex;
          justify-content: space-around;
          background: rgba(233,243,255,.37);
          width: 130px;
          height: 34px;
          line-height: 34px;
          border-radius: 10px;
          padding: 5px 0;
         .span_change{
          width: 35px;
           height: 25px;
           font-size: 14px;
           cursor: pointer;
           text-align: center;
           line-height: 25px;
           border-radius: 7px;

         }
        }
        .main_container_left_bottom{
          display: flex;
          padding: 0 15px;
          .echarts_left{
            background-color: #fff;
            width: 412px;
            height: 278px;
          }
          .echarts_right{
            // background-color:pink;
            width: 412px;
            height: 278px;
          }
        }

    }
    .main_bottom{
      background-color: #eee;
      display: flex;
    .main_bottom_left{
      width: 667px;
      height: 353px;
      background-color: rgb(183, 210, 32);
      margin: 10px 10px;
      border-radius: 15px;
        .title{
          display: flex;
          align-items: center;
          padding-left: 15px;
          h3{
            font-size: 16px;
            color: #333333;
          }
        }

    }
    .main_bottom_right{
      width: 491px;
      height: 353px;
      background-color: #fff;
      border-radius: 15px;
       margin: 10px;
         .title{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 15px;
          i{
            padding-right: 20px;
          }
          h3{
            font-size: 16px;
            color: #333333;
          }
        }
         .content{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 15%;
            img{
              width: 123px;
              height: 96px;
            }
            p{
              color: #20232a;
              font-size: 14px;
              margin-top:30px;
            }
          }
      }
    }
  }
</style>
