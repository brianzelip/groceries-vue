import Vue from 'vue';
import Vuex from 'vuex';

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

export default store;
