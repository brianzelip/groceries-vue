<template>
  <form>
    <label
      class="block"
      for="name"
    >name
      <span class="purp">*</span>
    </label>
    label(for="name").block name
    span.purp *
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["storesRef"])
  }
};
</script>
