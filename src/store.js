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
    addItemToUserSelectedItems: (state, obj) => {
      state.userSelectedItems[obj._id] = {
        _id: obj._id,
        name: obj.name,
        qty: obj.qty,
        store: obj.store
      };

      storeArea();

      function storeArea() {
        hasStoreArea()
          ? (state.userSelectedItems[obj._id][
              `${obj.store}Area`
            ] = getStoreArea())
          : null;
      }

      function hasStoreArea() {
        return obj[`${obj.store}Area`];
      }

      function getStoreArea() {
        return `${obj[`${obj.store}Area`]}`;
      }
    },
    removeItemInUserSelectedItems: state => {},
    updateItemInUserSelectedItems: stste => {},
    resetUserSelectedItems: state => {
      state.userSelectedItems = {};
    }
  }
});

export default store;
