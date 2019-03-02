<template>
  <section class="flex mt2">
    <TheItemStoresAreasInputs
      :momsIsSelected="momsIsSelected"
      :tjIsSelected="tjIsSelected"
    ></TheItemStoresAreasInputs>
    <TheItemStoresAreasRefs></TheItemStoresAreasRefs>
  </section>
</template>

<script>
import { mapState } from "vuex";

import TheItemStoresAreasInputs from "./TheItemStoresAreasInputs.vue";
import TheItemStoresAreasRefs from "./TheItemStoresAreasRefs.vue";

export default {
  props: ["tjIsSelected", "momsIsSelected"],
  components: {
    TheItemStoresAreasInputs,
    TheItemStoresAreasRefs
  },
  computed: {
    ...mapState(["storesRef", "storesWithAreas", "storesAreasRef"])
  }
};
</script>

