<template>
  <input
    @click.prevent="create"
    class="mt2 btn btn-primary bg-blue fw400"
    type="submit"
    value="Save →"
  >
</template>

<script>
// if edit item, save should do something else

import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["itemFormItem"])
  },
  methods: {
    create() {
      axios
        .post("https://groceries-vue-api.glitch.me/create", this.itemFormItem)
        .then(this.$router.push("/"))
        .catch(error => {
          console.log("ERROR!:::", error);
        });
    },
    update() {}
  }
};
</script>
