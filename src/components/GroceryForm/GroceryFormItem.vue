<template>
	<li class="item">
    <GroceryFormItemEditLink></GroceryFormItemEditLink>
    <GroceryFormItemCheckboxInput
      :slug="item.slug">
      </GroceryFormItemCheckboxInput>
    <GroceryFormItemCheckboxLabel
      :slug="item.slug"
      :name="item.name"
      v-on:item-selection-change="isSelected = !isSelected">
      </GroceryFormItemCheckboxLabel>
    <GroceryFormItemQtySelector 
      v-if="isSelected"
      :slug="item.slug"
      v-on:item-qty-change="updateQty">
      </GroceryFormItemQtySelector>
    <GroceryFormItemStoresSelector 
      v-if="isSelected" 
      :stores="item.stores" 
      :slug="item.slug" 
      :default-store="item.defaultStore"
      v-on:item-store-change="updateStore">
      </GroceryFormItemStoresSelector>
  </li>
</template>

<script>
import GroceryFormItemEditLink from './GroceryFormItemEditLink.vue';
import GroceryFormItemCheckboxInput from './GroceryFormItemCheckboxInput.vue';
import GroceryFormItemCheckboxLabel from './GroceryFormItemCheckboxLabel.vue';
import GroceryFormItemQtySelector from './GroceryFormItemQtySelector.vue';
import GroceryFormItemStoresSelector from './GroceryFormItemStoresSelector.vue';

export default {
  data() {
    return {
      isSelected: false,
      name: this.item.name,
      qty: 1,
      store: this.item.defaultStore || null
    };
  },
  methods: {
    updateQty(qty) {
      this.qty = qty;
    },
    updateStore(s) {
      this.store = s;
    }
  },
  components: {
    GroceryFormItemEditLink,
    GroceryFormItemCheckboxInput,
    GroceryFormItemCheckboxLabel,
    GroceryFormItemQtySelector,
    GroceryFormItemStoresSelector
  },
  props: ['item']
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
