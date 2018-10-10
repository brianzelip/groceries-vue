<template lang="pug">
  li.item
    GroceryFormItemCheckboxAndText
    GroceryFormItemQtySelector
    GroceryFormItemStoresSelector
</template>

<script>
import GroceryFormItemCheckboxAndText from './GroceryFormItemCheckboxAndText.vue';
import GroceryFormItemQtySelector from './GroceryFormItemQtySelector.vue';
import GroceryFormItemStoresSelector from './GroceryFormItemStoresSelector.vue';

export default {
  data() {
    return {};
  },
  components: {
    GroceryFormItemCheckboxAndText,
    GroceryFormItemQtySelector,
    GroceryFormItemStoresSelector
  }
};
</script>
