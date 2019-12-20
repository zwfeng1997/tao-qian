<template>
  <div class="register">
    <h1 class="header">注册</h1>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" v-model="email"></mt-field>
    <mt-field label="验证码" placeholder="请输入验证码" v-model="code">
      <mt-button size="normal" class="btn" @click="sendCode">获取验证码</mt-button>
    </mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" ></mt-field>
    <div class="content">
      <div class="btn" :class="sele === false ? 'unchecked' : ''" @click="Register">注册</div>
      <div class="font" @click="seleClick">
        <i class="iconfont i" v-show="sele">&#xe63c;</i>
        <i class="iconfont" v-show="!sele">&#xe65f;</i>
        <div>同意<span>《用户协议》</span>及<span>《隐私协议》</span></div>
      </div>
      <div class="msg">
        {{statusMsg}}
      </div>
    </div>
  </div>
</template>
<script>
import CryptoJS from 'crypto-js'
export default{
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      code: '',
      email: '',
      statusMsg: '',
      sele: false
    }
  },
  methods: {
    seleClick () {
      this.sele = !this.sele
      this.statusMsg = ''
    },
    Register() {
      if (this.sele) {
        let self = this
        this.axios.post('/api/users/signup', {
          username: window.encodeURIComponent(self.username),
          password: CryptoJS.MD5(self.password).toString(),
          email: self.email,
          code: self.code
        }).then(({status, data}) => {
          clearInterval(self.timerid)
          if (status === 200) {
            if (data.code === 0) {
              self.statusMsg = ''
              location.href = '/login'
            } else {
              self.statusMsg = data.msg
            }
          } else {
            self.statusMsg = `服务器出错，错误码:${status}`
          }
        })
      } else {
        this.statusMsg = '请先同意用户协议'
      }
    },
    sendCode () {
      if (this.sele) {
        let self = this
        clearInterval(self.timerid)
        this.axios.post('/api/users/verify', {
          username: encodeURIComponent(self.username),
          email : self.email
        }).then(({status, data}) => {
          if (status === 200  && data.code === 0) {
            let count = 60
            self.timerid = setInterval(() => {
              self.statusMsg = `验证码已发送,剩余${count--}秒`
              if(count === 0) {
                self.statusMsg = ''
                clearInterval(self.timerid)
              }
            }, 1000)
          } else {
            self.statusMsg = data.msg
          }
        })
      } else {
        this.statusMsg = '请先同意用户协议'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    padding 15px 0
    margin-bottom: 20px
    text-align center
    background #f40
    color #fff
    font-size 18px
  .content
    width: 90%
    margin: 0 auto
    .btn
      line-height 40px
      margin-top 20px
      text-align center
      background #00bcd4
      color: #fff
    .unchecked
      opacity 0.4
    .font
      margin-top 20px
      font-size 14px
      .iconfont
        font-size 14px
      .i
        color #18d48b
      div
        display inline-block
        margin-left 5px
        color: #aaa
        span
         color #00bcd4
    .msg
      margin-top 30px
      font-size 14px
      color #999
</style>
