import Vue from 'vue';

// SET
export const SET_ALL_POSSIBLE_GROCERY_ITEMS = (state, payload) => {
  //payload is a data array
  Vue.set(state, 'allPossibleGroceryItems', payload);
};

export const ADD_ITEM_TO_USER_SELECTED_ITEMS = (state, payload) => {
  //payload is an item object
  Vue.set(state.userSelectedItems, payload._id, payload);
};
export const ADD_ITEM_TO_USI_ARR = (state, payload) => {
  //payload is an item object
  // see docs for this example, at
  // https://vuejs.org/v2/guide/list.html#Caveats
  Vue.set(state.usiArr, state.usiArr.length, payload);
};

export const UPDATE_ITEM_IN_USER_SELECTED_ITEMS = (state, payload) => {
  //payload is an object like { _id, key, value }
  Vue.set(state.userSelectedItems[payload._id], payload.key, payload.value);
};
export const UPDATE_ITEM_IN_USI_ARR = (state, payload) => {
  //payload is an object like { _id, key, value }
  const index = usiArr.findIndex(item => item._id === payload._id);
  Vue.set(state.usiArr[index], payload.key, payload.value);
};

export const RESET_USER_SELECTED_ITEMS = state => {
  Vue.set(state, 'userSelectedItems', {});
};
export const RESET_USI_ARR = state => {
  Vue.set(state, 'usiArr', []);
};

// DELETE
export const REMOVE_ITEM_FROM_USER_SELECTED_ITEMS = (state, payload) => {
  //payload is an item _id string
  Vue.delete(state.userSelectedItems, payload);
};
export const REMOVE_ITEM_FROM_USI_ARR = (state, payload) => {
  //payload is an item _id string
  const index = state.usiArr.findIndex(item => item._id === payload);
  Vue.delete(state.usiArr, index);
};
