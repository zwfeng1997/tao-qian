<template>
  <div class="home-content" ref="search">
    <div class="wrapper-item">
      <div class="swipe">
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for="(item, index) in imgList" :key="index">
            <img style="width:100%;height:100%" :src="item" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <ul class="content-wrapper">
        <li class="content-item" v-for="(item,id) in list" :key="id" @click="handelDetails(item.id)">
          <img :src="item.imgUrl" alt="">
          <div class="item-title">{{item.title}}</div>
          <div class="price">￥<span>{{item.price}}</span></div>
        </li>
      </ul>
      <p v-show="show">加载更多...</p>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { setTimeout, clearTimeout } from 'timers';
export default {
  name: 'HomeContent',
  data () {
    return {
      imgList: [
        '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/69028/2/4748/100630/5d2e882cEe210d63e/f37f4d450eb97a7e.png!cr_1125x549_0_72!q70.jpg.dpg',
        '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/75526/35/1289/88488/5cf7b240E1a61b91b/f88d310248d06ed4.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/71917/4/1285/156394/5cf7b0d6E268cad13/143569fc13207d3c.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/69028/2/4748/100630/5d2e882cEe210d63e/f37f4d450eb97a7e.png!cr_1125x549_0_72!q70.jpg.dpg',
        '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/82253/22/1272/123017/5cf7cf91E2ba8450c/581b1de4e72eb1af.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      ],
      list: [],
      show: false
    }
  },
  mounted () {
    this.getData()
    this.initScroll()
  },
  methods: {
    handelDetails (index) {
      this.$router.push({path: '/details', query: {id: index}});
    },
    initScroll () {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        probeType: 3,
        click: true,
        taps: true
      }
      this.scroll = new Bscroll(this.$refs.search, options)
      this.scroll.on('touchEnd', (pos) => {
        if ( this.scroll.maxScrollY > pos.y + 10 ) {
          this.show = true
          console.log('加载下一页')
          this.axios.get('/api/comm/allComm')
            .then(res => {
              if (res.status === 200) {
                if (res.data.code === -1) {
                  res.data.data.forEach(item => {
                    this.list.push(item)
                  });
                  this.scroll.refresh()
                  this.show = false
                }
              }
            })
        }
      })
    },
    getData () {
      this.axios.get('/api/comm/allComm')
        .then(res => {
          if (res.status === 200) {
            if (res.data.code === -1) {
              this.list = res.data.data
            }
          }
        })
    }
  }
}
</script>
<style scoped lang="stylus" >
  @import '../../../assets/styles/font-size.styl'
  @import '../../../assets/styles/mysty.styl';
  .home-content
    overflow: hidden
    position: absolute
    top: 60px
    left: 0
    right: 0
    bottom: 48px
    background $bgColor
    .wrapper-item
      .swipe
        width 100%
        height 0
        padding-bottom 50%
        background #666
        .mint-swipe
          width 100%
          height 187px
      .content-wrapper
        display flex
        flex-wrap wrap
        background $bgColor
        .content-item
          width 48%
          margin: 5px 1%
          background #fff
          border-radius 5px
          img
            width 100%
            border-radius 5px
          .item-title
            margin-top 10px
            padding 0 10px
            font-size 14px
            color #555
            ellipsis()
          .price
            padding 10px 10px
            color red
            font-size 12px
            span
              font-size 14px
      p
        padding-top 20px
        text-align center
</style>
