<template>
  <div class="footer">
    <div ref="writeSearch">
      <h3>店铺描述</h3>
      <div class="item">
        <span>服务描述</span>
        <stars :num="5" class="item-stars" @evaluate="handleService"></stars>
      </div>
      <div class="item">
        <span>物流描述</span>
        <stars :num="5" class="item-stars" @evaluate="handleLogistic"></stars>
      </div>
      <div class="item">
        <span>服务态度</span>
        <stars :num="5" class="item-stars" @evaluate="handleServiceAttit"></stars>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import Stars from '../../../components/Stars/Stars'
export default {
  name: 'WriteFooter',
  components: {
    Stars
  },
  mounted () {
    this.initScroll()
  },
  methods: {
    handleService (score) {
      this.$emit('handleService', score)
    },
    handleLogistic (score) {
      this.$emit('handleLogistic', score)
    },
    handleServiceAttit (score) {
     this.$emit('handleServiceAttit', score)
    },
    initScroll () {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      }
      this.scroll = new Bscroll(this.$refs.writeSearch, options)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .footer
    position absolute
    top 393px
    left 0
    right 0
    bottom 0px
    width 100%
    padding 10px 5% 0 5%
    box-sizing border-box
    background #fff
    font-size 16px
    .item
      display flex
      margin-top 10px
      span
        width 65px
        vertical-align top
        line-height 22px
      .item-stars
        flex-grow 1
        vertical-align top
</style>
