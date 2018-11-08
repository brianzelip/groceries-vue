<template>
  <div class="flex flex-column sm-flex-row justify-between flex-wrap">
    <div class="flex flex-center order-2 sm-order-1">
        <!-- @click.prevent="$emit('form-submitted')" -->
      <input
        type="submit"
        value="submit"
        @click.prevent="onSubmit"
        class="btn btn-primary bg-blue fw400">
      <TheGroceryFormEmailSelector></TheGroceryFormEmailSelector>
    </div>
    <GroceryFormAddItemBtn></GroceryFormAddItemBtn>
  </div>
</template>

<script>
import axios from 'axios';

import TheGroceryFormEmailSelector from './TheGroceryFormEmailSelector.vue';
import GroceryFormAddItemBtn from '../global/AddItemBtn.vue';

export default {
  components: {
    TheGroceryFormEmailSelector,
    GroceryFormAddItemBtn
  },
  methods: {
    onSubmit() {
      axios
        .post(
          'https://groceries-vue-api.glitch.me/submit',
          this.$store.getters.userSelectedItems
        )
        .then(console.log('axios.post just worked!'))
        .then(this.$router.push('/submit'))
        .catch(error => {
          console.log('ERROR! ->', error);
        });
    }
  }
};
</script>
