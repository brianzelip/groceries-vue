<template>
  <input
    @click.prevent="postData"
    class="mt2 btn btn-primary bg-blue fw400"
    type="submit"
    value="Save →"
  >
</template>

<script>
import axios from "axios";

export default {
  methods: {
    post() {
      // TODO
      // submit state.newItem to back end api
      // ie (via TheGroceryForm.vue):
      // axios
      //   .post("https://groceries-vue-api.glitch.me/submit", {
      //     html: this.emailBody
      //   })
      //   .then(console.log("axios.post just posted HELLO WORLD!"))
      //   .then(this.$router.push("/submit"))
      //   .catch(error => {
      //     console.log("ERROR! ->", error);
      //   });
    }
  }
};
</script>
