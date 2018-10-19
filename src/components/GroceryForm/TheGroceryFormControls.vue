<template>
  <div class="controls flex flex-column sm-flex-row justify-between flex-wrap">
    <div class="flex flex-center order-2 sm-order-1">
      <input type="submit" value="submit" class="btn btn-primary bg-blue fw400">
      <TheGroceryFormEmailSelector></TheGroceryFormEmailSelector>
    </div>
    <div class="mb2 sm-mb0 order-1 sm-order-2">
      <a href="/add" class="btn btn-outline block fw400 center blue">+ add item</a>
    </div>
  </div>
</template>

<script>
import TheGroceryFormEmailSelector from './TheGroceryFormEmailSelector.vue';

export default {
  components: {
    TheGroceryFormEmailSelector
  }
};
</script>
