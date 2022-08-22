<template>
  <div class="main-container_search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="工单编号">
        <el-input v-model="formInline.user" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="工单状态">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
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
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
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
