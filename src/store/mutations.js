import Vue from 'vue';

/* GroceryForm mutations */

// SET
export const SET_ALL_POSSIBLE_GROCERY_ITEMS = (state, payload) => {
  //payload is a data array
  Vue.set(state, 'allPossibleGroceryItems', payload);
};

export const ADD_ITEM_TO_USER_SELECTED_ITEMS = (state, payload) => {
  //payload is an item object
  Vue.set(state.userSelectedItems, payload._id, payload);
};

export const UPDATE_ITEM_IN_USER_SELECTED_ITEMS = (state, payload) => {
  //payload is an object like { _id, key, value }
  Vue.set(state.userSelectedItems[payload._id], payload.key, payload.value);
};

export const RESET_USER_SELECTED_ITEMS = state => {
  Vue.set(state, 'userSelectedItems', {});
};

// DELETE
export const REMOVE_ITEM_FROM_USER_SELECTED_ITEMS = (state, payload) => {
  //payload is an item _id string
  Vue.delete(state.userSelectedItems, payload);
};

/* ItemForm mutations */

// SET
export const RESET_NEW_ITEM = state => {
  Vue.set(state, 'newItem', {
    name: '',
    stores: [],
    tjArea: null,
    momsArea: null,
    defaultStore: ''
  });
};
