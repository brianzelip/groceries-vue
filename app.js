import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './router.js';
import Meta from 'vue-meta';

import App from './src/App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Meta);

const store = new Vuex.Store({
  state: {
    allGroceryItems: []
  },
  getters: {
    allGroceryItemsCount: state => {
      return state.allGroceryItems.length;
    }
  },
  mutations: {}
});
new Vue({
  el: '[data-vue="app"]',
  router,
  store,
  render: h => h(App)
});
