<template>
  <form id="TheItemForm">
    <h2 class="fw400">{{ heading }}</h2>
    <hr>
    <TheItemNameInput></TheItemNameInput>
    <TheItemStoresSelector></TheItemStoresSelector>
    <TheItemDefaultStoreSelector></TheItemDefaultStoreSelector>
    <TheItemStoresAreas v-if="itemFormTjOrMomsIsSelected"></TheItemStoresAreas>
    <TheItemFormControls :isEditRoute="isEditRoute"></TheItemFormControls>
    <!-- <TheItemFormControlsModal v-if="isEditRoute"></TheItemFormControlsModal> -->
  </form>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import TheItemNameInput from "./TheItemNameInput.vue";
import TheItemStoresSelector from "./TheItemStoresSelector.vue";
import TheItemDefaultStoreSelector from "./TheItemDefaultStoreSelector.vue";
import TheItemStoresAreas from "./TheItemStoresAreas.vue";
import TheItemFormControls from "./TheItemFormControls.vue";
import TheItemFormControlsModal from "./TheItemFormControlsModal.vue";

export default {
  components: {
    TheItemNameInput,
    TheItemStoresSelector,
    TheItemDefaultStoreSelector,
    TheItemStoresAreas,
    TheItemFormControls,
    TheItemFormControlsModal
  },
  computed: {
    ...mapState(["itemFormItem", "flashes"]),
    ...mapGetters(["itemFormTjOrMomsIsSelected"]),
    routeName() {
      return this.$route.name;
    },
    isEditRoute() {
      return this.routeName === "edit";
    },
    heading() {
      return this.isEditRoute ? `edit ${this.itemFormItem.name}` : `add item`;
    }
  },
  methods: {
    ...mapActions(["setItemFormItem", "resetItemFormItem", "resetFlashes"])
  },
  created() {
    this.isEditRoute
      ? (console.log("TheItemForm create() says: ROUTENAME IS EDIT!!!"),
        this.flashes.length > 0 ? this.resetFlashes() : null)
      : this.resetItemFormItem();
  },
  watch: {
    routeName() {
      this.routeName === "add"
        ? this.resetItemFormItem()
        : console.log(
            "TheItemForm.vue says: no need to run this.resetItemFormItem since the to route is an edit item route!, see:::",
            `routeName is=> ${this.routeName}`
          );
    }
  }
};
</script>
