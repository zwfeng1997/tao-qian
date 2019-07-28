<template>
  <div class="bottom-wrapper">
    <div class="bottom-content border-top">
      <div class="bottom">
        <router-link to="/home" class="bottom-link" >
          <div>
            <i class="iconfont">&#xe620;</i>
            <span>首页</span>
          </div>
        </router-link>
        <router-link to="/shoppingcart" class="bottom-link" >
          <div>
            <i class="iconfont">&#xe69a;</i>
            <span>购物车</span>
          </div>
        </router-link>
        <router-link to="/order" class="bottom-link" >
          <div>
            <i class="iconfont">&#xe60f;</i>
            <span>订单</span>
          </div>
        </router-link>
        <router-link to="/personalcenter" class="bottom-link" >
          <div>
            <i class="iconfont">&#xe60b;</i>
            <span>我的</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bottom',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/font-size.styl'
  .bottom-wrapper
    width 100%
    .bottom-content
      position absolute
      bottom 0px
      left 0px
      width 100%
      color #000
      background #fff
      z-index 10
      .bottom
        width: 90%
        display flex
        margin: 0 auto
        .bottom-link
          position relative
          width 25%
          div
            margin: 3px auto 0 auto
            text-align center
          span
            display block
            margin 5px 0
            text-align center
            font-size 12px
          .iconfont
            fontSize()
            height 22px
            color #5D656B
        .router-link-active:before
          position absolute
          top: -2px
          left 20%
          background #000
          width 60%
          height 1px
          content ''
        .router-link-active
          .iconfont
            color: red
          span
            color red

</style>
