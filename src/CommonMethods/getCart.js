function getCart (_this) {
  _this.axios.post('/api/cart/getCartData',{
    "id": _this.$store.state.id
  }).then(res => {
    _this.$store.commit('getCartList', res.data.data.cartList)
  })
}

export default getCart
