<template>
  <form id="TheItemForm">
    <h2 class="fw400">{{ heading }}</h2>
    <hr>
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
  props: ["routeName"],
  components: {
    TheItemNameInput,
    TheItemStoresSelector,
    TheItemDefaultStoreSelector,
    TheItemStoresAreas,
    TheItemFormControls
  },
  computed: {
    ...mapGetters(["itemFormTjOrMomsIsSelected", "currentItem"]),
    heading() {
      return this.routeName === "add"
        ? `add item`
        : `edit ${this.currentItem(this.$route.params._id)[0].name}`;
    }
  },
  methods: {
    ...mapActions(["setItemFormItem", "resetItemFormItem"])
  },
  created() {
    this.routeName === "edit"
      ? this.setItemFormItem(this.currentItem(this.$route.params._id)[0])
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
