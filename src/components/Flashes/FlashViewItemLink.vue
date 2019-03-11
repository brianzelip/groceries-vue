<template>
  <router-link
    :to="`/edit/${_id}`"
    @click.native="setState"
  >View item →</router-link>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  props: ["_id"],
  computed: {
    ...mapState(["flashes"]),
    ...mapGetters(["currentItemFormItem"])
  },
  methods: {
    ...mapActions(["setItemFormItem", "resetFlashes"]),
    setState() {
      const item = this.currentItemFormItem(this._id)[0];
      this.setItemFormItem(item);
      if (this.flashes.length > 0) {
        this.resetFlashes();
      }
    }
  }
};
</script>

