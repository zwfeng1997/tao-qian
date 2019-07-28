<template>
  <div class="writer">
    <header>
      <i class="iconfont" @click="handleReturn">&#xe70d;</i>
        发表评价
      <span @click="sub">发布</span>
    </header>
    <div class="content">
      <div class="comm-desc">
        <img :src="list.imgList[0]" alt="">
        <p>{{list.desc}}</p>
      </div>
      <div class="evaluate border-bottom" @click="handleEvaluate">
        <span>整体评价</span>
        <p evaluate="好评"><i class="iconfont" evaluate="好评" :class="evaluate === '好评'? 'active': ''">&#xe62c;</i><span evaluate="好评">好评</span></p>
        <p evaluate="中评"><i class="iconfont" evaluate="中评" :class="evaluate === '中评'? 'active': ''">&#xe6b6;</i><span evaluate="中评">中评</span></p>
        <p evaluate="差评"><i class="iconfont" evaluate="差评" :class="evaluate === '差评'? 'active': ''">&#xe605;</i><span evaluate="差评">差评</span></p>
      </div>
      <div class="input">
        <textarea rows="7" placeholder="宝贝满足你的期待吗?说说他的优点和美中不足的地方吧" v-model="desc"></textarea>
      </div>
      <div class="picture border-bottom">
        <p><i class="iconfont">&#xe653;</i>添加图片</p>
        <p><i class="iconfont">&#xe653;</i>添加图片</p>
      </div>
      <div class="anonymous">
        <div class="show" @click="handleShow">
          <i class="iconfont" v-show="!show">&#xe65f;</i>
          <i class="iconfont i" v-show="show">&#xe63c;</i>
        </div>
        <span>匿名</span>
        <p>你写的评价会以匿名的形式展现</p>
      </div>
    </div>
    <write-footer @handleService="handleService" @handleServiceAttit="handleServiceAttit" @handleLogistic="handleLogistic"></write-footer>
  </div>
</template>
<script>
import WriteFooter from './components/footer'
import { Toast } from "mint-ui"
export default {
  name: 'Write',
  components: {
    WriteFooter
  },
  data () {
    return {
      id: '',
      list: '',
      imgUser:'https://img2.woyaogexing.com/2019/07/24/319e212523ae41f58dac1adaaf4599b3!400x400.jpeg',
      evaluate: '好评',
      serviceDesc: null,
      logisticsDesc: null,
      serviceAttit: null,
      desc: '',
      show: false,
      name: this.$store.state.user,
      sid: ''
    }
  },
  created () {
    this.id = this.$route.query.id
    this.sid = this.$route.query.sid
  },
  mounted () {
    this.getData()
  },
  methods: {
    sub () {
      let value = {
        id: this.id,
        desc: this.desc,
        imgUser: this.imgUser,
        name: this.name
      }
      console.log(value)
      this.axios.post('/api/evaluate/addEvaluate', value)
        .then(res => {
          if (res.status === 200 && res.data.code === -1) {
            let data = {
              sid: this.sid,
              uid: this.$store.state.id,
              id: this.id
            }
            console.log(data)
            this.axios.post('/api/order/selectedEvaluate', data)
              .then(res => {
                if (res.status === 200 && res.data.code === -1) {
                  Toast({
                    message: "评价成功",
                    position: "middle",
                    duration: 3000
                  });
                  this.timer = setTimeout(() => {
                    location.href = '/order'
                  },3500)
                }
              })
          }
        })
    },
    getData () {
      this.axios.post('/api/comm/getCommodity', {
        id: this.id
      }).then(res => {
        if (res.status === 200 && res.data.code === -1) {
          this.list = res.data.data
        }
      })
    },
    handleEvaluate (e) {
      if (e.target.getAttribute('evaluate')) {
        this.evaluate = e.target.getAttribute('evaluate')
      }
    },
    handleService (score) {
      this.serviceDesc = score
    },
    handleServiceAttit (score) {
      this.serviceAttit = score
    },
    handleLogistic (score) {
      this.logisticsDesc = score
    },
    handleReturn () {
      this.$router.go(-1)
    },
    handleShow () {
      this.show = !this.show
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mysty.styl';
@import '../../assets/styles/font-size.styl';
  .writer
    position absolute
    width 100%
    left 0
    right 0
    top 0
    bottom 49px
    background $bgColor
    header
      width 90%
      padding 10px 0
      margin 0 auto
      overflow hidden
      .iconfont
        display inline-block
        padding-right 25px
      span
        float right
        color red
    .content
      width 90%
      padding 0 5%
      background #fff
      .comm-desc
        display flex
        padding 5px 0
        img
          display block
          width 40px
          height 40px
          margin-right 10px
          box-sizing content-box
        p
         flex-grow 1
         font-size 14px
         line-height 40px
         ellipsis()
      .evaluate
        display flex
        padding 10px 0
        span
          width 65px
          line-height 28px
          font-size 14px
        .active
          color red
        p
          position relative
          flex-grow 1
          text-align center
          z-index 100
          .iconfont
            display inline-block
            padding-right 10px
            font-size 25px
            line-height 25px
            z-index 1
      .input
        padding-top 10px
        textarea
          width 100%
          resize none
          overflow auto
          border none
        textarea:focus
	        outline: none;
      .picture
        padding-bottom 10px
        p
          display inline-block
          padding 10px
          border: 1px dashed #999
          color #999
          text-align center
          font-size 14px
          .iconfont
            display block
            margin-bottom 10px
            font-size 30px
            color #999
      .anonymous
        overflow hidden
        line-height 46px
        .show
          display inline-block
          margin-right 10px
          .iconfont
            fontSize()
          .i
            color #18d48b
        p
          float right
          font-size 12px
          color #999

</style>
