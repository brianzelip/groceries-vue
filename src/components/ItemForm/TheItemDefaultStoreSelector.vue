<template>
  <section class="mt2">
    <h1 class="m0 h4 regular">{{ header }}:</h1>
    <div class="flex flex-column sm-flex-row sm-flex-wrap border-bottom">
      <div
        :key="i"
        v-for="(store, i) in Object.keys(storesRef).filter(store => store != 'noStore')"
      >
        <input
          :id="`radio-${store}`"
          :value="`${store}`"
          name="defaultStore"
          type="radio"
          v-model="selection"
        >
        <label
          :for="`radio-${store}`"
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
      header: "our default store of choice"
    };
  },
  computed: {
    ...mapState(["storesRef", "newItem"]),
    selection: {
      get() {
        return this.newItem.defaultStore;
      },
      set(payload) {
        this.setNewItemDefaultStore(payload);
      }
    }
  },
  methods: {
    ...mapActions(["setNewItemDefaultStore"])
  }
};
</script>
