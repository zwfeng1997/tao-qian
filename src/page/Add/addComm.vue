<template>
  <div class="add">
    <input type="text" v-model="img">
    <input type="text" v-model="belong">
    <input type="text" v-model="id">
    <input type="text" v-model="title">
    <input type="text" v-model="desc">
    <input type="text" v-model="price">
    <button @click="btn">提价</button>
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      belong: '',
      id: '',
      title: '',
      desc: '',
      price: '',
      imgList: [],
      img: ''
    }
  },
  methods: {
    add () {
      console.log(this.img)
      this.imgList.push(this.img)
    },
    btn () {
      let value = {
        "belong": this.belong,
        "id": this.id,
        "imgList": this.imgList,
        "title": this.title,
        "desc": this.desc,
        "price": parseFloat(this.price)
      }
      console.log(value)
      this.imgList = []
      this.axios.post('/api/addComm',value)
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
