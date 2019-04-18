import axios from 'axios';

// GroceryForm actions
export const setAllPossibleGroceryItems = ({ state, commit }) => {
  commit('SET_SHOW_LOADER');
  axios
    .get(`${state.api}/get`)
    .then(res => {
      console.log('axios.get worked! res.data =', res.data);
      commit('SET_SHOW_LOADER');
      commit('SET_ALL_POSSIBLE_GROCERY_ITEMS', res.data);
    })
    .catch(error => {
      console.log('ERROR! ->', error);
    });
};

export const setShowLoader = ({ commit }, payload) => {
  //payload is a boolean
  commit('SET_SHOW_LOADER', payload);
};

export const addItemToUserSelectedItems = ({ commit }, payload) => {
  //payload is an item object
  commit('ADD_ITEM_TO_USER_SELECTED_ITEMS', payload);
};

export const updateItemInUserSelectedItems = ({ commit }, payload) => {
  //payload is an object like { _id, key, value }
  commit('UPDATE_ITEM_IN_USER_SELECTED_ITEMS', payload);
};

export const resetUserSelectedItems = ({ commit }) => {
  commit('RESET_USER_SELECTED_ITEMS');
};

export const removeItemFromUserSelectedItems = ({ commit }, payload) => {
  //payload is an item _id string
  commit('REMOVE_ITEM_FROM_USER_SELECTED_ITEMS', payload);
};

export const setEmailTo = ({ commit }, payload) => {
  commit('SET_EMAIL_TO', payload);
};

export const resetEmailTo = ({ commit }) => {
  commit('RESET_EMAIL_TO');
};

export const setCustomEmail = ({ commit }, payload) => {
  commit('SET_CUSTOM_EMAIL', payload);
};

export const resetCustomEmail = ({ commit }) => {
  commit('RESET_CUSTOM_EMAIL');
};

// ItemForm actions
export const resetItemFormItem = ({ commit }) => {
  commit('RESET_ITEM_FORM_ITEM');
};

export const setItemFormItem = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_ITEM', payload);
};

export const setItemFormItemName = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_ITEM_NAME', payload);
};

export const setItemFormItemStores = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_ITEM_STORES', payload);
};

export const setItemFormItemDefaultStore = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_ITEM_DEFAULT_STORE', payload);
};

export const setItemFormItemTjArea = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_ITEM_TJ_AREA', payload);
};

export const setItemFormItemMomsArea = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_ITEM_MOMS_AREA', payload);
};

export const setItemFormStoresTjIsSelected = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_STORES_TJ_IS_SELECTED', payload);
};

export const setItemFormStoresMomsIsSelected = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_STORES_MOMS_IS_SELECTED', payload);
};
