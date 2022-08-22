<template>
  <div class="main_body_list">
    <div class="main_body_list_buttons">
      <el-row>
        <el-button type="primary" class="button_primary" icon="el-icon-circle-plus-outline" size="small" @click="onSubmit"> <span>新建</span></el-button>
        <el-button type="warning" class="button_primarys" plain size="small" @click="onSubmit"><span>工单配置</span></el-button>
      </el-row>
    </div>
    <div class="main_body_list_body">
      <el-table
        :data="orderList"
        style="width: 1159px"
      >
        <el-table-column
          type="index"
          label="序号"
          width="80"
        />
        <el-table-column
          prop="taskCode"
          label="工单编号"
          width="130"
        />
        <el-table-column
          prop="innerCode"
          label="设备编号"
          width="130"
        />
        <el-table-column
          prop="taskType.typeName"
          label="工单类型"
          width="130"
        />
        <el-table-column
          prop="shoudong"
          label="工单方式"
          width="130"
        />
        <el-table-column
          prop="taskStatusTypeEntity"
          label="工单状态"
          width="130"
        />
        <el-table-column
          prop="userName"
          label="运维人员"
          width="130"
        />
        <el-table-column
          prop="createTime"
          label="创建日期"
          width="160"
        />
        <el-table-column
          prop="name"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '../Pagination'
export default {
  name: 'BodyList',
  components: { Pagination },
  props: {
    orderList: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      // tableData: [
      //   {}
      // ]
    }
  },
  methods: {
    onSubmit() {

    },
    handleClick() {

    }
  }
}
</script>

<style lang="scss" scoped>
.main_body_list{
    padding: 20px 15px 19px 17px;
    width: 1159px;
    height: 650px;
    background-color: #fff;
    margin:13px;
    .main_body_list_buttons{
      width: 1127px;
      height: 40px;
      // background-color: pink;
      .button_primary{
        width: 80px;
        height: 36px;
        background: linear-gradient(135deg,#ff9743,#ff5e20)!important;
        border: 10px;
        ::v-deep.el-icon-search{
          margin-left: -10px;
        }
      }
        .button_primarys{
        width: 80px;
        height: 36px;
        span{
          color: #655b65;
        }
        }
    }
    .main_body_list_body{
      margin-top: 5px;
    }
}
 ::v-deep.el-button--primary{
          border-color: #fff;
 }
::v-deep.el-table .cell{
 height: 23px;
 line-height: 23px;
 }
 ::v-deep.el-table td {
   border: none;
 }
 ::v-deep.el-table th.is-leaf{
   border: none;
 }
 ::v-deep.el-table__header-wrapper{
   background-color: pink;
 }
</style>
