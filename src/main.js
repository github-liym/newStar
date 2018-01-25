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
Vue.use(VueAwesomeSwiper);

import iView from 'iview'
Vue.use(iView);

import loading from '@/components/common/loading'
Vue.component('loading',loading);

/*表单验证*/
import VeeValidate, { Validator } from 'vee-validate';
import dictionary from '@/assets/js/dictionary'
import validate from '@/assets/js/validator'
Validator.localize('zh', dictionary[store.state.language]);
Vue.use(VeeValidate);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  computed: {
    language (){
      return this.$store.state.language;
    }
  },
  watch: {
    language(){
      Validator.localize('zh', dictionary[this.language]);
    }
  },
})
