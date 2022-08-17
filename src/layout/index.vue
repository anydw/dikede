<template>
  <div>
    <!-- 导航栏 -->
    <div class="navbar">
      <div><img class="logo" src="@/assets/common/left.png" alt=""></div>
      <div class="rightBox">
        <img class="HeadPortraits" src="@/assets/common/logo.png" alt="">
        <span class="userName">欢迎您:{{}}</span>
        <!-- 下拉菜单 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            退出<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>用户</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 左侧栏 -->
    <SideBar />
    <!-- 主体组件视口 -->
    <router-view />
  </div>
</template>
<script>
import SideBar from './components/SideBar'
export default {
  name: 'Home',
  components: {
    SideBar
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  z-index: 999;
   .rightBox{
    height: 100%;
    line-height: 60px;
  }
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: top;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
    background-size: cover;
    background-repeat: no-repeat;
    padding-right: 30px;
  .logo{
    width: 88px;
    height: 36px;
    margin:6px 0 0 15px
  }
   .el-dropdown-link {
    cursor: pointer;
    color: #fff;
    z-index: 9999;
  }
  .el-icon-arrow-down {
    font-size: 12px;
    z-index: 9999;
  }
  .HeadPortraits{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align:middle;

  }
  .userName{
    padding: 0 30px;
    color: #fff;
    font-size: 18px;

  }

}
</style>

