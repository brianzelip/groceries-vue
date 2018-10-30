import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allPossibleGroceryItems: []
  },
  getters: {
    allPossibleGroceryItemsCount: state => {
      return state.allPossibleGroceryItems.length;
    }
  },
  mutations: {}
});

export default store;
