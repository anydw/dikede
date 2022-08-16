<template>
  <div class="login-container">
    <div class="outline_Border">
      <img class="login-logo" src="@/assets/common/logo.png" alt="">
      <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" label-position="left">
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <span
            class="svg-container el-icon-mobile-phone"
          />
          <el-input v-model="loginForm.userName" placeholder="请输入用户名" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <span
            class="svg-container el-icon-lock"
          />
          <el-input ref="pwd" v-model="loginForm.password" placeholder="请输入密码" :type="tyepassword" />
          <span>
            <svg-icon :icon-class="tyepassword==='password' ? 'eye': 'eye-open'" @click="showPwd" />
          </span>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="securityCode">
          <span
            class="svg-container el-icon-folder-checked"
          />
          <el-input v-model="loginForm.securityCode" placeholder="请输入验证码" />
          <img
            class="yanzheng"
            :src="this.$store.state.user.yanZhenMa"
            alt=""
            @click="changeYzm"
          >
        </el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: 'admin',
        password: 'admin',
        securityCode: ''
      },
      // 是否显示密码
      tyepassword: 'password',
      // 验证规则
      rules: {
        userName: [{ required: true, message: '请填写用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名格式不正确', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' },
          {	min: 5, max: 16, message: '密码的长度在5-16位之间 ', trigger: 'blur' }],
        securityCode: [{ required: true, message: '验证码不正确', trigger: 'blur', pattern: /^[a-zA-Z0-9_-]{4}$/ }
        ]
      }
    }
  },
  created() {
    this.$store.dispatch('user/getyanZhenMa')
  },
  methods: {
    // 改变密码框的隐藏和显示状态
    showPwd() {
      this.tyepassword === 'password' ? this.tyepassword = '' : this.tyepassword = 'password'
      // console.log(123)
      this.$nextTick(() => {
        this.$refs.pwd.focus()
      }
      )
    },
    // 点击切换验证码
    changeYzm() {
      console.log(this.loginForm.securityCode)
      this.$store.dispatch('user/getyanZhenMa')
    },
    // 登录
    async login() {
      if (this.loginForm.securityCode === !this.loginForm.securityCode) {
        return alert('Please enter a security code')
      }
      await this.$refs.loginForm.validate()
      this.$store.dispatch('user/login', {
        loginName: this.loginForm.userName,
        password: this.loginForm.password,
        mobile: this.loginForm.userName,
        code: this.loginForm.securityCode,
        clientToken: this.$store.state.user.code,
        loginType: 0
      })
      this.$router.push('/')
    }
  }
}

</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.outline_Border{
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    background-color: #fff;
    border-radius: 2%;
}
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  background: url('~@/assets/common/background.png');
  background-size: 100%;
  background-position: center;
  // 文字颜色
   ::v-deep.el-input input {
    height: 47px;
    background: transparent;
    border: 0;
    border-radius: 0;
    padding: 12px 5px 12px 15px;
    color: #999;
    caret-color: #999;
    -webkit-appearance: none;
}
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 75px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  ::v-deep.el-form-item__content{
    background-color: #fff;
    height: 49px;
  }
  .yanzheng{
  width: 130px;
  height: 50px;
  // background-color: pink;
  position:absolute;
  top: 0;
  left: 365px;
}
  .el-button--primary {
    height: 49px;
    width: 100%;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: 91;

  }
}
// 顶部logo
.login-container img {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -45px;
    left: 50%;
    margin-left: -48px;
    z-index: 300;
}

</style>
