<template>
  <form method="POST">
    <ol class="list-reset border rounded">
			<template v-for="item in allPossibleGroceryItems">
				<GroceryFormItem
          :item="item"
          v-bind:key="item._id">
          </GroceryFormItem>
			</template>
    </ol>
    <TheGroceryFormControls v-on:form-submitted="onSubmit"></TheGroceryFormControls>
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
    allPossibleGroceryItems() {
      return this.$store.state.allPossibleGroceryItems;
    }
  },
  methods: {
    processForm() {},
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
  },
  getters: {},
  created() {
    axios
      .get('https://groceries-vue-api.glitch.me/get')
      .then(res => {
        console.log('axios.get worked! res.data =', res.data);
        this.$store.state.allPossibleGroceryItems = res.data;
      })
      .catch(error => {
        console.log('ERROR! ->', error);
      });
  }
};
</script>
