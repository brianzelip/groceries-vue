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
      _id: this.item._id,
      isSelected: false,
      name: this.item.name,
      qty: 1,
      store: this.item.defaultStore || null
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
      console.log('item +ADDED+ to Grocery Form!');
      this.$emit('add-item-data', this.userSelectedItemData());
    },
    removeItemDataFromTheGroceryForm() {
      this.$emit('remove-item-data', this.item._id);
    },
    userSelectedItemData() {
      return {
        origin: '`this.userSelectedItemData` in GroceryFormItem.vue',
        _id: this.item._id,
        isSelected: this.isSelected,
        name: this.name,
        qty: this.qty,
        store: this.store
      };
    }
  },
  watch: {
    isSelected() {
      this.isSelected
        ? (this.addItemDataToTheGroceryForm(),
          console.log(`isSelected is TRUE for ${this.name}!`))
        : (this.removeItemDataFromTheGroceryForm(),
          console.log(`isSelected is FALSE for ${this.name}!`));
    },
    qty() {
      this.addItemDataToTheGroceryForm();
      console.log(
        `qty just updated for ${
          this.name
        }! So another object of item data for ${
          this.name
        } was sent ^^^ the line!`
      );
    },
    store() {
      this.addItemDataToTheGroceryForm();
      console.log(
        `store just updated for ${
          this.name
        }! So another object of item data for ${
          this.name
        } was sent ^^^ the line!`
      );
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
