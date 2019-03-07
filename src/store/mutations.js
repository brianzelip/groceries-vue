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

export const SET_EMAIL_TO = (state, payload) => {
  Vue.set(state, 'emailTo', payload);
};

export const RESET_EMAIL_TO = state => {
  Vue.set(state, 'emailTo', []);
};

// DELETE
export const REMOVE_ITEM_FROM_USER_SELECTED_ITEMS = (state, payload) => {
  //payload is an item _id string
  Vue.delete(state.userSelectedItems, payload);
};

/* ItemForm mutations */

// SET
export const RESET_ITEM_FORM_ITEM = state => {
  Vue.set(state, 'itemFormItem', {
    name: '',
    stores: [],
    tjArea: null,
    momsArea: null,
    defaultStore: ''
  });

  Vue.set(state, 'itemFormStoresTjIsSelected', false);

  Vue.set(state, 'itemFormStoresMomsIsSelected', false);
};

export const SET_ITEM_FORM_ITEM = (state, payload) => {
  Vue.set(state, 'itemFormItem', payload);

  payload.tjArea != null
    ? Vue.set(state, 'itemFormStoresTjIsSelected', true)
    : null;

  payload.momsArea != null
    ? Vue.set(state, 'itemFormStoresMomsIsSelected', true)
    : null;
};

export const SET_ITEM_FORM_ITEM_NAME = (state, payload) => {
  Vue.set(state.itemFormItem, 'name', payload);
};

export const SET_ITEM_FORM_ITEM_STORES = (state, payload) => {
  Vue.set(state.itemFormItem, 'stores', payload);
};

export const SET_ITEM_FORM_ITEM_DEFAULT_STORE = (state, payload) => {
  Vue.set(state.itemFormItem, 'defaultStore', payload);
};

export const SET_ITEM_FORM_ITEM_TJ_AREA = (state, payload) => {
  Vue.set(state.itemFormItem, 'tjArea', payload);
};

export const SET_ITEM_FORM_ITEM_MOMS_AREA = (state, payload) => {
  Vue.set(state.itemFormItem, 'momsArea', payload);
};

export const SET_ITEM_FORM_STORES_TJ_IS_SELECTED = (state, payload) => {
  Vue.set(state, 'itemFormStoresTjIsSelected', payload);
};

export const SET_ITEM_FORM_STORES_MOMS_IS_SELECTED = (state, payload) => {
  Vue.set(state, 'itemFormStoresMomsIsSelected', payload);
};
