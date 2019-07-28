<template>
  <div class="personal-center">
    <h2 class="header">我的账号</h2>
    <div class="content">
      <div class="item border-bottom">
        <div class="font">我的头像</div>
        <i class="iconfont">&#xe70c;</i>
        <img src="../../assets/images/user.jpg" alt="">
      </div>
      <div class="item border-bottom">
        <div class="font">昵称</div>
        <i class="iconfont">&#xe70c;</i>
        <div class="item-content">{{this.$store.state.user}}</div>
      </div>
      <div class="item border-bottom">
        <div class="font">邮箱</div>
        <div class="item-content">{{this.$store.state.email}}</div>
      </div>
      <div class="item border-bottom">
        <div class="font">ID</div>
        <div class="item-content">1023208109</div>
      </div>
       <div class="item border-bottom">
        <div class="font">绑定账号</div>
        <i class="iconfont">&#xe70c;</i>
      </div>
       <div class="item border-bottom">
        <div class="font">修改密码</div>
        <i class="iconfont">&#xe70c;</i>
      </div>
    </div>
    <mt-button size="large" class="btn" @click="signOut">退出账号</mt-button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import getUser from '../../CommonMethods/getUser'
export default {
  name: 'PersonalCenter',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    signOut () {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      }).then(action => {
        if (action == 'confirm') {
          this.axios.get('/api/users/exit')
          .then(res => {
            console.log(res)
            if (res.status === 200) {
              if (res.data.code === 0) {
                this.$store.commit('empty')
                MessageBox('提示', '操作成功').then(action => location.href = '/login')
              }
            } else {
              MessageBox('提示', '操作失败')
            }
          })
        }
      }).catch(err => {
        if (err == 'cancel') {
          console.log(2);
        }
      })
    }
  },
  mounted () {
    let _this = this
    getUser(_this)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mysty.styl';
  .personal-center
    position absolute
    top 0
    bottom 49px
    left 0
    right 0
    background $bgColor
    .btn
      margin-top 20px
      background #ffffff
      border none
    .header
      padding 15px 0
      text-align center
      background #f40
      color #fff
      font-size 18px
    .content
      background #fff
      .item
        // width 100%
        overflow hidden
        line-height 50px
        padding 0 10px
        .font
          float left
          color #bbb
        img
          float right
          width 40px
          margin-right 15px
          margin-top 5px
          border-radius 50%
        .iconfont
          float right
        .item-content
          float right
          font-size 12px
          margin-right 15px
</style>
