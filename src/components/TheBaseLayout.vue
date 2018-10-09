<template lang="pug">
  body.p1.sm-p2.md-p3.bg-texture.flex.flex-column
    TheHeader
    TheGroceryForm
    TheFooter
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheGroceryForm from './TheGroceryForm.vue';
import TheFooter from './TheFooter.vue';

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
    TheGroceryForm,
    TheFooter
  }
};
</script>
