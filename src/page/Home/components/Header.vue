<template>
  <div class="home-header">
    <div class="header-content">
      <div class="content-silde">
        <i class="iconfont">&#xe602;</i>
        <span>扫一扫</span>
      </div>
      <div class="content">
        <i class="iconfont">&#xe615;</i>
        <input type="text" placeholder="水浒传" class="content-font"/>
        <i class="iconfont">&#xe653;</i>
      </div>
      <div class="content-silde">
        <i class="iconfont">&#xe603;</i>
        <span>会员码</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style scoped lang="stylus">
@import '../../../assets/styles/font-size.styl'
  .home-header
    width 100%
    background #f40
    .header-content
      display flex
      width 100%
      padding-top 10px
      padding-bottom 10px
      .content-silde
        width 80px
        text-align center
        .iconfont
          fontSize()
        span
          display block
          margin-top 5px
          font-size 12px
      .content
        display flex
        flex-grow 1
        line-height 30px
        background #fff
        border-radius 22px
        .iconfont
          width 30px
          fontSize()
          line-height 38px
          text-align center
          border none
        .content-font
          flex-grow 1
          line-height 30px
          padding 5px 10px
          border: none
          font-size 14px
</style>
