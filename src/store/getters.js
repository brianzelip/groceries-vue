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

  const userSelectedItemsByStore = {};

  // First create an obj w/ keys for each userSelectedStore,
  // then push all items to their respective store
  // then sort the items within each store via storeArea or alphabetically

  stores.forEach(store => (userSelectedItemsByStore[store] = []));

  // ?: does userSelectedItemsByStore get created correctly?
  // A: YES IT DOES! Comment out everything after the return two lines below,
  // then uncomment the following two lines
  // console.log('userSelectedItemsByStore is:::', userSelectedItemsByStore);
  // return userSelectedItemsByStore;

  Object.keys(USI).forEach(key => {
    USI[key].store
      ? userSelectedItemsByStore[USI[key].store].push(USI[key])
      : userSelectedItemsByStore.noStore.push(USI[key]);
  });
  // ?: does each store key in userSelectedItemsByStore get pushed to correctly?
  // A: YES IT DOES! Comment out everything after the return two lines below,
  // then uncomment the following two lines
  // console.log('userSelectedItemsByStore is:::', userSelectedItemsByStore);
  // return userSelectedItemsByStore;

  // compare function via !MDN, Array/sort#Description
  function compareByName(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  }
  function compareByTJArea(a, b) {
    const nameA = a.tjArea.toUpperCase(); // ignore upper and lowercase
    const nameB = b.tjArea.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  }
  function compareByMomsArea(a, b) {
    const nameA = a.momsArea.toUpperCase(); // ignore upper and lowercase
    const nameB = b.momsArea.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  }

  if (userSelectedItemsByStore.tj) {
    return userSelectedItemsByStore.tj.sort(compareByName);
  }

  return userSelectedItemsByStore;
};
