<template>
  <div class="parameter" @click="close">
    <div class="content" ref="paramSearch">
      <parameter-header :num="num" @add="add" @reduce="reduce"></parameter-header>
    </div>
    <div class="btn">
      <mt-button size="large" class="click" @click.stop="purchase">立即购买</mt-button>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { Toast } from "mint-ui"
import ParameterHeader from './components/header'
import getUser from '../../CommonMethods/getUser'
export default {
  name: 'Parameter',
  data () {
    return {
      state: false,
      num: 1
    }
  },
  components: {
    ParameterHeader
  },
  props: {
    data: {
      type: [Object,String],
      default () {
        return {}
      }
    }
  },
  mounted () {
    let _this = this
    getUser(_this)
  },
  methods: {
    add () {
      this.num++
    },
    reduce () {
      if (this.num === 1) {
        Toast({
          message: "不能在减少了哦",
          position: "middle",
          duration: 3000
        });
        return false;
      } else {
        this.num--
      }
    },
    close () {
      this.$emit('close')
    },
    initScroll () {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      }
      this.scroll = new Bscroll(this.$refs.paramSearch, options)
    },
    purchase () {
      if (this.$store.state.allState) {
        let value = {
          desc: this.data.desc,
          id: this.data.id,
          imgUrl: this.data.imgList[0],
          num: this.num,
          selected: false,
          price: this.data.price,
          title: this.data.belong,
          uid: this.$store.state.id
        }
        this.axios.post('/api/cart/AddCart', value)
          .then(res => {
            if (res.status === 200) {
              if (res.data.code === -1) {
                this.$store.commit('updata')
                Toast({
                  message: "添加成功",
                  position: "middle",
                  duration: 3000
                });
              }
            }
          })
      } else {
        location.href = '/login'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .parameter
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    background rgba(0,0,0,.5)
    z-index 101
    .content
      position absolute
      top 20%
      left 0
      right 0
      bottom 39px
      background #fff
      opacity 1
    .btn
      position absolute
      bottom 0
      left 0
      width 100%
      height 39px
      border none
      .click
        background #ff9500
        color #fff
</style>
