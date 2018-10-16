<template>
  <form action="/submit" method="POST">
    <ol class="list-reset border rounded">
      <li class="item" v-for="item in allGroceryItems" v-bind:key="item._id">
        <GroceryFormItemEditLink></GroceryFormItemEditLink>
        <GroceryFormItemCheckboxInput :slug="item.slug"></GroceryFormItemCheckboxInput>
        <GroceryFormItemCheckboxLabel :slug="item.slug" :name="item.name"></GroceryFormItemCheckboxLabel>
        <GroceryFormItemQtySelector :slug="item.slug"></GroceryFormItemQtySelector>
        <GroceryFormItemStoresSelector
          :stores="item.stores"
          :slug="item.slug"
          :default-store="item.defaultStore"></GroceryFormItemStoresSelector>
      </li>
    </ol>
  </form>
</template>

<script>
import axios from 'axios';

import GroceryFormItemEditLink from './GroceryFormItemEditLink.vue';
import GroceryFormItemCheckboxInput from './GroceryFormItemCheckboxInput.vue';
import GroceryFormItemCheckboxLabel from './GroceryFormItemCheckboxLabel.vue';
import GroceryFormItemQtySelector from './GroceryFormItemQtySelector.vue';
import GroceryFormItemStoresSelector from './GroceryFormItemStoresSelector.vue';

export default {
  data() {
    return {};
  },
  components: {
    GroceryFormItemEditLink,
    GroceryFormItemCheckboxInput,
    GroceryFormItemCheckboxLabel,
    GroceryFormItemQtySelector,
    GroceryFormItemStoresSelector
  },
  computed: {
    allGroceryItems() {
      return this.$store.state.allGroceryItems;
    },
    allGroceryItemsCount() {
      return this.$store.getters.allGroceryItemsCount;
    }
  },
  getters: {},
  created() {
    axios
      .get('https://groceries-vue-api.glitch.me/get')
      .then(res => {
        console.log('axio.get worked! res.data =', res.data);
        console.log(`typeof res.data = ${typeof res.data}`);

        const groceryData = res.data;
        console.log('groceryData =', groceryData);
        console.log(`typeof groceryData = ${typeof groceryData}`);

        const newData = res.data.map(obj => obj);
        console.log('newData', newData);
        return newData;
      })
      .then(data => {
        console.log('data from second then() =', data);
        return data;
      })
      .then(data => (this.$store.state.allGroceryItems = data))
      .catch(error => {
        console.log('ERROR! ->', error);
      });
  }
};
</script>
