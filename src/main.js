// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import axios from 'axios'
Vue.prototype.$http = axios

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css';
import '@/assets/css/main.css'


Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(iView);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
