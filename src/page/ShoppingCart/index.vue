<template>
  <div>
    <div v-show="this.$store.state.cartList.length" class="s-wrpper">
      <div class="shopping-cart">
        <div class="cart-content" ref="cartSearch">
          <div class="cart-wrapper">
            <div class="cart-top">
              <div class="cart-top-wrapper">
                <h1>
                  <i class="iconfont" @click="handleReturn" v-show="showReturn">&#xe70d;</i>
                  购物车
                </h1>
                <div class="admin">管理</div>
              </div>
              <div class="number">共有{{Total}}件宝贝</div>
            </div>
            <div class="cart-scroll">
              <dl v-for="(item, index) in this.$store.state.cartList" :key="index">
                <dt>
                  <div @click="allElections(item.title,index)">
                    <i class="iconfont selected" v-show="!seleList[index]">&#xe65f;</i>
                    <i class="iconfont selected i" v-show="seleList[index]">&#xe846;</i>
                  </div>
                  <i class="iconfont">&#xe601;</i>
                  {{item.title}}
                  <i class="iconfont">&#xe70c;</i>
                </dt>
                <dd v-for="(info, id) in item.itemList" :key="id">
                  <div @click="selected(item.title, info.id)">
                    <i class="iconfont " v-show="!info.selected">&#xe65f;</i>
                    <i class="iconfont i" v-show="info.selected">&#xe846;</i>
                  </div>
                  <img :src="info.imgUrl" alt />
                  <div class="info-wrapper">
                    <h3>{{info.desc}}</h3>
                    <div class="price">￥{{info.price}}</div>
                    <div class="num">
                      <div class="num-click" @click="reduce(item.title, info.id, index, id)">-</div>
                      <div class="num-desc">{{info.num}}</div>
                      <div class="num-click" @click="add(item.title, info.id)">+</div>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom border-top">
        <div class="num">合计：￥{{totalPrice}}</div>
        <mt-button plain class="btn" size="small" @click="settlement">结算(<span>{{Total}}</span>)</mt-button>
      </div>
      <div class="top" v-show="show">
        <h1>购物车({{Total}})</h1>
      </div>
    </div>
    <div class="no-data" style="text-align: center;margin-top: 20px" v-show="!this.$store.state.cartList.length">
      购物车空空如也
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { Toast } from "mint-ui"
import getUser from '../../CommonMethods/getUser'
import getCart from '../../CommonMethods/getCart'
export default {
  name: "ShoppingCart",
  data() {
    return {
      show: false,
      showReturn: false,
      user: '',
      state: false
    }
  },
  created () {
    this.getRouter()
  },
  mounted() {
    const _this = this
    if (!this.$store.state.allState){
      getUser(_this, getCart)
    } else {
      if (!this.$store.state.cartList.length) {
        getCart(_this)
      }
    }
    this.initScroll()
  },
  methods: {
    settlement () {
      this.axios.post('/api/cart/Settlement', {
        "uid": this.$store.state.id
      }).then(res => {
        if (res.status === 200 && res.data.code === -1) {
          Toast({
            message: "结算成功",
            position: "middle",
            duration: 3000
          });
          this.$store.commit('updata')
        }
      })
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
      this.scroll = new Bscroll(this.$refs.cartSearch, options)
      this.scroll.on('scroll', (pos) => {
        this.show = pos.y > -20 ? false : true
      })
    },
    reduce (title,  id, index, _id) {
      let value = { title, id, index, _id, "uid": this.$store.state.id }
      this.$store.dispatch('CartListNumReduce', value)
    },
    add (title, id) {
      let value = { title, id, "uid": this.$store.state.id }
      this.$store.dispatch('CartListNumAdd', value)
    },
    selected (title, id) {
      let value = { title, id, "uid": this.$store.state.id }
      this.$store.dispatch('CartListSelected', value)
    },
    allElections (title, index) {
      if (this.seleList[index]) {
        let value = { title, "uid": this.$store.state.id }
        this.$store.dispatch('CartListAllElectionsFlase', value)
      } else {
        let value = { title, "uid": this.$store.state.id }
        this.$store.dispatch('CartListAllElectionsTure', value)
      }
    },
    handleReturn () {
      this.showReturn = false
      this.$router.go(-1)
    },
    getRouter () {
      if (this.$route.query.from === 'other') {
        this.showReturn = true
      }
    }
  },
  computed: {
    Total () {
      let i = 0
      this.$store.state.cartList.forEach(item => i = i + item.itemList.length)
      return i
    },
    totalPrice () {
      let num = 0
      this.$store.state.cartList.forEach(item => {
        item.itemList.forEach(info => {
          if (info.selected) {
            num = num+(info.price * info.num)
          }
        })
      })
      num = num.toFixed(2)
      return num
    },
    seleList () {
      let list = []
      this.$store.state.cartList.forEach((item, index)=> {
        list.push(true)
        item.itemList.forEach(info => {
          if (info.selected === false) {
            list[index] = false
          }
        })
      })
      return list
    }
  }
};
</script>
<style <style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl';
@import '../../assets/styles/font-size.styl';
 @import '../../assets/styles/mysty.styl';

.top
  width 100%
  padding 20px 0 10px 0
  background #f40
  text-align center
  h1
    font-size 20px
    color: #fff
  // height 40px
.bottom
  position absolute
  width 100%
  height 40px
  bottom 49px
  left 0
  box-sizing border-box
  padding 3px 5px
  background #fff
  .num
    display inline-block
    line-height 40px
    margin-left 6%
  .btn
    float right
    margin-right 6%
    background #008de1
    color: #ffffff
    border: none
.shopping-cart {
  .cart-content {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 88px;
    background $bgColor
    overflow: hidden;
    z-index: -2;

    .cart-top {
      padding: 10px 10px 60px 10px;
      background: #f40;
      color: #fff;

      .cart-top-wrapper {
        overflow: hidden;

        h1 {
          float: left;
          font-size: 22px;
          font-weight: 600;
        }
          .iconfont {
            font-size 22px
          }

        .admin {
          float: right;
          font-size: 14px;
        }
      }

      .number {
        margin-top: 20px;
        font-size: 12px;
      }
    }

    .cart-scroll {
      dl:first-child {
        margin-top: -47px;
      }

      dl {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto 20px auto;
        padding: 10px;
        background: #ffffff;
        border-radius: 5px;

        dt {
          margin: 10px 0 20px 0;
          font-size: 16px;
          font-weight: 700;

          .iconfont {
            color: #e6e6e6;
          }
          div {
            display: inline-block
          }
            .selected{
              display: inline-block
              margin-right 5px
              color: #999
            }
            .i{
              color #18d48b
            }

        }

        dd {
          display: flex;
          margin-bottom: 10px;

          div {

          }
            .iconfont {
              display inline-block
              line-height 80px
              margin-right 5px
              color: #999
            }
            .i{
              color #18d48b
            }

          img {
            width: 80px;
            margin-right: 20px;
            height: 80px;
          }

          .info-wrapper {
            flex-grow: 1;

            h3 {
              width: 150px
              line-height: 15px;
              font-size: 12px;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .price, .num {
              display: inline-block;
              margin-top: 20px;
            }

            .price {
              color: #f40;
            }

            .num {
              float: right;
              font-size: 0;

              div {
                font-size: 12px;
                display: inline-block;
                border: 1px solid #000;
              }

              .num-click {
                padding: 2px 5px;
              }

              .num-desc {
                padding: 2px 8px;
                border-left: none;
                border-right: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
