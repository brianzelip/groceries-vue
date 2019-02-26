<template>
  <form>
    <TheItemNameInput v-on:input="updateName"></TheItemNameInput>
    <ItemStoreSelector
      inputType="checkbox"
      v-on:moms-selection-change="updateMomsIsSelected"
      v-on:tj-selection-change="updateTjIsSelected"
    ></ItemStoreSelector>
    <ItemStoreSelector inputType="radio"></ItemStoreSelector>
    <TheItemStoresAreas
      :momsIsSelected="momsIsSelected"
      :tjIsSelected="tjIsSelected"
    ></TheItemStoresAreas>
  </form>
</template>

<script>
import { mapState } from "vuex";

import TheItemNameInput from "./TheItemNameInput.vue";
import ItemStoreSelector from "./ItemStoreSelector.vue";
import TheItemStoresAreas from "./TheItemStoresAreas.vue";

export default {
  data() {
    return {
      name: "",
      stores: [],
      defaultStore: "",
      tjArea: "",
      momsArea: "",
      tjIsSelected: false,
      momsIsSelected: false
    };
  },
  computed: {
    ...mapState(["storesRef"])
  },
  methods: {
    updateName(name) {
      this.name = name;
    },
    updateTjIsSelected(payload) {
      this.tjIsSelected = payload;
    },
    updateMomsIsSelected(payload) {
      this.momsIsSelected = payload;
    }
  },
  components: {
    TheItemNameInput,
    ItemStoreSelector,
    TheItemStoresAreas
  }
};
</script>
