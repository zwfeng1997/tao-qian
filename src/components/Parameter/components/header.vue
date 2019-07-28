<template>
  <div class="header" @click.stop="Stop">
    <div class="img border-bottom">
      <img src="//img.alicdn.com/imgextra/i1/2200829031526/O1CN01Mxx3JI1N8wvV8sN4e_!!2200829031526.jpg_200x200Q50s50.jpg" alt="">
      <ul class="wrapper">
        <li class="price">￥<span>26</span></li>
        <li class="stock">库存 26件</li>
        <li class="img-size">请选择: 颜色 尺码</li>
      </ul>
    </div>
    <div class="color border-bottom">
      <h3>颜色</h3>
      <ul @click="handelColor">
        <li class="item" :class="color === '浅蓝' ? 'active': '' " color="浅蓝">
          <img class="desc" src="//gw.alicdn.com/bao/uploaded/i2/2200829031526/O1CN01hLUl1J1N8wvuUtOGp_!!2200829031526.jpg_80x80.jpg" alt="" color="浅蓝">
          <span class="text" color="浅蓝">浅蓝</span>
        </li>
        <li class="item" :class="color === '浅绿' ? 'active': '' " color="浅绿">
          <img class="desc" src="//gw.alicdn.com/bao/uploaded/i3/2200829031526/O1CN01IMFlUt1N8wvrFyh8i_!!2200829031526.jpg_80x80.jpg" alt="" color="浅绿">
          <span class="text" color="浅绿">浅绿</span>
        </li>
        <li class="item" :class="color === '浅红' ? 'active': '' " color="浅红">
          <img class="desc" src="//gw.alicdn.com/bao/uploaded/i2/2200829031526/O1CN01dRj3yW1N8wvsAZhCy_!!2200829031526.jpg" alt="" color="浅红">
          <span class="text" color="浅红">浅红</span>
        </li>
         <li class="item" :class="color === '深紫' ? 'active': '' " color="深紫">
          <img class="desc" src="//gw.alicdn.com/bao/uploaded/i4/2200829031526/O1CN01uVUmDd1N8wwKegidA_!!2200829031526.jpg_80x80.jpg" alt="" color="深紫">
          <span class="text" color="深紫">深紫</span>
        </li>
         <li class="item" :class="color === '杏仁色' ? 'active': '' " color="杏仁色">
          <img class="desc" src="//gw.alicdn.com/bao/uploaded/i4/2200829031526/O1CN01N0BpVa1N8ww4i31Bu_!!2200829031526.jpg_80x80.jpg" alt="" color="深紫">
          <span class="text" color="杏仁色">杏仁色</span>
        </li>
      </ul>
    </div>
    <div class="size border-bottom">
      <h3>尺码</h3>
      <ul @click="handelSize">
        <li :class="size === 'XS' ? 'active': '' ">XS</li>
        <li :class="size === 'S' ? 'active': '' ">S</li>
        <li :class="size === 'M' ? 'active': '' ">M</li>
        <li :class="size === 'L' ? 'active': '' ">L</li>
        <li :class="size === 'XL' ? 'active': '' ">XL</li>
      </ul>
    </div>
    <div class="num">
      购买数量
      <div class="comput">
        <button class="reduce" @click="reduce">-</button>
        <input class="number" v-model="num" type="text"></input>
        <button class="add" @click="add">+</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  name: 'ParameterHeader',
  data () {
    return {
      size: 'XS',
      color: '浅蓝'
    }
  },
  props: {
    num: {
      type: Number,
      default () {
        return 1
      }
    }
  },
  methods: {
    handelSize (e) {
      this.size = e.target.innerHTML
    },
    handelColor (e) {
      this.color = e.target.getAttribute('color')
    },
    add () {
      this.$emit('add')
    },
    reduce () {
      this.$emit('reduce')
    },
    Stop () {

    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    width 90%
    margin 0 auto
    .img
      display flex
      padding-bottom 20px
      color #555
      img
        display inline-block
        width 100px
        height 100px
        margin-top -30px
        vertical-align top
      .wrapper
        flex-grow 1
        display inline-block
        padding-top 10px
        padding-left 10px
        line-height 18px
        .price
          color red
        .stock, .img-size
          font-size 13px
    .color
      margin-top 20px
      padding-bottom 20px
      h3
        color #999
        margin-bottom 10px
        font-size 14px
      .item
        position relative
        display inline-block
        padding 3px 12px
        margin-bottom 5px
        background #f5f5f5
        border 1px solid #f5f5f5
        border-radius 8px
        z-index 200
        .desc
          display inline-block
          width 24px
          height 24px
          background blue
        .text
          display inline-block
          line-height 24px
          vertical-align top
          font-size 13px
          color #555
      .active
        border: 1px solid red
        .text
          color red
    .size
      margin-top 20px
      padding-bottom 20px
      h3
        color #999
        margin-bottom 5px
        font-size 14px
      ul
        .active
          border: 1px solid red
          color red
        li
          display inline-block
          padding 3px 12px
          margin-bottom 5px
          line-height 24px
          margin-right 5px
          font-size 13px
          background #f5f5f5
          border 1px solid #f5f5f5
          border-radius 8px
          color #555
        li:last-child
          margin-right 0
    .num
      margin-top 20px
      padding-bottom 20px
      overflow hidden
      font-size 14px
      color #999
      .comput
        float right
        display flex
        width 100px
        height 36px
        button, input
         flex-grow 1
         background #cfcfcf
         font-size 13px
         line-height 32px
         text-align center
         color #000
        button
          font-size 24px
          border none
        input
          width 33.3px

</style>
