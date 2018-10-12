<template lang="pug">
  form(action="/submit" method="POST")
    ol.list-reset.border.rounded
      each item in [1, 2, 3]
        li.item
          GroceryFormItemCheckboxAndText
          GroceryFormItemQtySelector
          GroceryFormItemStoresSelector
    div
      pre {{ items }}
</template>

<script>
import GroceryFormItemCheckboxAndText from './GroceryFormItemCheckboxAndText.vue';
import GroceryFormItemQtySelector from './GroceryFormItemQtySelector.vue';
import GroceryFormItemStoresSelector from './GroceryFormItemStoresSelector.vue';

import axios from 'axios';

export default {
  data() {
    return {
      items: ''
    };
  },
  components: {
    GroceryFormItemCheckboxAndText,
    GroceryFormItemQtySelector,
    GroceryFormItemStoresSelector
  },
  created() {
    axios
      .get('https://groceries-vue-api.glitch.me/get')
      .then(res => {
        console.log('this.$http worked!', res);
        this.items = res.data;
      })
      .catch(error => {
        console.log('ERROR! ->', error);
      });
  }
};
</script>
