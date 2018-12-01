import Vue from 'vue';

export const SET_ALL_POSSIBLE_GROCERY_ITEMS = (state, payload) => {
  Vue.set(state, 'allPossibleGroceryItems', payload);
};

export const addItemToUserSelectedItems = (state, payload) => {
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
};

export const removeItemInUserSelectedItems = (state, _id) => {
  delete state.userSelectedItems[_id];
};

export const updateItemInUserSelectedItems = (state, payload) => {};

export const updateItemQty = (state, payload) => {
  state.userSelectedItems[payload._id].qty = payload.qty;
};

export const updateItemStore = (state, payload) => {
  state.userSelectedItems[payload._id].store = payload.store;
  payload.storeArea
    ? (state.userSelectedItems[payload._id][`${payload.store}Area`] =
        payload.storeArea)
    : null;
};

export const resetUserSelectedItems = state => {
  state.userSelectedItems = {};
};
