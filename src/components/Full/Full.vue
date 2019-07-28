<template>
  <div class="full" @click="handleFullClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in list" :key="index">
          <img class="full-img" :src=item />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Full',
  props: {
    list: {
      type: Array,
      default () {
        return []
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
    handleFullClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .full >>> .swiper-container
    overflow: inherit
    z-index 100
  .full
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 5
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    z-index 100
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .full-img
        width 100%
        // position absolute
        // top 50%
        // transform translateY(-50%)
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
