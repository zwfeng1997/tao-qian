<template>
  <div class="add">
    <input type="text" v-model="id" placeholder="商品id">
    <input type="text" v-model="imgUser" placeholder="用户头像">
    <input type="text" v-model="name" placeholder="用户名">
    <input type="text" v-model="desc" placeholder="用户描述">
    <input type="text" v-model="img" placeholder="用户描述的图片">
    <button @click="btn">提价</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      imgUser: '',
      name: '',
      img: '',
      desc: ''
    }
  },
  methods: {
    btn () {
      let value = {
        "id": this.id,
        "imgUser": this.imgUser,
        "name": this.name,
        "img": this.img,
        "desc": this.desc
      }
      this.axios.post('/api/evaluate/addEvaluate', value)
        .then(res => {
          if (res.data.code === -1) {
            console.log(res)
            this.imgUser = '',
            this.name = '',
            this.img = '',
            this.desc = ''
          }
        })
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
