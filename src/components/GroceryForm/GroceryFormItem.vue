<template>
  <li class="item">
    <GroceryFormItemEditLink></GroceryFormItemEditLink>
    <GroceryFormItemCheckboxInput :slug="item.slug"></GroceryFormItemCheckboxInput>
    <GroceryFormItemCheckboxLabel
      :slug="item.slug"
      :name="item.name"
      v-on:item-selection-change="isSelected = !isSelected"
    ></GroceryFormItemCheckboxLabel>
    <GroceryFormItemQtySelector
      v-if="isSelected"
      :_id="item._id"
      :slug="item.slug"
      v-on:item-qty-change="updateQty"
    ></GroceryFormItemQtySelector>
    <GroceryFormItemStoresSelector
      v-if="isSelected"
      :stores="item.stores"
      :slug="item.slug"
      :default-store="item.defaultStore"
      v-on:item-store-change="updateStore"
    ></GroceryFormItemStoresSelector>
  </li>
</template>

<script>
import { mapActions } from "vuex";

import GroceryFormItemEditLink from "./GroceryFormItemEditLink.vue";
import GroceryFormItemCheckboxInput from "./GroceryFormItemCheckboxInput.vue";
import GroceryFormItemCheckboxLabel from "./GroceryFormItemCheckboxLabel.vue";
import GroceryFormItemQtySelector from "./GroceryFormItemQtySelector.vue";
import GroceryFormItemStoresSelector from "./GroceryFormItemStoresSelector.vue";

export default {
  data() {
    return {
      _id: this.item._id,
      isSelected: false,
      name: this.item.name,
      qty: 1,
      store: this.item.defaultStore || null,
      tjArea: this.item.tjArea,
      momsArea: this.item.momsArea
    };
  },
  methods: {
    updateQty(qtyFromQtySelector) {
      this.qty = qtyFromQtySelector;
    },
    updateStore(storeFromStoresSelector) {
      this.store = storeFromStoresSelector;
    },
    hasStoreArea() {
      return this[`${this.store}Area`];
    },
    getStoreArea() {
      return `${this[`${this.store}Area`]}`;
    },
    storeArea() {
      this.hasStoreArea()
        ? (this.$store.state.userSelectedItems[this.item._id][
            `${this.store}Area`
          ] = this.getStoreArea())
        : null;
      return;
    },
    ...mapActions([
      "addItemToUserSelectedItems",
      "removeItemInUserSelectedItems",
      "updateItemStore"
    ])
  },
  watch: {
    isSelected() {
      this.isSelected
        ? this.addItemToUserSelectedItems({
            _id: this.item._id,
            name: this.name,
            qty: this.qty,
            store: this.store,
            tjArea: this.tjArea,
            momsArea: this.momsArea
          })
        : this.removeItemInUserSelectedItems(this.item._id);
    },
    qty() {
      this.updateItemQty({ _id: this.item._id, qty: this.qty });
    },
    store() {
      this.updateItemStore({
        _id: this.item._id,
        store: this.store
        // storeArea: this.hasStoreArea() ? this[`${store}Area`] : null
      });
    }
  },
  components: {
    GroceryFormItemEditLink,
    GroceryFormItemCheckboxInput,
    GroceryFormItemCheckboxLabel,
    GroceryFormItemQtySelector,
    GroceryFormItemStoresSelector
  },
  props: ["item"]
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
