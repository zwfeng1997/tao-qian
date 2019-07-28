function getCart (_this) {
  console.log(_this.$store.state)
  _this.axios.post('/api/cart/getCartData',{
    "id": _this.$store.state.id
  }).then(res => {
    // console.log(res.data.data)
    _this.$store.commit('getCartList', res.data.data.cartList)
  })
}

export default getCart
