import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import App from './src/App.vue';

Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
new Vue({
  el: '[data-vue="app"]',
  store,
  render: h => h(App)
});
