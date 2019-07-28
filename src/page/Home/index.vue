<template>
  <div class="Home">
    <home-header></home-header>
    <home-content></home-content>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeContent from './components/content'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent
  }
}
</script>
<style scoped lang="stylus" >

</style>
