<template>
  <div class="mb2 sm-mb0 order-1 sm-order-2">
    <router-link
      @click.native="resetState"
      class="btn btn-outline block fw400 center blue"
      to="/add"
    >+ add item</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["flashes"])
  },
  methods: {
    ...mapActions(["resetFlashes"]),
    resetState() {
      if (this.flashes.length > 0) {
        this.resetFlashes();
      }
    }
  }
};
</script>
