<template lang="pug">
  body.p1.sm-p2.md-p3.bg-texture.flex.flex-column
    TheHeader
    TheGroceryList
    TheFooter
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheGroceryList from './TheGroceryList.vue';
import TheFooter from './TheFooter.vue';

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
    TheGroceryList,
    TheFooter
  }
};
</script>
