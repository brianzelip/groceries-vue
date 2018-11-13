export const allPossibleGroceryItems = state => {
  return state.allPossibleGroceryItems;
};

export const allPossibleGroceryItemsCount = state => {
  return state.allPossibleGroceryItems.length;
};

export const userSelectedItems = state => {
  return state.userSelectedItems;
};

export const userSelectedItemsCount = state => {
  return Object.keys(state.userSelectedItems).length;
};

export const userSelectedStores = (state, getters) => {
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
    .sort((a, b) => getters.storesRef[a].order - getters.storesRef[b].order);

  return uniqueSortedStores;
};

export const userSelectedItemsByStore = (state, getters) => {
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
};

export const storesRef = () => {
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
};
