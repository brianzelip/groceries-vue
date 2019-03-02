<template>
  <input
    :id="`${store}-area`"
    :key="`input-${store}`"
    :name="`${store}Area`"
    class="block field w-90px mb2"
    type="number"
    v-model="input"
  >
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["store"],
  computed: {
    ...mapState(["newItem"]),
    input: {
      get() {
        return this.newItem[`${this.capFirstLetter(this.store)}Area`];
      },
      set(payload) {
        this[`setNewItem${this.capFirstLetter(this.store)}Area`](payload);
      }
    }
  },
  methods: {
    ...mapActions(["setNewItemTjArea", "setNewItemMomsArea"]),
    capFirstLetter(string) {
      return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
    }
  }
};
</script>

