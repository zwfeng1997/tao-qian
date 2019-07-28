<template>
  <div class="evaluate">
    <header>
      <i class="iconfont left" @click="handleReturn">&#xe70d;</i>
      <i class="iconfont right" @click="handleCart">&#xe69a;</i>
    </header>
    <div class="wrapper" ref="evaluateSearch">
      <ul>
        <li v-for="(item,index) in userEvaluateList" :key="index" class="border-bottom">
          <div class="user">
            <img :src="item.imgUser" alt="" style="width:27px; height:27px">
          </div>
          <div class="content">
            <h4>{{item.name}}</h4>
            <p>{{item.desc}}</p>
            <img :src="item.img" alt="" class="desc" v-if="item.img">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Evaluate',
  data () {
    return {
      id: '',
      userEvaluateList: []
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  mounted () {
    this.getEvaluate()
    this.initScroll()
  },
  methods: {
    getEvaluate () {
      this.axios.post('/api/evaluate/getEvaluate',{
        id: this.id
      }).then(res => {
        if (res.status === 200 && res.data.code === -1) {
          this.userEvaluateList = res.data.data.userEvaluateList
        }
      })
    },
    initScroll () {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      }
      this.scroll = new Bscroll(this.$refs.evaluateSearch, options)
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
@import '../../assets/styles/mysty.styl';
  .evaluate
    width 100%
    header
      padding 10px 5%
      background $bgColor
      overflow hidden
      .left
        float left
      .right
        float right
    .wrapper
      width 100%
      position absolute
      top 36px
      left 0
      right 0
      bottom 49px
      background #fff
      z-index -1
      ul
        width 90%
        margin 0 auto
        li
          display flex
          padding-top 20px
          padding-bottom 10px
          .user
            display block
            width 27px
            height 27px
            margin-right 10px
            border-radius 50%
            img
              border-radius 50%
          .content
            flex-grow 1
            .desc
              width 175px
            h4
              font-size 16px
              color #999
            p
              margin 10px 0
              line-height 19px
              color #000
              font-size 14px

</style>
