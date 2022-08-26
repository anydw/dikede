<template>
  <div class="main_container_box">
    <Search :all-status="allStatus" :order-list="orderList"/>
    <BodyList :order-list="orderList" />
  </div>
</template>

<script>
import Search from '../components/Search'
import BodyList from '../components/BodyList'
import { getTaskOrder, getTaskStatus } from '@/api'
export default {
  components: {
    Search,
    BodyList
  },
  data() {
    return {
      orderList: [],
      allStatus: []
    }
  },
  created() {
    this.getTaskOrder()
    this.getTaskStatus()
  },
  methods: {
    // 获取工单列表
    async getTaskOrder() {
      const res = await getTaskOrder()
      // console.log(res)
      this.orderList = res.data.currentPageRecords
      console.log(this.orderList, 111)
    },
    // 获取工单状态
    async getTaskStatus() {
      const { data } = await getTaskStatus()
      // console.log(data)
      this.allStatus = data
      // console.log(this.allStatus)
    }
  }
}
</script>

<style lang="scss" scoped>
 .main_container_box{
    position: absolute;
    top: 60px;
    left: 165px;
    width:1184px;
    height: 757px;
    background-color: #eee;
    .main_container_title{
      position: absolute;
      left: 0;
      top:0;
    }
  }
</style>
