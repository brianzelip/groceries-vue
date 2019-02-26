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
import { mapState } from "vuex";

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
      },
      selection: []
    };
  },
  props: ["inputType"],
  computed: {
    ...mapState(["storesRef"])
  }
};
</script>
