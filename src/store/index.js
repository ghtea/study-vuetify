import Vue from 'vue';
import Vuex from 'vuex';
import state from './state/index';
// import mutations from './mutations';
// import actions from './actions';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: state,
  mutations: {},
  actions: {},
  getters: {}
})

export default store;
