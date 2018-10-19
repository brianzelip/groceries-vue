<template>
  <div class="flex flex-column sm-flex-row justify-between flex-wrap">
    <div class="flex flex-center order-2 sm-order-1">
      <input type="submit" value="submit" class="btn btn-primary bg-blue fw400">
      <TheGroceryFormEmailSelector></TheGroceryFormEmailSelector>
    </div>
    <GroceryFormAddItemBtn></GroceryFormAddItemBtn>
  </div>
</template>

<script>
import TheGroceryFormEmailSelector from './TheGroceryFormEmailSelector.vue';
import GroceryFormAddItemBtn from './GroceryFormAddItemBtn.vue';

export default {
  components: {
    TheGroceryFormEmailSelector,
    GroceryFormAddItemBtn
  }
};
</script>
