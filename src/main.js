// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import './common/stylus/index.styl'
import './common/fonts/iconfont.css'
Vue.use(VueLazyload, {
  loading: require('./common/images/default.gif')
})

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
