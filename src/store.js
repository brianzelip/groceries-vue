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

      //TODO: create a function that returns exampleOutput as below
      // 1. create a prop for each userSelectedStores, whose value is an array of objects
      // 2. for each item, push its item data to the appropriate store array from step 1.
      // 3. return the object
      const exampleOutput = {
        tj: [
          { name: '', qty: '', storeArea: 1 },
          { name: '', qty: '', storeArea: 1 },
          { name: '', qty: '', storeArea: 1 }
        ],
        moms: [
          { name: '', qty: '', storeArea: 1 },
          { name: '', qty: '', storeArea: 1 },
          { name: '', qty: '', storeArea: 1 }
        ],
        farmersMarket: [
          { name: '', qty: '' },
          { name: '', qty: '' },
          { name: '', qty: '' }
        ],
        noStore: [
          { name: '', qty: '' },
          { name: '', qty: '' },
          { name: '', qty: '' }
        ]
      };
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
