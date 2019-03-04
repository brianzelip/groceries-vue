<template>
  <div id="TheItemFormContainer">
    <h2 class="fw400">{{ heading }}</h2>
    <hr>
    <TheItemForm></TheItemForm>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TheItemForm from "./TheItemForm.vue";

export default {
  components: {
    TheItemForm
  },
  computed: {
    ...mapGetters(["currentItem"]),
    heading() {
      return this.$route.name === "add"
        ? `add item`
        : `edit ${this.currentItem(this.$route.params._id)[0].name}`;
    }
  }
};
</script>
