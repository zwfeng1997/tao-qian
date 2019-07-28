<template>
  <div>
    <div class="details" ref="detailsSearch" v-show="!show">
      <div class="details-wrapper">
        <details-header @IsShow="handleFullShow" :list="imgList" :price="price" :desc="desc"></details-header>
        <details-content @choice="handelChoice" :id="data.id"></details-content>
      </div>
    </div>
    <full :list="imgList" @close="handleFullClose" v-show="show"></full>
    <transition name="param">
      <parameter v-show="choice" @close="handleClose" :data="data"></parameter>
    </transition>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import DetailsHeader from './components/header'
import DetailsContent from './components/content'
import Full from '../../components/Full/Full'
import Parameter from '../../components/Parameter/parameter'
export default {
  name: 'Details',
  components: {
    DetailsHeader,
    DetailsContent,
    Parameter,
    Full
  },
  data () {
    return {
      imgList: [ ],
      show: false,
      choice: false,
      id: '',
      price: '',
      desc: '',
      data: ''
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  methods: {
    initScroll () {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      }
      this.scroll = new Bscroll(this.$refs.detailsSearch, options)
    },
    handleFullClose () {
      this.show = false
    },
    handleFullShow () {
      this.show = true
    },
    handelChoice () {
      this.choice = true
    },
    handleClose () {
      this.choice = false
    },
    getData () {
      this.axios.post('/api/comm/commodity',{"id": this.id})
        .then(res => {
          if (res.status === 200) {
            if (res.data.code === -1) {
              this.data = res.data.data
              this.imgList = res.data.data.imgList
              this.price = res.data.data.price
              this.desc = res.data.data.desc
            }
          }
        })
    }
  },
  mounted () {
    this.getData()
    this.initScroll()
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mysty.styl';
  .param-enter, .param-leave-to
    top: 668px
  .param-enter-to, .param-leave
    top: 0
  .param-enter-active, .param-leave-active
    transition: top 1s
  .details
    position absolute
    top 0
    left 0
    right 0
    bottom 49px
    background $bgColor
    overflow hidden
</style>
