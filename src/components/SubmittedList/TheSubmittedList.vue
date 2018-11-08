<template>
  <div>
    <h2 class="fw400">it worked 🎉</h2>
    <h3 class="fw400">here's what the email sent to XXX looks like:</h3>
    <hr>
    <pre>{{ userSelectedItems }}</pre>
    <button class="btn btn-primary" @click="resetUSI">reset userSelectedItems</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  methods: {
    resetUSI() {
      this.$store.commit('resetUserSelectedItems');
    }
  },
  computed: {
    ...mapGetters(['userSelectedItems'])
  }
};
</script>
