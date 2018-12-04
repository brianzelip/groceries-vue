export const allPossibleGroceryItemsCount = state => {
  return state.allPossibleGroceryItems.length;
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
export const usiArrStores = state => {
  // reduce array of item objects
  // to an array of all store name strings
  // to an array of unique store name strings
  // to an array of sorted unique store name strings
  return state.usiArr
    .reduce((acc, item) => {
      item.store != null ? acc.push(item.store) : acc.push('noStore');
      return acc;
    }, [])
    .reduce((acc, store) => {
      return acc.indexOf(store) === -1 ? (acc.push(store), acc) : acc;
    }, [])
    .sort((a, b) => state.storesRef[a].order - state.storesRef[b].order);
};

export const userSelectedItemsByStore = (state, getters) => {
  const USI = state.userSelectedItems;
  const stores = getters.userSelectedStores;

  const userSelectedItemsByStore = {};

  // First create an obj w/ keys for each userSelectedStore,
  // then push all items to their respective store.

  stores.forEach(store => (userSelectedItemsByStore[store] = []));

  Object.keys(USI).forEach(key => {
    USI[key].store
      ? userSelectedItemsByStore[USI[key].store].push(USI[key])
      : userSelectedItemsByStore.noStore.push(USI[key]);
  });

  return userSelectedItemsByStore;
};
