<template>
  <form action="/submit" method="POST">
    <ol class="list-reset border rounded">
      <template v-for="item in allGroceryItems">
				<GroceryFormItem :item="item" :key="item._id"></GroceryFormItem>
			</template>
    </ol>
    <TheGroceryFormControls></TheGroceryFormControls>
  </form>
</template>

<script>
import axios from 'axios';

import GroceryFormItem from './GroceryFormItem.vue';
import TheGroceryFormControls from './TheGroceryFormControls.vue';

export default {
  data() {
    return {};
  },
  components: {
    GroceryFormItem,
    TheGroceryFormControls
  },
  computed: {
    allGroceryItems() {
      return this.$store.state.allGroceryItems;
    },
    allGroceryItemsCount() {
      return this.$store.getters.allGroceryItemsCount;
    }
  },
  getters: {},
  created() {
    axios
      .get('https://groceries-vue-api.glitch.me/get')
      .then(res => {
        console.log('axios.get worked! res.data =', res.data);
        this.$store.state.allGroceryItems = res.data;
      })
      .catch(error => {
        console.log('ERROR! ->', error);
      });
  }
};
</script>
