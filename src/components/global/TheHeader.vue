<template lang="pug">
  header
    .container.sm-flex.justify-between.mb2
      .sm-flex.flex-center.flex-wrap.mb2.sm-mb0
        h1.m0.lh1
          a(@click="resetApp").fw400.pointer groceries
        h2.mt0.mb0.sm-ml1.h3.fw400.lh1
          a(@click="resetApp").fw400.pointer make a list and send it
      div(v-if="showAddItemBtn").none.sm-block
        AddItemBtn
</template>

<script>
import { mapState, mapActions } from "vuex";
import AddItemBtn from "./AddItemBtn.vue";

export default {
  components: {
    AddItemBtn
  },
  computed: {
    ...mapState(["flashes"]),
    showAddItemBtn() {
      return this.$route.name === "add" ? false : true;
    }
  },
  methods: {
    ...mapActions(["resetUserSelectedItems", "resetFlashes"]),
    resetApp() {
      this.$route.name === "home"
        ? (this.resetUserSelectedItems(),
          this.flashes.length > 0 ? this.resetFlashes() : null)
        : (this.resetUserSelectedItems(),
          this.resetFlashes(),
          this.$router.push("/"));
    }
  }
};
</script>
