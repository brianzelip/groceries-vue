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
      const usi = state.userSelectedItems;
      const stores = [];

      const itemsIds = Object.keys(usi);

      itemsIds.map(item =>
        stores.findIndex(usi[item].store) === -1
          ? stores.push(usi[item].store)
          : null
      );
      console.log('stores is', stores, 'usi is', usi);

      return stores;
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
