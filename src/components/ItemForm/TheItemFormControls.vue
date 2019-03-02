<template>
  <input
    @click.prevent="post"
    class="mt2 btn btn-primary bg-blue fw400"
    type="submit"
    value="Save →"
  >
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["newItem"])
  },
  methods: {
    post() {
      axios
        .post("https://groceries-vue-api.glitch.me/create", this.newItem)
        .then(this.$router.push("/"))
        .catch(error => {
          console.log("ERROR!:::", error);
        });
    }
  }
};
</script>
