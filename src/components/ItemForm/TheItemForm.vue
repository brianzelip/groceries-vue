<template>
  <form>
    <TheItemNameInput></TheItemNameInput>
    <TheItemStoresSelector
      v-on:moms-selection-change="updateMomsIsSelected"
      v-on:tj-selection-change="updateTjIsSelected"
    ></TheItemStoresSelector>
    <TheItemDefaultStoreSelector></TheItemDefaultStoreSelector>
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
import TheItemStoresSelector from "./TheItemStoresSelector.vue";
import TheItemDefaultStoreSelector from "./TheItemDefaultStoreSelector.vue";
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
    TheItemStoresSelector,
    TheItemDefaultStoreSelector,
    TheItemStoresAreas
  }
};
</script>
