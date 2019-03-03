<template>
  <section class="mt2">
    <h1 class="m0 h4 regular">{{ header }}:</h1>
    <div class="flex flex-column sm-flex-row sm-flex-wrap border-bottom">
      <div
        :key="i"
        v-for="(store, i) in Object.keys(storesRef).filter(store => store != 'noStore')"
      >
        <input
          :id="`checkbox-${store}`"
          :value="`${store}`"
          name="stores"
          type="checkbox"
          v-model="selection"
        >
        <label
          :for="`checkbox-${store}`"
          class="mr2"
        >{{ storesRef[store].name }}</label>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      header: "stores where we get this item"
    };
  },
  computed: {
    ...mapState(["storesRef", "newItem"]),
    selection: {
      get() {
        return this.newItem.stores;
      },
      set(payload) {
        this.setNewItemStores(payload);
      }
    },
    tjIsSelected() {
      return this.selection.includes("tj");
    },
    momsIsSelected() {
      return this.selection.includes("moms");
    }
  },
  methods: {
    ...mapActions([
      "setNewItemStores",
      "setItemFormStoresTjIsSelected",
      "setItemFormStoresMomsIsSelected"
    ])
  },
  watch: {
    tjIsSelected() {
      this.setItemFormStoresTjIsSelected(this.tjIsSelected);
    },
    momsIsSelected() {
      this.setItemFormStoresMomsIsSelected(this.momsIsSelected);
    }
  }
};
</script>
