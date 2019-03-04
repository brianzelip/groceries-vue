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
    ...mapGetters(["itemFormTjOrMomsIsSelected", "currentItem"])
  },
  created() {
    const vm = this;
    console.log("HEREs the THIS MOTHERFUCKER:::::", this);
    console.log("this.$route.params._id", this.$route.params._id);
    console.log(
      "here comes the curentItem!!!",
      vm.currentItem(vm.$route.params._id)
    );
  }
};
</script>
