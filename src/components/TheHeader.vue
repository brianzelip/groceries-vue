<template lang="pug">
  header
    .container.sm-flex.justify-between.mb2
      .sm-flex.flex-center.flex-wrap.mb2.sm-mb0
        h1.m0.lh1
          a(href="/").fw400 groceries
        h2.mt0.mb0.sm-ml1.h3.fw400.lh1
          a(href="/").fw400 make a list and send it
      slot(name="headerAddBtn")
        .none.sm-block
          GroceryFormAddItemBtn
</template>

<script>
import GroceryFormAddItemBtn from './GroceryForm/GroceryFormAddItemBtn.vue';

export default {
  components: {
    GroceryFormAddItemBtn
  }
};
</script>
