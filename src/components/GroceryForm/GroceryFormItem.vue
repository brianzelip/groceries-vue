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
    <p style="margin-right: 1rem;">{{ test }}</p>
    <p>{{ itemData() }}</p>
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
      store: this.item.defaultStore || null,
      test: 100
    };
  },
  methods: {
    updateQty(qtyFromQtySelector) {
      this.qty = qtyFromQtySelector;
    },
    updateStore(storeFromStoresSelector) {
      this.store = storeFromStoresSelector;
    },
    addItemDataToTheGroceryForm() {
      this.test = this.test + 1;
    },
    removeItemDataFromTheGroceryForm() {
      this.test = this.test - 1;
    },
    itemData() {
      return {
        origin: 'this.itemData',
        isSelected: this.isSelected,
        name: this.name,
        qty: this.qty,
        store: this.store,
        test: this.test
      };
    }
  },
  watch: {
    isSelected() {
      let selectedCount = 0;
      this.isSelected
        ? (this.addItemDataToTheGroceryForm(),
          console.log(`isSelected is TRUE for ${this.name}!`))
        : (this.removeItemDataFromTheGroceryForm(),
          console.log(`isSelected is FALSE for ${this.name}!`));
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
