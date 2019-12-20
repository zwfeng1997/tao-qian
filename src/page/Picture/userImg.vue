<template>
  <div class="wrapper">
    <van-uploader :after-read="afterRead">
      <van-button icon="photo" type="primary">上传图片</van-button>
    </van-uploader>
  </div>
</template>
<script>
import { Toast } from 'vant'
import getUser from '../../CommonMethods/getUser'
export default {
  data() {
    return {}
  },
  methods: {
    afterRead (img) {
      this.axios.post('/api/upload/userImg', {
        'file': img.content
      }).then(res => {
        if (res.data.code === -1) {
          console.log(this.$store.state)
          this.axios.post('/api/users/updateImg', {
            'username': this.$store.state.user,
            'url': res.data.filePath
          }).then(res => {
            if (res.data.code === -1) {
              Toast.success('修改成功，即将返回个人界面')
              setTimeout(() => location.href = '/personalcenter', 1000)
            }
          })
        }
      })
    }
  },
  mounted () {
    let _this = this
    getUser(_this)
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  width 90%
  margin 30px auto 
</style>