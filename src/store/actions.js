import axios from 'axios';

// GroceryForm actions
export const setAllPossibleGroceryItems = context => {
  axios
    .get('https://groceries-vue-api.glitch.me/get')
    .then(res => {
      console.log('axios.get worked! res.data =', res.data);
      context.commit('SET_ALL_POSSIBLE_GROCERY_ITEMS', res.data);
    })
    .catch(error => {
      console.log('ERROR! ->', error);
    });
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

// ItemForm actions
export const resetNewItem = ({ commit }) => {
  commit('RESET_NEW_ITEM');
};

export const setNewItemName = ({ commit }, payload) => {
  commit('SET_NEW_ITEM_NAME', payload);
};

export const setNewItemStores = ({ commit }, payload) => {
  commit('SET_NEW_ITEM_STORES', payload);
};

export const setNewItemDefaultStore = ({ commit }, payload) => {
  commit('SET_NEW_ITEM_DEFAULT_STORE', payload);
};

export const setNewItemTjArea = ({ commit }, payload) => {
  commit('SET_NEW_ITEM_TJ_AREA', payload);
};

export const setNewItemMomsArea = ({ commit }, payload) => {
  commit('SET_NEW_ITEM_MOMS_AREA', payload);
};

export const setItemFormStoresTjIsSelected = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_STORES_TJ_IS_SELECTED', payload);
};

export const setItemFormStoresMomsIsSelected = ({ commit }, payload) => {
  commit('SET_ITEM_FORM_STORES_MOMS_IS_SELECTED', payload);
};
