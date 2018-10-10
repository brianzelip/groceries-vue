<template lang="pug">
  form(action="/submit" method="POST")
    ol.list-reset.border.rounded
      each item in [1, 2, 3]
        li.item
          TheGroceryFormItemCheckboxAndText
          TheGroceryFormItemQtySelector
          TheGroceryFormItemStoresSelector
</template>

<script>
import TheGroceryFormItemCheckboxAndText from './TheGroceryFormItemCheckboxAndText.vue';
import TheGroceryFormItemQtySelector from './TheGroceryFormItemQtySelector.vue';
import TheGroceryFormItemStoresSelector from './TheGroceryFormItemStoresSelector.vue';

export default {
  data() {
    return {};
  },
  components: {
    TheGroceryFormItemCheckboxAndText,
    TheGroceryFormItemQtySelector,
    TheGroceryFormItemStoresSelector
  }
};
</script>
