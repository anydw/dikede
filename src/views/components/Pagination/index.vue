<template>
  <div class="pagination-container">
    <div class="myPagination">
      <div class="total">
        共{{ total }}条记录 &nbsp;&nbsp; 第{{ currentPage }}/{{ totalPage }}页
      </div>
      <div>
        <button :disabled="currentPage==1" @click="changePage(-1)">上一页</button>
        <button :disabled="currentPage==totalPage" @click="changePage(1)">下一页</button>
      </div>
    </div>
  </div>

</template>
<script>

export default {
  name: 'Pagination',
  props: {
    // 数据总条数
    total: {
      type: Number,
      default: 0
    },
    // 当前处于第几页
    currentPage: {
      type: Number,
      default: 1
    },
    // 每页显示多少条
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    // 总条数除以每页显示多少条得到有多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    changePage(val) {
      this.$emit('changePageEvent', this.currentPage + val)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container{
  background: #fff;
  padding: 18px 12px;
  .myPagination {
  display: flex;
  justify-content:space-between;
  font-size: 16px;
  padding: 0;
  button {
    width: 70px;
    margin: 0 16px;
    border-radius: 2px;
    background-color: #d5ddf8;
    outline: none;
    border:none;
    color: #606266;
    height: 32px;
    line-height:32px;
  }
  button:disabled {
    background: #edf0f9;
    color: #d8dde3;
    cursor: no-drop;
  }
  .total {
    margin-right: 10px;
    font-weight: 400;
    color: #dbdfe5;
    height: 32px;
    line-height:32px;
  }
}
}

</style>

