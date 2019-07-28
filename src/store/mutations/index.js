import { Toast } from "mint-ui"
import axios from 'axios'

export default {
  updata (state) {
    axios.post('/api/cart/getCartData',{
      "id": state.id
    }).then(res => {
      this.commit('getCartList',res.data.data.cartList)
    })
  },
  CartListNumReduce (state, value) {
    let id = value._id
    let index = value.index
    if (state.cartList[index].itemList[id].num === 1) {
      Toast({
        message: "不能在减少了哦",
        position: "middle",
        duration: 3000
      });
      return false;
    }
    axios.post('/api/cart/ReduceCartNum', value)
      .then(res => {
        if (res.data.code === -1) {
          this.commit('updata')
        }
      })
  },
  CartListNumAdd (state, value) {
    axios.post('/api/cart/addCartNum', value)
      .then(res => {
        if (res.data.code === -1) {
          this.commit('updata')
        }
      })
  },
  CartListSelected (state,value) {
    axios.post('/api/cart/CartListSelected', value)
      .then(res => {
        if (res.data.code === -1) {
          this.commit('updata')
        }
      })
  },
  CartListAllElectionsTure (state, value) {
    axios.post('/api/cart/CartListAllElectionsTure', value)
      .then(res => {
        if (res.data.code === -1) {
          this.commit('updata')
        }
      })
  },
  CartListAllElectionsFlase (state, value) {
    axios.post('/api/cart/CartListAllElectionsFlase', value)
      .then(res => {
        if (res.data.code === -1) {
          this.commit('updata')
        }
      })
  },
  getId (state, index) {
    state.id = index
  },
  changeAllState (state) {
    state.allState = true
  },
  getEmail (state, index) {
    state.email = index
  },
  getUser (state, index) {
    state.user = index
  },
  empty (state) {
    state.allState = false
    state.id = ''
    state.email = ''
    state.user = ''
  },
  getCartList (state, data) {
    state.cartList = data
  }
}
