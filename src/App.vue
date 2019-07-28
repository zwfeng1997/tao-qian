<template>
  <div id="app">
    <router-view/>
    <my-bottom />
  </div>
</template>
<script>
import MyBottom from './components/bottom/bottom'
export default{
  name: 'App',
  components: {
    MyBottom
  },
  data () {
    return {

    }
  },
  mounted () {
    // this.axios.get('/api/zwf')
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }
}
</script>
<style lang="stylus">

</style>
