import axios from 'axios';

export const setAllPossibleGroceryItems = context => {
  axios
    .get('https://groceries-vue-api.glitch.me/get')
    .then(res => {
      console.log('axios.get worked! res.data =', res.data);
      context.commit('setAllPossibleGroceryItems', res.data);
    })
    .catch(error => {
      console.log('ERROR! ->', error);
    });
};

export const addItemToUserSelectedItems = ({ commit }, payload) => {
  commit('addItemToUserSelectedItems', payload);
};

export const removeItemInUserSelectedItems = ({ commit }, payload) => {
  commit('removeItemInUserSelectedItems', payload);
};

export const updateItemQty = ({ commit }, payload) => {
  commit('updateItemQty', payload);
};

export const updateItemStore = ({ commit }, payload) => {
  commit('updateItemStore', payload);
};
