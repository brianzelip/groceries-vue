<template>
  <section>
    <label
      class="block"
      for="name"
    >
      <h1
        class="mt1 h4 regular"
        required
      >name</h1>
    </label>
    <input
      class="col-12 sm-col-8 md-col-6 field"
      id="name"
      name="name"
      type="text"
      v-model="name"
    >
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["newItem"]),
    name: {
      get() {
        return this.newItem.name;
      },
      set(payload) {
        this.setNewItemName(payload);
      }
    }
  },
  methods: {
    ...mapActions(["setNewItemName"])
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 3px;
}
[required]::after {
  content: "*";
  color: var(--purp);
}
</style>

