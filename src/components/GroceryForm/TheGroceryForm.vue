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
    <TheGroceryFormControls v-on:form-submitted="submitForm"></TheGroceryFormControls>
    <hr>
    <h3>usiArrStores:</h3>
    <pre>{{ usiArrStores }}</pre>
  </form>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

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
    ...mapState(["allPossibleGroceryItems", "userSelectedItems"]),
    ...mapGetters(["usiArrStores"])
  },
  methods: {
    ...mapActions(["setAllPossibleGroceryItems"]),
    submitForm() {
      console.log("now `submitForm()` is in control!");
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
    }
  },
  created() {
    this.setAllPossibleGroceryItems();
  }
};
</script>
