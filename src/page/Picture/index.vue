<template>
  <div class="wrapper">
    <van-uploader v-model="fileList" multiple />
    <van-button type="primary" @click="upload">上传</van-button>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    upload () {
      this.axios.post('/api/upload/post', {
        'fileList': this.fileList
      }).then(res => {
        if (res.data.code === -1) {
          this.fileList = []
          Toast.success('上传成功')
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  width 90%
  margin 30px auto 
</style>