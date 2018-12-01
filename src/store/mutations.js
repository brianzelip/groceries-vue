import Vue from 'vue';

// SET
export const SET_ALL_POSSIBLE_GROCERY_ITEMS = (state, payload) => {
  Vue.set(state, 'allPossibleGroceryItems', payload);
};

export const ADD_ITEM_TO_USER_SELECTED_ITEMS = (state, payload) => {
  Vue.set(state.userSelectedItems, payload._id, payload);
};

export const UPDATE_ITEM_IN_USER_SELECTED_ITEMS = (state, payload) => {
  //payload should be: { _id, key, value }
  Vue.set(state.userSelectedItems[payload._id], payload.key, payload.value);
};

export const UPDATE_ITEM_QTY = (state, payload) => {
  state.userSelectedItems[payload._id].qty = payload.qty;
};

export const UPDATE_ITEM_STORE = (state, payload) => {
  state.userSelectedItems[payload._id].store = payload.store;
  payload.storeArea
    ? (state.userSelectedItems[payload._id][`${payload.store}Area`] =
        payload.storeArea)
    : null;
};

export const RESET_USER_SELECTED_ITEMS = state => {
  Vue.set(state, 'userSelectedItems', {});
};

// DELETE
export const REMOVE_ITEM_IN_USER_SELECTED_ITEMS = (state, _id) => {
  delete state.userSelectedItems[_id];
};
