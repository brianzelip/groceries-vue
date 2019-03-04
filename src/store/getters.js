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
  const sortedUserSelectedItemsBySortedStores = [];

  // First add one obj per store to userSelectedItemsByUnsortedStores,
  // whose key is the store name, and whose value is an empty array.
  stores.forEach(store => (userSelectedItemsByUnsortedStores[store] = []));

  // Next push all item objects to their respective empty store array,
  // using 'noStore' as the store for any items with no associated store
  Object.keys(USI).forEach(key => {
    USI[key].store
      ? userSelectedItemsByUnsortedStores[USI[key].store].push(USI[key])
      : userSelectedItemsByUnsortedStores.noStore.push(USI[key]);
  });

  // Next order the stores for final output.
  stores.forEach(store => {
    userSelectedItemsBySortedStores.push({
      [store]: userSelectedItemsByUnsortedStores[store]
    });
  });

  // Next sort the items in each store array.
  userSelectedItemsBySortedStores.forEach(obj => {
    const store = Object.keys(obj)[0];

    const sortedItems = hasArea(store)
      ? obj[store].sort(compareArea)
      : obj[store].sort(compareName);
    sortedUserSelectedItemsBySortedStores.push({ [store]: sortedItems });

    function hasArea(s) {
      return s === 'tj' || s === 'moms';
    }

    function compareName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }

    function compareArea(a, b) {
      return a[`${store}Area`] - b[`${store}Area`];
    }
  });

  return sortedUserSelectedItemsBySortedStores;
};

export const emailBody = (state, getters) => {
  const storesRef = state.storesRef;
  const USIBS = getters.userSelectedItemsByStore;

  const result = USIBS.reduce((acc, item) => {
    const store = Object.keys(item)[0];
    const items = item[store];
    acc = acc + `${storeTemplate(store, items)}`;
    return acc;
  }, ``);

  function storeTemplate(store, items) {
    return `
    <h1 style="font-size: 1.25rem; font-weight: 400;">${
      store !== 'noStore' ? storesRef[store].name.toLowerCase() : 'other'
    }</h1>
    <ol style="margin-bottom: 2rem; padding-left: 0; list-style: none;">${items
      .map(
        item =>
          `<li>
            <input
              type="checkbox"
              value="${item.name}"
              id="${item.name}"
              name="item">
            <label for="${item.name}">${item.name}${
            item.qty ? ` (x${item.qty})` : ''
          }</label>
          </li>`
      )
      .join('')}
    </ol>`;
  }

  return result;
};

export const itemFormTjOrMomsIsSelected = state => {
  return state.itemFormStoresTjIsSelected
    ? true
    : state.itemFormStoresMomsIsSelected
    ? true
    : false;
};

export const currentItem = state => _id => {
  return state.allPossibleGroceryItems.filter(item => item._id === _id);
};
