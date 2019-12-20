import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vant from 'vant'
import 'vant/lib/index.css'

import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import { Swipe, SwipeItem } from 'mint-ui'
import { Button } from 'mint-ui'
import { Field } from 'mint-ui'
import { Uploader, Button as vantButton, Toast, ActionSheet } from 'vant'
let Number = 3001//index.js App.vue store router page components CommomMethods 后台加上 3764
import router from './router/router'
import store from './store/index'

Vue.prototype.axios = axios

Vue.use(Mint)
Vue.use(Vant)
Vue.use(VueAwesomeSwiper)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
Vue.use(Uploader)
Vue.use(vantButton)
Vue.use(Toast)
Vue.use(ActionSheet)

new Vue({
  el: '.root',
  router,
  store,
  render: (h) => h(App)
})
