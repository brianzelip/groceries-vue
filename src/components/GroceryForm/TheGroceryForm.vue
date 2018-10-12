<template lang="pug">
	form(action="/submit" method="POST")
		ol.list-reset.border.rounded
			li.item(v-for="item in allGroceryItems")
				p {{ item.name }}
				GroceryFormItemCheckboxAndText(v-bind="item")
				GroceryFormItemQtySelector(v-bind="item")
				GroceryFormItemStoresSelector(v-bind="item")
		div
			pre {{ allGroceryItems }}
			h2 allGroceryItemsCount is: {{ allGroceryItemsCount }}
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
  computed: {
    allGroceryItems() {
      return this.$store.state.allGroceryItems;
    },
    allGroceryItemsCount() {
      return this.$store.getters.allGroceryItemsCount;
    }
  },
  created() {
    axios
      .get('https://groceries-vue-api.glitch.me/get')
      .then(res => {
        console.log('this.$http worked!', res);
        this.$store.state.allGroceryItems = res.data;
      })
      .catch(error => {
        console.log('ERROR! ->', error);
      });
  }
};
</script>
