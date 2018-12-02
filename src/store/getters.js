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

export const userSelectedStores = state => {
  const USI = state.userSelectedItems;
  const allStores = [];

  Object.keys(USI).forEach(key => {
    USI[key].store != null
      ? allStores.push(USI[key].store)
      : allStores.push('noStore');
  });

  const uniqueSortedStores = allStores
    .reduce((acc, store) => {
      return acc.indexOf(store) === -1 ? (acc.push(store), acc) : acc;
    }, [])
    .sort((a, b) => state.storesRef[a].order - state.storesRef[b].order);

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
