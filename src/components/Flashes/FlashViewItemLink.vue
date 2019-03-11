<template>
  <router-link
    :to="`/edit/${_id}`"
    @click.native="setState"
  >View item →</router-link>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["_id"],
  computed: {
    ...mapGetters(["currentItemFormItem"])
  },
  methods: {
    ...mapActions(["setItemFormItem"]),
    setState() {
      const item = this.currentItemFormItem(this._id)[0];
      this.setItemFormItem(item);
    }
  }
};
</script>

