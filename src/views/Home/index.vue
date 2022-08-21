<template>
  <div class="main_container_box">
    <div class="main_top">
      <div class="main_top_left">
        <!-- 左一 -->
        <div class="top_left">
          <div class="title">
            <h3>工单统计</h3>
            <span>`${}~${}`</span>
          </div>
          <div class="title_statistics">
            <div>
              <p>1</p>
              <p class="title_text">工单总数（个）</p>
            </div>
            <div>
              <p>2</p>
              <p class="title_text">完成工单（个）</p>
            </div>
            <div>
              <p>3</p>
              <p class="title_text">进行工单（个）</p>
            </div>
            <div>
              <p>4</p>
              <p class="title_text">取消工单（个）</p>
            </div>

          </div>
        </div>
        <div class="top_right">
          <div class="title">
            <h3>销售统计</h3>
            <span>`${}~${}`</span>
          </div>
          <div class="title_statistics">
            <div>
              <p>1</p>
              <p class="title_text">订单量（个）</p>
            </div>
            <div>
              <p>2</p>
              <p class="title_text">销售额（万元）</p>
            </div>
          </div>
        </div>
        <div class="main_right">
          <div class="title">
            <h3>商品热榜</h3>
            <span>`${}~${}`</span>
          </div>
        </div>
      </div>
      <div class="main_container_left">
        <div class="title">
          <h3>销售数据</h3>
          <span>`${}~${}`</span>
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
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

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
      }
    }
    .main_container_left{
      position: absolute;
      top: 195px;
      left: 10px;
      width: 850px;
      height: 352px;
      background-color: green;
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
      background-color: rgb(104, 126, 156);
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
        }
    }
    }
  }
</style>
