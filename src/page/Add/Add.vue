<template>
  <div class="add">
    <input type="text" v-model="id">
    <input type="text" v-model="imgUrl">
    <input type="text" v-model="title">
    <input type="text" v-model="price">
    <button @click="ti">提交</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      imgUrl: '',
      title: '',
      price: 0
    }
  },
  methods: {
    ti () {
      let value = {
        "id": this.id,
        "imgUrl": this.imgUrl,
        "title": this.title,
        "price": parseFloat(this.price)
      }
      console.log(value)
      this.axios.post('/api/add',value)
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
