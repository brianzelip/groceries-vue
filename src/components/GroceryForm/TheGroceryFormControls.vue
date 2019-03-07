<template>
  <div class="flex flex-column sm-flex-row justify-between flex-wrap">
    <div class="flex flex-center order-2 sm-order-1">
      <input
        @click.prevent="submitForm"
        class="btn btn-primary bg-blue fw400"
        type="submit"
        value="submit"
      >
      <TheGroceryFormEmailSelector></TheGroceryFormEmailSelector>
    </div>
    <GroceryFormAddItemBtn></GroceryFormAddItemBtn>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";

import TheGroceryFormEmailSelector from "./TheGroceryFormEmailSelector.vue";
import GroceryFormAddItemBtn from "../global/AddItemBtn.vue";

export default {
  components: {
    TheGroceryFormEmailSelector,
    GroceryFormAddItemBtn
  },
  computed: {
    ...mapState(["api", "emailTo"]),
    ...mapGetters(["emailBody"])
  },
  methods: {
    submitForm() {
      axios
        .post(`${this.api}/submit`, {
          html: this.emailBody,
          recipients: this.emailTo
        })
        .then(
          console.log(
            "axios just posted to api, this.emailTo is: ",
            this.emailTo
          )
        )
        .then(this.$router.push("/submit"))
        .catch(error => {
          console.log("ERROR! ->", error);
        });
    }
  }
};
</script>
