import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allPossibleGroceryItems: [],
    userSelectedItems: {}
  },
  getters: {
    allPossibleGroceryItemsCount: state => {
      return state.allPossibleGroceryItems.length;
    },
    userSelectedItemsCount: state => {
      return Object.keys(state.userSelectedItems).length;
    }
  },
  mutations: {
    addItemToUserSelectedItems: state => {},
    removeItemInUserSelectedItems: state => {},
    updateItemInUserSelectedItems: stste => {},
    resetUserSelectedItems: state => {
      state.userSelectedItems = {};
    }
  }
});

export default store;
