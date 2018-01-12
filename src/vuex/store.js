import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
if (!sessionStorage.language){
  sessionStorage.language = "zh";
}
/*if (!sessionStorage.user){
  sessionStorage.user = '';
}*/
const state={
  language: sessionStorage.language,
  user: sessionStorage.user,
};
const mutations = {
  language(state,language) {
    state.language = sessionStorage.language = language
  },
  isLogin(state,user) {
    state.user = sessionStorage.user = user;
  },
  loginout(state){
    state.user = sessionStorage.user = '';
  }
};
export default new Vuex.Store({
  state,mutations
})


// {{$store.state.count}}
