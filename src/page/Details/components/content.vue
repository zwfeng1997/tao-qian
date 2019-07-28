<template>
  <div class="content">
    <div class="service">
      <div class="service-item">
        <div class="text">优惠券</div>
        <div class="desc">领取优惠券</div>
        <div class="icon">
          领取
          <i class="iconfont">&#xe70c;</i>
        </div>
      </div>
      <div class="service-item">
        <div class="text">促销</div>
        <div class="desc">满1件,享部分地区包邮</div>
        <div class="icon">
          <i class="iconfont">&#xe70c;</i>
        </div>
      </div>
      <div class="service-item">
        <div class="text">服务</div>
        <div class="desc">正品保证-极速退货-极速退款-七天退换</div>
        <div class="icon">
          <i class="iconfont">&#xe70c;</i>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="service-item">
        <div class="text">选择</div>
        <div class="desc" @click="choice">配送至:江岸区,请选择颜色/尺码</div>
        <div class="icon">
          <i class="iconfont">&#xe70c;</i>
        </div>
      </div>
      <div class="service-item">
        <div class="text">参数</div>
        <div class="desc">品牌 材质...</div>
        <div class="icon">
          <i class="iconfont">&#xe70c;</i>
        </div>
      </div>
    </div>
    <div class="eavluate">
      <div class="top">
        商品评价
        <span class="span" @click="handleEvaluate">
          查看全部
          <i class="iconfont">&#xe70c;</i>
        </span>
      </div>
      <div class="user">
        <img src="//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vFkSPFHuXH*evF8LPmHSXmZzXFQGPF*ePGIbMCgSvGvbM8kGvGx4OF8uM8lIXm9e&width=40&height=40&type=sns" alt="">
        <span>深**6</span>
      </div>
      <div class="desc">
        衣服很宽松 ，穿上超好看的，发货也非常快
      </div>
      <div class="date">
        2019-07-10 颜色:白色;尺码:XL
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsContent',
  props: {
    id: {
      required: true
    }
  },
  methods: {
    choice () {
      this.$emit('choice')
    },
    handleEvaluate () {
      this.$router.push({path:'/evaluate', query:{id: this.id}});
    }
  }
}
</script>
<style lang="stylus" scoped>
  .content
    width 100%
    .eavluate
      padding 0 5%
      margin-top 10px
      background #fff
      .top
        line-height 40px
        font-size 14px
        color: #999
        .span
         float right
         color red
      .user
        padding-bottom 20px
        img
          display inline-block
          width 24px
          border-radius 50%
          vertical-align middle
        span
          display inline-block
          padding-left 5px
          line-height 24px
          font-size 12px
      .desc
        line-height 16px
        padding-bottom 20px
        font-size 13px
      .date
        line-height 14px
        padding-bottom 10px
        font-size 10px
        color #999
    .service
      width 100%
      padding 0 5%
      margin-top 10px
      background #fff
      box-sizing border-box
      .service-item
        display flex
        line-height 40px
        font-size 12px
        color #999
        .text
          flex-grow 3
        .desc
          flex-grow 4
          color #000
        .icon
          flex-grow 3
          text-align right
          .iconfont
            font-size 12px
</style>
