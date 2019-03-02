<template>
  <div class="flex flex-column">
    <label
      :for="`${store}-area`"
      :key="`label-${store}`"
      class="block"
    >{{ storesRef[store].name }} area</label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["store"],
  computed: {
    ...mapState(["storesRef"])
  }
};
</script>

