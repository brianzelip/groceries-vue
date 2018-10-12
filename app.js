import Vue from 'vue';
import Vuex from 'vuex';
import App from './src/App.vue';

Vue.use(Vuex);

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
  store,
  render: h => h(App)
});
