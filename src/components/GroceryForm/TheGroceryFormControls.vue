<template>
  <div class="flex flex-column sm-flex-row justify-between flex-wrap">
    <div class="flex flex-center order-2 sm-order-1">
      <input
        @click.prevent="submitForm"
        class="btn btn-primary bg-blue fw400"
        type="submit"
        value="submit"
      >
      <!-- <TheGroceryFormEmailSelector></TheGroceryFormEmailSelector> -->
      <TheGroceryFormEmailCustomInput></TheGroceryFormEmailCustomInput>
    </div>
    <GroceryFormAddItemBtn></GroceryFormAddItemBtn>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";

import TheGroceryFormEmailSelector from "./TheGroceryFormEmailSelector.vue";
import TheGroceryFormEmailCustomInput from "./TheGroceryFormEmailCustomInput.vue";
import GroceryFormAddItemBtn from "../global/AddItemBtn.vue";

export default {
  components: {
    TheGroceryFormEmailSelector,
    TheGroceryFormEmailCustomInput,
    GroceryFormAddItemBtn
  },
  computed: {
    ...mapState(["api", "emailTo", "customEmail"]),
    ...mapGetters(["emailBody"])
  },
  methods: {
    submitForm() {
      let recipients;
      if (this.emailTo.length === 0) {
        recipients = this.customEmail;
      } else {
        recipients = emailTo;
      }
      axios
        .post(`${this.api}/submit`, {
          html: this.emailBody,
          recipients
        })
        .then(
          console.log(
            `axios just posted to api, the recipients are: ${recipients}`
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
