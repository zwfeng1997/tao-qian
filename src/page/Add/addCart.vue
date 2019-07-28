<template>
  <div class="add">
    <input type="text" v-model="id" placeholder="哪一个的商品">
    <input type="text" v-model="price" placeholder="加格">
    <input type="text" v-model="desc" placeholder="描述">
    <input type="text" v-model="imgUrl" placeholder="图片">
    <input type="text" v-model="title" placeholder="哪一家的商品">
    <button @click="click">提交</button>
    <button @click="btn">add cartList</button>
    <button @click="add">add itemList</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cartList: [],
      title: '',
      imgUrl: '',
      itemList: [],
      id: '',
      price: 0,
      desc: '',
      num: 1,
      selected: false
    }
  },
  methods: {
    add () {
      let value = {
        "id": this.id,
        "price": parseFloat(this.price),
        "desc": this.desc,
        "imgUrl": this.imgUrl,
        "num": this.num,
        "selected": this.selected
      }
      this.price = ''
      this.desc = ''
      this.imgUrl = ''
      this.itemList.push(value)
      console.log(this.itemList)
    },
    btn () {
      let value = {
        "itemList": this.itemList,
        "title": this.title
      }
      this.id = ''
      this.price = ''
      this.desc = ''
      this.imgUrl = ''
      this.title = ''
      this.cartList.push(value)
      console.log(this.cartList)
      this.itemList = []
    },
    click () {
      let value = {
        "cartList": this.cartList
      }
      this.axios.post('/api/addshoppingCart', value)
        .then(res => console.log(res))
    }
  }
}
</script>
<style scoped>
.add input{
  width: 100%;
  margin: 20px 0;
  border: 1px solid #000
}
</style>
