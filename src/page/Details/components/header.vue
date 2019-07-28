<template>
  <div class="header">
    <div class="content" @click="handleFullShow">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <img style="width: 100%" :src=item />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="wrapper">
      <div class="price">￥<span>{{price}}</span></div>
      <div class="desc">{{desc}}</div>
      <div class="param">
        <div class="item">快递:0.00</div>
        <div class="item">月销561件</div>
        <div class="item">广东深圳</div>
      </div>
    </div>
    <i class="iconfont i-left i" @click="handleReturn">&#xe70d;</i>
    <i class="iconfont i-right i" @click="handleCart">&#xe69a;</i>
  </div>
</template>
<script>
export default {
  name: 'DetailsHeader',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    price:{
      type: [String, Number],
      default () {
        return 0
      }
    },
    desc: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletElement: 'li',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                  ' / ' +
                  '<span class="' + totalClass + '"></span>'
          }
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleFullShow () {
      this.$emit('IsShow')
    },
    handleReturn () {
      this.$router.go(-1)
    },
    handleCart () {
       this.$router.push({path: '/shoppingcart', query: {from: 'other'}});
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/mysty.styl';
  .header
    position relative
    background #fff
    .content
      width 100%
      .swiper-pagination
        color: #fff
    .i
      position absolute
      border-radius 50%
      border-radius 50%
      text-align center
      line-height 24px
      padding 3px
      background #000
      color: #fff
      opacity 0.6
      z-index 100
    .iconfont
      font-size 24px
    .i-left
      top 10px
      left 10px
    .i-right
      right 10px
      top 10px
    .wrapper
      width 90%
      margin: 5px auto 0 auto
      .price
        padding-bottom 5px
        color: red
        font-size 14px
        span
         font-size 18px
         font-weight 600
      .desc
        line-height 18px
        font-size 14px
        font-weight 600
      .param
        display flex
        padding-top 10px
        padding-bottom 5px
        .item
          flex-grow 1
          text-align center
          color: #999
          font-size 12px
        .item:first-child
          text-align left
        .item:last-child
          text-align right
</style>
