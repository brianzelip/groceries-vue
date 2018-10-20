import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './src/App.vue';
import TheGroceryForm from './src/components/GroceryForm/TheGroceryForm.vue';
import TheItemForm from './src/components/ItemForm/TheItemForm.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: TheGroceryForm },
    { path: '/add', component: TheItemForm }
  ],
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
