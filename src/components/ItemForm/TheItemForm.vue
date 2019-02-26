<template>
  <form>
    <TheItemNameInput></TheItemNameInput>
    <ItemStoreSelector
      inputType="checkbox"
      v-on:moms-selection-change="updateMomsIsSelected"
      v-on:tj-selection-change="updateTjIsSelected"
    ></ItemStoreSelector>
    <ItemStoreSelector inputType="radio"></ItemStoreSelector>
    <TheItemStoresAreas
      :momsIsSelected="momsIsSelected"
      :tjIsSelected="tjIsSelected"
      v-if="tjOrMomsIsSelected"
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
      tjIsSelected: false,
      momsIsSelected: false
    };
  },
  computed: {
    ...mapState(["storesRef"]),
    tjOrMomsIsSelected() {
      return this.tjIsSelected ? true : this.momsIsSelected ? true : false;
    }
  },
  methods: {
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
