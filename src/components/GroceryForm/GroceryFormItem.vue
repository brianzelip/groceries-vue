<template>
	<li class="item">
		<GroceryFormItemEditLink></GroceryFormItemEditLink>
		<GroceryFormItemCheckboxInput :slug="item.slug"></GroceryFormItemCheckboxInput>
		<GroceryFormItemCheckboxLabel :slug="item.slug" :name="item.name"></GroceryFormItemCheckboxLabel>
		<GroceryFormItemQtySelector :slug="item.slug"></GroceryFormItemQtySelector>
		<GroceryFormItemStoresSelector
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
