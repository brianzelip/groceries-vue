<template>
  <form method="POST">
    <TheLoader v-if="showLoader"></TheLoader>
    <template v-else>
      <ol class="list-reset border rounded">
        <template v-for="item in allPossibleGroceryItems">
          <GroceryFormItem
            :item="item"
            :key="item._id"
          ></GroceryFormItem>
        </template>
      </ol>
      <TheGroceryFormControls></TheGroceryFormControls>
    </template>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";

import TheLoader from "../Loader/TheLoader.vue";
import GroceryFormItem from "./GroceryFormItem.vue";
import TheGroceryFormControls from "./TheGroceryFormControls.vue";

export default {
  props: ["flash"],
  components: {
    TheLoader,
    GroceryFormItem,
    TheGroceryFormControls
  },
  computed: {
    ...mapState(["showLoader", "allPossibleGroceryItems"])
  },
  methods: {
    ...mapActions([
      "setAllPossibleGroceryItems",
      "resetEmailTo",
      "resetCustomEmail"
    ])
  },
  created() {
    this.setAllPossibleGroceryItems();
    this.resetEmailTo();
    this.resetCustomEmail();
  }
};
</script>
