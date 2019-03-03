<template>
  <form>
    <TheItemNameInput></TheItemNameInput>
    <TheItemStoresSelector></TheItemStoresSelector>
    <TheItemDefaultStoreSelector></TheItemDefaultStoreSelector>
    <TheItemStoresAreas v-if="itemFormTjOrMomsIsSelected"></TheItemStoresAreas>
    <TheItemFormControls></TheItemFormControls>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

import TheItemNameInput from "./TheItemNameInput.vue";
import TheItemStoresSelector from "./TheItemStoresSelector.vue";
import TheItemDefaultStoreSelector from "./TheItemDefaultStoreSelector.vue";
import TheItemStoresAreas from "./TheItemStoresAreas.vue";
import TheItemFormControls from "./TheItemFormControls.vue";

export default {
  components: {
    TheItemNameInput,
    TheItemStoresSelector,
    TheItemDefaultStoreSelector,
    TheItemStoresAreas,
    TheItemFormControls
  },
  computed: {
    ...mapGetters(["itemFormTjOrMomsIsSelected"])
  }
};
</script>
