<template>
  <div>
    <h2 class="fw400">it worked 🎉</h2>
    <h3 class="fw400">here's what the email sent to XXX looks like:</h3>
    <hr>
    <section v-html="emailBody"></section>
    <button
      @click="resetUSI"
      class="btn btn-primary"
    >reset userSelectedItems</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["emailBody"])
  },
  methods: {
    ...mapActions(["resetUserSelectedItems"]),
    resetUSI() {
      this.resetUserSelectedItems();
    }
  }
};
</script>
