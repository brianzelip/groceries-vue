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
    <TheGroceryFormControls v-on:form-submitted="processForm"></TheGroceryFormControls>
  </form>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

import GroceryFormItem from "./GroceryFormItem.vue";
import TheGroceryFormControls from "./TheGroceryFormControls.vue";

export default {
  data() {
    return {};
  },
  components: {
    GroceryFormItem,
    TheGroceryFormControls
  },
  computed: {
    ...mapState(["allPossibleGroceryItems", "userSelectedItems"])
  },
  methods: {
    ...mapActions(["setAllPossibleGroceryItems"]),
    processForm() {
      console.log("now `processForm()` is in control!");
      axios
        .post(
          "https://groceries-vue-api.glitch.me/submit",
          this.userSelectedItems
        )
        .then(console.log("axios.post just posted HELLO WORLD!"))
        .then(this.$router.push("/submit"))
        .catch(error => {
          console.log("ERROR! ->", error);
        });
    },
    postDataForEmail() {
      axios
        .post(
          "https://groceries-vue-api.glitch.me/submit",
          this.$store.getters.userSelectedItems
        )
        .then(console.log("axios.post just worked!"))
        .catch(error => {
          console.log("ERROR! ->", error);
        });
    }
  },
  created() {
    this.setAllPossibleGroceryItems();
  }
};
</script>
