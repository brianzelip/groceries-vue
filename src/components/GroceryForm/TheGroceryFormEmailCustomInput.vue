<template>
  <section>
    <label for="customEmail">send the list here:</label>
    <input
      class="field border"
      id="customEmail"
      placeholder="enter email"
      type="text"
      v-model="email"
    >
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["customEmail"]),
    get() {
      return this.customEmail;
    },
    set(payload) {}
  }
};
</script>
