<template>
  <div class="main_container_box">
    <Search />
    <BodyList :order-list="orderList" />
  </div>
</template>

<script>
import Search from '../components/Search'
import BodyList from '../components/BodyList'
import { getTaskOrder } from '@/api'
export default {
  components: {
    Search,
    BodyList
  },
  data() {
    return {
      orderList: []
    }
  },
  created() {
    this.getTaskOrder()
  },
  methods: {
    async getTaskOrder() {
      const res = await getTaskOrder()
      console.log(res)
      this.orderList = res.data.currentPageRecords
      console.log(this.orderList)
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
