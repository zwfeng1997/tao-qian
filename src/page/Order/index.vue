<template>
  <div>
    <div class="order" v-show="orderList.length">
      <div class="header">
        <h2>我的订单</h2>
        <i class="iconfont">&#xe615;</i>
        <i class="iconfont">&#xe610;</i>
      </div>
      <div class="order-search" ref="orderSearch">
        <div class="search-wrapper">
          <dl v-for="(item, index) in orderList" :key="index">
            <dt class="top">
              订单号{{item.id}}
            </dt>
            <dd v-for="(info, id) in item.list" :key="id">
              <div class="h-wrapper">
                <img :src="info.imgUrl" alt="">
                <div class="content">
                  <div class="desc">{{info.desc}}</div>
                  <div class="price">￥{{info.price}}</div>
                  <div class="num">x{{info.num}}</div>
                </div>
              </div>
              <dt class="bottom">
                <router-link :to="'/write?id='+info.id+'&sid='+item.id " class="button" style="color: #000" v-if="!info.evaluate">评价</router-link>
                <div class="button">查看物流</div>
                <div class="button">卖了换钱</div>
              </dt>
            </dd>
            <div class="num">
              <div class="text">
                共计{{nums[index]}}件商品
                <span>合计:￥{{prices[index]}}</span>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="no-data"  v-show="!orderList.length" style="text-align: center;margin-top: 20px">
      还没有订单哦
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import getUser from '../../CommonMethods/getUser'
export default {
  name: 'Order',
  data () {
    return {
      orderList: []
    }
  },
  mounted () {
    let _this = this
    if (!this.$store.state.allState){
      getUser(_this, _this.getOrder)
    } else {
      this.getOrder()
    }
    this.initScroll()
  },
  methods: {
    getOrder (other) {
      this.axios.post('/api/order/getOrder', {
        "uid": this.$store.state.id
      }).then(res => {
        this.orderList = res.data.data.orderList
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
      this.scroll = new Bscroll(this.$refs.orderSearch, options)
    }
  },
  computed: {
    nums () {
      let list = []
      this.orderList.forEach((item, index) => {
        list[index]  = 0
        item.list.forEach(info => {
          list[index] += info.num
        })
      })
      return list
    },
    prices () {
      let list = []
       this.orderList.forEach((item, index) => {
        list[index]  = 0
        item.list.forEach(info => {
          list[index] += info.price * info.num
        })
      })
      return list
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/font-size.styl';
@import '../../assets/styles/mysty.styl';
  .order
    background $bgColor
    .header
      display flex
      width 100%
      padding 10px 0
      line-height 22px
      .iconfont
        width: 28px
        margin: 0 10px
        text-align center
        fontSize()
      h2
        flex-grow 1
        text-align center
        font-size 16px
    .order-search
      windth 100%
      position absolute
      top 41px
      bottom 49px
      left 0
      right 0
      overflow hidden
      background $bgColor
      .search-wrapper
        dl
          width: 90%
          margin: 0 auto
          padding 10px
          border-radius 8px
          background #ffffff
          margin-bottom 20px
          .top
            margin-bottom 20px
            line-height 16px
            font-size 12px
          dd
            margin-bottom 25px
            .bottom
              margin-bottom 5px
              overflow hidden
              .button
                float right
                margin-left 10px
                padding 5px 8px
                border 1px solid #000
                border-radius 25px
                font-size 14px
              .button:last-child
                margin-left 0
            .h-wrapper
              display flex
              img
                width 90px
                height 90px
                margin 0px 10px 0 0
              .content
                // display flex
                flex-grow 1
                font-size 12px
                overflow hidden
                .num
                  width 100%
                  box-sizing border-box
                  padding-top 10px
                  padding-right 32px
                  text-align right
                .desc
                  display inline-block
                  width 170px
                  ellipsis()
                .price
                  width 50px
                  float right
          .num
            padding-right 7px
            padding-bottom 10px
            text-align right
            font-size 13px
</style>
