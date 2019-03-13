<template>
  <section>
    <div
      :key="i"
      v-for="(flash, i) in flashes"
    >
      <Flash :flash="flash"></Flash>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import Flash from "./Flash.vue";

export default {
  components: {
    Flash
  },
  computed: {
    ...mapState(["flashes"])
  }
};
</script>

<style scoped>
section {
  position: fixed;
  bottom: 50px;
  left: calc(50% - 400px / 2);
  width: 400px;
}
</style>
