<template>
  <section class="mt2">
    <h1 class="m0 h4 regular">{{ header[inputType] }}:</h1>
    <div class="flex flex-column sm-flex-row sm-flex-wrap border-bottom">
      <div
        :key="i"
        v-for="(store, i) in Object.keys(storesRef).filter(store => store != 'noStore')"
      >
        <input
          :id="`${inputType}-${store}`"
          :name="`${name[inputType]}`"
          :type="`${inputType}`"
          :value="`${store}`"
          v-model="selection"
        >
        <label
          :for="`${inputType}-${store}`"
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
      header: {
        checkbox: "stores where we get this item",
        radio: "our default store of choice"
      },
      name: {
        checkbox: "stores",
        radio: "defaultStore"
      }
    };
  },
  props: ["inputType"],
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
    ...mapActions(["setNewItemStores"])
  },
  watch: {
    tjIsSelected() {
      this.$emit("tj-selection-change", this.tjIsSelected);
    },
    momsIsSelected() {
      this.$emit("moms-selection-change", this.momsIsSelected);
    }
  }
};
</script>
