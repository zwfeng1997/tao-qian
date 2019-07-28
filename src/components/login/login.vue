<template>
  <div class="login">
    <h1 class="header">登录</h1>
    <div class="content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" ></mt-field>
      <div class="btn" @click="login">登录</div>
      <div class="bottom">
        <router-link to="/register" class="link">去注册</router-link>
        <div class="font">忘记密码</div>
         <div class="msg">
          {{statusMsg}}
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import CryptoJS from 'crypto-js'
export default{
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      statusMsg: ''
    }
  },
  methods: {
    login () {
      let self = this
      this.axios.post('/api/users/signin', {
        username: window.encodeURIComponent(self.username),
        password: CryptoJS.MD5(self.password).toString(),
      }).then(({status, data}) => {
        if (status === 200) {
          if (data.code === 0) {
            self.statusMsg = '登录成功'
            location.href = '/personalcenter'
          } else {
            self.statusMsg = data.msg
          }
        } else {
          self.statusMsg = `服务器出错，错误码:${status}`
        }
      })
    },
    getUser () {
     this.axios.get('/api/users/getUser')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            this.statusMsg = res.data.user
          }
        }
      })
    }
  },

 mounted () {
    // this.getUser()
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
    .bottom
      margin-top 20px
      overflow hidden
      .link
        float left
      .font
        float right
        color #7e8c8d
      .msg
        margin-top 30px
        font-size 14px
        color #999
</style>
