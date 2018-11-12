import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    userSelectedStores: (state, getters) => {
      const USI = state.userSelectedItems;
      const allStores = [];

      Object.keys(USI).forEach(item => {
        USI[item].store != null
          ? allStores.push(USI[item].store)
          : allStores.push('noStore');
      });

      const uniqueSortedStores = allStores
        .reduce((acc, store) => {
          return acc.indexOf(store) === -1 ? (acc.push(store), acc) : acc;
        }, [])
        .sort(
          (a, b) => getters.storesRef[a].order - getters.storesRef[b].order
        );

      return uniqueSortedStores;
    },
    userSelectedItemsByStore: (state, getters) => {
      const USI = getters.userSelectedItems;
      const stores = getters.userSelectedStores;

      const userSelectedItemsByStore = {};

      // First create an obj w/ keys for each userSelectedStore,
      // then push all items to their respective store.

      stores.forEach(store => (userSelectedItemsByStore[store] = []));

      Object.keys(USI).forEach(item => {
        USI[item].store
          ? userSelectedItemsByStore[USI[item].store].push(USI[item])
          : userSelectedItemsByStore.noStore.push(USI[item]);
      });

      return userSelectedItemsByStore;
    },
    storesRef() {
      return {
        tj: { name: 'TJ', order: 0 },
        moms: { name: 'Moms', order: 1 },
        wineSource: { name: 'Wine Source', order: 2 },
        howl: { name: 'Howl', order: 3 },
        farmersMarket: { name: 'Farmers Market', order: 4 },
        target: { name: 'Target', order: 5 },
        tjMaxx: { name: 'TJ Maxx', order: 6 },
        riteAid: { name: 'Rite Aid', order: 7 },
        noStore: { name: null, order: 99 }
      };
    }
  },
  actions: {
    setAllPossibleGroceryItems: context => {
      axios
        .get('https://groceries-vue-api.glitch.me/get')
        .then(res => {
          console.log('axios.get worked! res.data =', res.data);
          context.commit('setAllPossibleGroceryItems', res.data);
        })
        .catch(error => {
          console.log('ERROR! ->', error);
        });
    },
    addItemToUserSelectedItems: ({ commit }, payload) => {
      commit('addItemToUserSelectedItems', payload);
    },
    removeItemInUserSelectedItems: ({ commit }, payload) => {
      commit('removeItemInUserSelectedItems', payload);
    },
    updateItemQty: ({ commit }, payload) => {
      commit('updateItemQty', payload);
    },
    updateItemStore: ({ commit }, payload) => {
      commit('updateItemStore', payload);
    }
  },
  mutations: {
    setAllPossibleGroceryItems: (state, payload) => {
      state.allPossibleGroceryItems = payload;
    },
    addItemToUserSelectedItems: (state, payload) => {
      state.userSelectedItems[payload._id] = {
        _id: payload._id,
        name: payload.name,
        qty: payload.qty,
        store: payload.store
      };

      storeArea();

      function storeArea() {
        hasStoreArea()
          ? (state.userSelectedItems[payload._id][
              `${payload.store}Area`
            ] = getStoreArea())
          : null;
      }

      function hasStoreArea() {
        return payload[`${payload.store}Area`];
      }

      function getStoreArea() {
        return `${payload[`${payload.store}Area`]}`;
      }
    },
    removeItemInUserSelectedItems: (state, _id) => {
      delete state.userSelectedItems[_id];
    },
    updateItemInUserSelectedItems: (state, payload) => {},
    updateItemQty: (state, payload) => {
      state.userSelectedItems[payload._id].qty = payload.qty;
    },
    updateItemStore: (state, payload) => {
      state.userSelectedItems[payload._id].store = payload.store;
      payload.storeArea
        ? (state.userSelectedItems[payload._id][`${payload.store}Area`] =
            payload.storeArea)
        : null;
    },
    resetUserSelectedItems: state => {
      state.userSelectedItems = {};
    }
  }
});

export default store;
