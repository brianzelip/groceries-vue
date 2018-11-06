<template>
  <div>
    <h1>The Submitted List</h1>
    <pre>{{ userSelectedItems }}</pre>
    <button class="btn btn-primary" @click="resetUSI">reset userSelectedItems</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['userSelectedItems'],
  methods: {
    resetUSI() {
      this.$store.commit('resetUserSelectedItems');
    }
  }
};
</script>
