<template>
  <input
    :id="`${store}-area`"
    :key="`input-${store}`"
    :name="`${store}Area`"
    class="block field w-90px mb2"
    type="number"
    v-model.number="input"
  >
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["store"],
  computed: {
    ...mapState(["itemFormItem"]),
    input: {
      get() {
        return this.itemFormItem[`${this.store}Area`];
      },
      set(payload) {
        this[`setItemFormItem${this.capFirstLetter(this.store)}Area`](payload);
      }
    }
  },
  methods: {
    ...mapActions(["setItemFormItemTjArea", "setItemFormItemMomsArea"]),
    capFirstLetter(string) {
      return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
    }
  }
};
</script>

