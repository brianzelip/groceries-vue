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
        console.log('axios.get worked! res.data =', res.data);
        this.$store.state.allGroceryItems = res.data;
      })
      .catch(error => {
        console.log('ERROR! ->', error);
      });
  }
};
</script>
