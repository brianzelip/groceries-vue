import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { routes } from './routes.js';

import App from './src/App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

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
