<template>
  <div class="main-container_search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="工单编号">
        <el-input v-model="formInline.user" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="工单状态">
        <el-select v-model="formInline.region" placeholder="请选择" clearable>
          <el-option
            v-for="item in allStatus"
            :key="item.statusId"
            :label="item.statusName"
            :value="item.statusId"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit"> 查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    allStatus: {
      type: Array,
      default: () => ([])
    },
    orderList: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    // 查找用户
    onSubmit() {
      // console.log(this.formInline.region)
      // const nowId = this.formInline.region

      // console.log(this.orderList[0].taskStatusTypeEntity.statusId)
      // this.orderList.map(ele =>ele.taskStatusTypeEntity.statusId === !this.formInline.region{
      //   return
      // })
      // if (nowId === this.orderList[0].taskStatusTypeEntity.statusId) {
      //   this.$emit('getTaskOrder',)
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container_search{
    width: 1159px;
    height: 64px;
    background-color: #fff;
    margin: 13px;
    padding-top: 13px;
    padding-left: 20px;
}
</style>
