<template>
  <div class="stars">
    <span v-for="(item,index) in num" @click="handleNum(index)">
      <i class="iconfont" v-show="list[index].cut" :class="index === num-1 ? 'bu': ''">&#xe644;</i>
      <i class="iconfont color" v-show="!list[index].cut">&#xe629;</i>
    </span>
    <span class="degree">{{desc}}</span>
  </div>
</template>
<script>
export default {
  name: 'Stars',
  data () {
    return {
      list: [],
      score: 5,
    }
  },
  props: {
    num: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  created () {
    let _this = this
    for (let i = 0; i < this.num; i++) {
      _this.$set(this.list,i,{cut: false});
    }
  },
  computed: {
    desc () {
      let str = ''
      switch (this.score) {
        case 5 :
          str = '非常好'
          break;
        case 4 :
          str = '好'
          break;
        case 3 :
          str = '一般'
          break;
        case 2 :
          str = '差'
          break;
        case 1 :
          str = '很差'
          break;
      }
      return str
    }
  },
  methods: {
    handleNum (num) {
      this.score = num + 1
      this.$emit('evaluate', this.score)
      let len = num + 1
      for (let i = 0; i <= num; i++) {
        this.list[i].cut = false
      }
      for (let j = len; j < this.num; j++) {
        this.list[j].cut = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/font-size.styl';
  .stars
    span
      .iconfont
        display inline-block
        padding 0 5px
        fontSize()
      .bu
        padding-left 9.73px
      .color
        color #ffca3d
    .degree
      float right
      vertical-align top
      color #999999
      font-size 12px
      line-height 22px
</style>
