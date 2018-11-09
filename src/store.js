import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allPossibleGroceryItems: [],
    userSelectedItems: {}
  },
  getters: {
    allPossibleGroceryItems: state => {
      return state.allPossibleGroceryItems;
    },
    allPossibleGroceryItemsCount: state => {
      return state.allPossibleGroceryItems.length;
    },
    userSelectedItems: state => {
      return state.userSelectedItems;
    },
    userSelectedItemsCount: state => {
      return Object.keys(state.userSelectedItems).length;
    },
    userSelectedStores: state => {
      const USI = state.userSelectedItems;
      const allStores = [];

      Object.keys(USI).forEach(item => {
        allStores.push(USI[item].store);
      });

      const uniqueStores = allStores.reduce((acc, store) => {
        return acc.indexOf(store) === -1 ? (acc.push(store), acc) : acc;
      }, []);

      return uniqueStores;
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
    removeItemInUserSelectedItems: (state, _id) => {
      delete state.userSelectedItems[_id];
    },
    updateItemInUserSelectedItems: (state, obj) => {},
    resetUserSelectedItems: state => {
      state.userSelectedItems = {};
    }
  }
});

export default store;
