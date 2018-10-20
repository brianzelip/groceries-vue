<template lang="pug">
  body.p1.sm-p2.md-p3.bg-texture.flex.flex-column
    slot(name="flashes")
    TheHeader
    main
      .container
        slot(name="main")
    TheFooter
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheGroceryForm from '../GroceryForm/TheGroceryForm.vue';
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
