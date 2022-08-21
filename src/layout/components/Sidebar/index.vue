<template>
  <div class="bigbox">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :style="{
            height: '600px',
            overflowX: 'hidden',
            overflowY: 'auto',
          }"
          class="
          el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="2">
            <i class="el-icon-s-home" />
            <span slot="title" @click="toHome">帝可得</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets" />
              <span>工单管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/taskbusiness"><el-menu-item index="1-1">运营工单</el-menu-item></router-link>
              <router-link to="/taskoperation"><el-menu-item index="1-2">运维工单</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location-outline" />
              <span>点位管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/noderegion"><el-menu-item index="2-1">区域管理</el-menu-item></router-link>
              <router-link to="/nodenode"><el-menu-item index="2-2">点位管理</el-menu-item></router-link>
              <router-link to="/nodepartner"><el-menu-item index="3-3">合作商管理</el-menu-item></router-link>

            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-tools" />
              <span>设备管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/vmindex"><el-menu-item index="3-1">设备管理</el-menu-item></router-link>
              <router-link to="/vmstatus"><el-menu-item index="3-2">设备状态</el-menu-item></router-link>
              <router-link to="/vmtype"><el-menu-item index="3-3">设备类型管理</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user-solid" />
              <span>人员管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/userindex"><el-menu-item index="4-1">人员列表</el-menu-item></router-link>
              <router-link to="/useruser-task-stats"><el-menu-item index="4-2">人效统计</el-menu-item></router-link>
              <router-link to="/user-work"><el-menu-item index="4-3">工作量列表</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-finance" />
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/sku-class"><el-menu-item index="5-1">商品类型</el-menu-item></router-link>
              <router-link to="/sku-sku"><el-menu-item index="5-2">商品管理</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-s-opportunity" />
            <span slot="title" @click="policyIndex">策略管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-office-building" />
            <span slot="title" @click="orderIndex">订单管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-receiving" />
            <span slot="title" @click="reportIndex">对账统计</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/home')
    },
    policyIndex() {
      this.$router.push('/policyindex')
    },
    orderIndex() {
      this.$router.push('/orderindex')
    },
    reportIndex() {
      this.$router.push('/reportindex')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang="scss">
  // body{
  //   background-color: #333;
  // }
 ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
.bigbox{
    position: fixed;
    width: 350px;
    // background-color: #eee;
.tac {
    position: fixed;
    // background-color: #fff;
    top: 52px;
    left: -30px;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #333;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    -webkit-transition: border-color .3s,background-color .3s,color .3s;
    transition: border-color .3s,background-color .3s,color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
    // background-color: #eee;
    .el-menu-vertical-demo{
      width: 167px;
    }

    }
}
     ::v-deep.el-submenu .el-menu-item{
      min-width: 0;
      background-color: #fff ;
     }

</style>
