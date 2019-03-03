<template>
  <div class="flex flex-column">
    <div v-if="itemFormStoresTjIsSelected">
      <ItemStoreAreaLabel store="tj"></ItemStoreAreaLabel>
      <ItemStoreAreaInput store="tj"></ItemStoreAreaInput>
    </div>
    <div v-if="itemFormStoresMomsIsSelected">
      <ItemStoreAreaLabel store="moms"></ItemStoreAreaLabel>
      <ItemStoreAreaInput store="moms"></ItemStoreAreaInput>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ItemStoreAreaLabel from "./ItemStoreAreaLabel.vue";
import ItemStoreAreaInput from "./ItemStoreAreaInput.vue";

export default {
  components: {
    ItemStoreAreaLabel,
    ItemStoreAreaInput
  },
  computed: {
    ...mapState(["itemFormStoresTjIsSelected", "itemFormStoresMomsIsSelected"])
  }
};
</script>
