import { assertJSX } from 'babel-types';

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

  Object.keys(USI).forEach(key => {
    USI[key].store
      ? userSelectedItemsByUnsortedStores[USI[key].store].push(USI[key])
      : userSelectedItemsByUnsortedStores.noStore.push(USI[key]);
  });

  stores.forEach(store => {
    userSelectedItemsBySortedStores.push({
      [store]: userSelectedItemsByUnsortedStores[store]
    });
  });
  return userSelectedItemsBySortedStores;
};

export const sortedItemsBySortedStores = (state, getters) => {
  const USIBS = getters.userSelectedItemsByStore;
  const result = [];

  // return USIBS.map(item => item);

  // return `USIBS.map(item => item) == USIBS ::: ${USIBS.map(item => item) ==
  //   USIBS}`;

  function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  USIBS.forEach(obj => {
    Object.keys(obj).forEach(key => {
      const items = obj[key];
      const sortedItems = items.sort(compare);
      result.push({ [`${key}`]: sortedItems });
    });
  });

  return result;
};
