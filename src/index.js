import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import { Swipe, SwipeItem } from 'mint-ui'
import { Button } from 'mint-ui'
import { Field } from 'mint-ui'

let Number = 3001//index.js App.vue store router page components CommomMethods 后台加上 3764
import router from './router/router'
import store from './store/index'

Vue.prototype.axios = axios

Vue.use(Mint)
Vue.use(VueAwesomeSwiper)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Field.name, Field)

new Vue({
  el: '.root',
  router,
  store,
  render: (h) => h(App)
})
