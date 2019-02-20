<template>
  <form>
    <TheItemNameInput v-on:input="updateName"></TheItemNameInput>
  </form>
</template>

<script>
import { mapState } from "vuex";

import TheItemNameInput from "./TheItemNameInput.vue";

export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState(["storesRef"])
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  },
  components: {
    TheItemNameInput
  }
};
</script>
