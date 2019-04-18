<template>
  <section>
    <label for="customEmail">send the list to:</label>
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
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["customEmail"]),
    email: {
      get() {
        return this.customEmail;
      },
      set(payload) {
        this.setCustomEmail(payload);
      }
    }
  },
  methods: {
    ...mapActions(["setCustomEmail"])
  }
};
</script>

<style scoped>
section {
  padding: 0 0.5rem;
}
</style>
