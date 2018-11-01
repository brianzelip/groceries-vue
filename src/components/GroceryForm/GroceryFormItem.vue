<template>
	<li class="item">
		<GroceryFormItemEditLink></GroceryFormItemEditLink>
		<GroceryFormItemCheckboxInput :slug="item.slug"></GroceryFormItemCheckboxInput>
		<GroceryFormItemCheckboxLabel :slug="item.slug" :name="item.name"></GroceryFormItemCheckboxLabel>
		<GroceryFormItemQtySelector v-if="isChecked" :slug="item.slug"></GroceryFormItemQtySelector>
		<GroceryFormItemStoresSelector
			v-if="isChecked"
			:stores="item.stores"
			:slug="item.slug"
			:default-store="item.defaultStore"></GroceryFormItemStoresSelector>
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
      isChecked: true
    };
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
