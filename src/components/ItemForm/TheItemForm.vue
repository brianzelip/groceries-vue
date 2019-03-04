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
import { mapGetters, mapActions } from "vuex";

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
    ...mapGetters(["itemFormTjOrMomsIsSelected", "currentItem"])
  },
  methods: {
    ...mapActions(["setItemFormItem"])
  },
  created() {
    this.$route.name === "edit"
      ? this.setItemFormItem(this.currentItem(this.$route.params._id)[0])
      : console.log("$route must NOT be 'edit'");
  }
};
</script>
