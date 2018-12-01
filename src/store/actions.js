import axios from 'axios';

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
  commit('ADD_ITEM_TO_USER_SELECTED_ITEMS', payload);
};

export const removeItemInUserSelectedItems = ({ commit }, payload) => {
  commit('REMOVE_ITEM_IN_USER_SELECTED_ITEMS', payload);
};

export const updateItemQty = ({ commit }, payload) => {
  commit('UPDATE_ITEM_QTY', payload);
};

export const updateItemStore = ({ commit }, payload) => {
  commit('UPDATE_ITEM_STORE', payload);
};

export const updateItemInUserSelectedItems = ({ commit }, payload) => {
  commit('UPDATE_ITEM_IN_USER_SELECTED_ITEMS', payload);
};
