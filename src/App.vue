<template lang="pug">
  TheBaseLayout
    TheGroceryForm(slot="main")
</template>

<script>
import TheBaseLayout from './components/layout/TheBaseLayout.vue';
import TheGroceryForm from './components/GroceryForm/TheGroceryForm.vue';

export default {
  data() {
    return {};
  },
  components: {
    TheBaseLayout,
    TheGroceryForm
  }
};
</script>
