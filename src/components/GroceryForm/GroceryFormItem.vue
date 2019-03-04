<template>
  <li class="item">
    <GroceryFormItemEditLink :_id="item._id"></GroceryFormItemEditLink>

    <GroceryFormItemCheckboxInput :slug="item.slug"></GroceryFormItemCheckboxInput>

    <GroceryFormItemCheckboxLabel
      :item="item"
      v-on:item-selection-change="isSelected = !isSelected"
    ></GroceryFormItemCheckboxLabel>

    <GroceryFormItemQtySelector
      :_id="item._id"
      :slug="item.slug"
      v-if="isSelected"
    ></GroceryFormItemQtySelector>

    <GroceryFormItemStoresSelector
      :_id="item._id"
      :default-store="item.defaultStore"
      :slug="item.slug"
      :stores="item.stores"
      v-if="isSelected"
    ></GroceryFormItemStoresSelector>
  </li>
</template>

<script>
import GroceryFormItemEditLink from "./GroceryFormItemEditLink.vue";
import GroceryFormItemCheckboxInput from "./GroceryFormItemCheckboxInput.vue";
import GroceryFormItemCheckboxLabel from "./GroceryFormItemCheckboxLabel.vue";
import GroceryFormItemQtySelector from "./GroceryFormItemQtySelector.vue";
import GroceryFormItemStoresSelector from "./GroceryFormItemStoresSelector.vue";

export default {
  data() {
    return {
      isSelected: false
    };
  },
  props: ["item"],
  components: {
    GroceryFormItemEditLink,
    GroceryFormItemCheckboxInput,
    GroceryFormItemCheckboxLabel,
    GroceryFormItemQtySelector,
    GroceryFormItemStoresSelector
  }
};
</script>

<style>
.item {
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #3498db;
}
.item:last-child {
  border: 0;
}
</style>
