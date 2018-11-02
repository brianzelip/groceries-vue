<template>
  <div class="flex flex-column sm-flex-row justify-between flex-wrap">
    <div class="flex flex-center order-2 sm-order-1">
      <input @click.prevent="submitUserSelectedItems" type="submit" value="submit" class="btn btn-primary bg-blue fw400">
      <TheGroceryFormEmailSelector></TheGroceryFormEmailSelector>
    </div>
    <GroceryFormAddItemBtn></GroceryFormAddItemBtn>
  </div>
</template>

<script>
import TheGroceryFormEmailSelector from './TheGroceryFormEmailSelector.vue';
import GroceryFormAddItemBtn from '../global/AddItemBtn.vue';

export default {
  components: {
    TheGroceryFormEmailSelector,
    GroceryFormAddItemBtn
  },
  methods: {
    submitUserSelectedItems() {
      console.log('userSelectedItems submitted!!! 🎉🎉🎉');
    }
  }
};
</script>
