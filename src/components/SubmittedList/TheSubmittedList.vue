<template>
  <div>
    <h1>The Submitted List</h1>
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
