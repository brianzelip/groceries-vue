<template lang="pug">
  BaseLayout
    TheGroceryForm(slot="main")
</template>

<script>
import BaseLayout from './components/layout/BaseLayout.vue';
import TheGroceryForm from './components/GroceryForm/TheGroceryForm.vue';

export default {
  data() {
    return {};
  },
  components: {
    BaseLayout,
    TheGroceryForm
  }
};
</script>
