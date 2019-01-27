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

export const userSelectedItemsByStore = (state, getters) => {
  const USI = state.userSelectedItems;
  const stores = getters.userSelectedStores;

  const userSelectedItemsByUnsortedStores = {};
  const userSelectedItemsBySortedStores = [];

  // First create an obj w/ keys for each userSelectedStore,
  // then push all items to their respective store

  stores.forEach(store => (userSelectedItemsByUnsortedStores[store] = []));

  // ?: does userSelectedItemsByStore get created correctly?
  // A: YES IT DOES! Comment out everything after the return two lines below,
  // then uncomment the following two lines
  // console.log('userSelectedItemsByStore is:::', userSelectedItemsByStore);
  // return userSelectedItemsByStore;

  Object.keys(USI).forEach(key => {
    USI[key].store
      ? userSelectedItemsByUnsortedStores[USI[key].store].push(USI[key])
      : userSelectedItemsByUnsortedStores.noStore.push(USI[key]);
  });
  // ?: does each store key in userSelectedItemsByStore get pushed to correctly?
  // A: YES IT DOES! Comment out everything after the return two lines below,
  // then uncomment the following two lines
  // console.log('userSelectedItemsByStore is:::', userSelectedItemsByStore);
  // return userSelectedItemsByStore;

  stores.forEach(store => {
    userSelectedItemsBySortedStores.push({
      [store]: userSelectedItemsByUnsortedStores[store]
    });
  });
  return userSelectedItemsBySortedStores;
  // return userSelectedItemsByUnsortedStores;
};
