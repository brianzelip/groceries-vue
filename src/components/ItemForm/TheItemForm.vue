<template>
  <form id="TheItemForm">
    <h2 class="fw400">{{ heading }}</h2>
    <hr>
    <TheItemNameInput></TheItemNameInput>
    <TheItemStoresSelector></TheItemStoresSelector>
    <TheItemDefaultStoreSelector></TheItemDefaultStoreSelector>
    <TheItemStoresAreas v-if="itemFormTjOrMomsIsSelected"></TheItemStoresAreas>
    <TheItemFormControls></TheItemFormControls>
    <TheItemFormModal></TheItemFormModal>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TheItemNameInput from "./TheItemNameInput.vue";
import TheItemStoresSelector from "./TheItemStoresSelector.vue";
import TheItemDefaultStoreSelector from "./TheItemDefaultStoreSelector.vue";
import TheItemStoresAreas from "./TheItemStoresAreas.vue";
import TheItemFormControls from "./TheItemFormControls.vue";
import TheItemFormModal from "./TheItemFormModal.vue";

export default {
  props: ["routeName"],
  components: {
    TheItemNameInput,
    TheItemStoresSelector,
    TheItemDefaultStoreSelector,
    TheItemStoresAreas,
    TheItemFormControls,
    TheItemFormModal
  },
  computed: {
    ...mapGetters(["itemFormTjOrMomsIsSelected", "currentItemFormItem"]),
    heading() {
      return this.routeName === "add"
        ? `add item`
        : `edit ${this.currentItemFormItem(this.$route.params._id)[0].name}`;
    }
  },
  methods: {
    ...mapActions(["setItemFormItem", "resetItemFormItem"])
  },
  created() {
    this.routeName === "edit"
      ? this.setItemFormItem(
          this.currentItemFormItem(this.$route.params._id)[0]
        )
      : this.resetItemFormItem();
  },
  watch: {
    routeName() {
      this.routeName === "add"
        ? this.resetItemFormItem()
        : console.log(
            "TheItemForm.vue says: no need to run this.resetItemFormItem since the to route is an edit item route!, see:::",
            `routeName is=> ${routeName}`
          );
    }
  }
};
</script>
