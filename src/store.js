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
    removeItemFromUserSelectedItems: state => {},
    updateItemFromUserSelectedItems: stste => {},
    resetUserSelectedItems: state => {}
  }
});

export default store;
