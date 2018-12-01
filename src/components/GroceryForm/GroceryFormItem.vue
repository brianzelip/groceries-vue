<template>
  <li class="item">
    <GroceryFormItemEditLink></GroceryFormItemEditLink>

    <GroceryFormItemCheckboxInput :slug="item.slug"></GroceryFormItemCheckboxInput>

    <GroceryFormItemCheckboxLabel
      :item="item"
      v-on:item-selection-change="isSelected = !isSelected"
    ></GroceryFormItemCheckboxLabel>

    <GroceryFormItemQtySelector v-if="isSelected" :_id="item._id" :slug="item.slug"></GroceryFormItemQtySelector>

    <GroceryFormItemStoresSelector
      v-if="isSelected"
      :_id="item._id"
      :stores="item.stores"
      :slug="item.slug"
      :default-store="item.defaultStore"
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
