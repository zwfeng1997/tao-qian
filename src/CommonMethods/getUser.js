function getUser(_this,callback) {
  if (!_this.$store.state.allState) {
    _this.axios.get('/api/users/getUser')
    .then(res => {
      console.log(res)
      if (res.status === 200) {
        if (res.data.code === 0) {
          _this.$store.commit('getEmail', res.data.email)
          _this.$store.commit('getUser', res.data.user)
          _this.$store.commit('getUserImg', res.data.img)
          _this.axios.post('/api/userId', {
            "name": _this.$store.state.user
          }).then(res => {
            // console.log(res)
            if (res.status === 200) {
              if (res.data.code === -1) {
                _this.$store.commit('getId', res.data.data._id)
                _this.$store.commit('changeAllState')
                if (callback) {
                  callback(_this)
                }
              }
            }
          })
        } else if (res.data.code === -1) {
          location.href = '/login'
        }
      }
      console.log('请求成功')
    })
  } else {
    if (callback) {
      callback()
    }
  }
}

export default getUser
