<template>
  <form method="POST">
    <ol class="list-reset border rounded">
      <template v-for="item in allPossibleGroceryItems">
        <GroceryFormItem
          :item="item"
          :key="item._id"
        ></GroceryFormItem>
      </template>
    </ol>
    <TheGroceryFormControls></TheGroceryFormControls>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";

import GroceryFormItem from "./GroceryFormItem.vue";
import TheGroceryFormControls from "./TheGroceryFormControls.vue";

export default {
  props: ["flash"],
  components: {
    GroceryFormItem,
    TheGroceryFormControls
  },
  computed: {
    ...mapState(["allPossibleGroceryItems"])
  },
  methods: {
    ...mapActions(["setAllPossibleGroceryItems"])
  },
  created() {
    this.setAllPossibleGroceryItems();
  }
};
</script>
