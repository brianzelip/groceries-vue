<template>
  <div class="item__storesSelector col-4">
    <span class="mr1 mono purp">from:</span>
    <div
      :key="_store"
      class="item__storesSelector-storeWrapper"
      v-for="_store in stores"
    >
      <input
        :checked="((defaultStore && defaultStore === _store) || false)"
        :id="`${slug}-${_store}`"
        :name="`${slug}-store`"
        :value="_store"
        @change="changeStore"
        class="item__storesSelector-storeInput"
        type="radio"
        v-model="store"
      >
      <label
        :for="`${slug}-${_store}`"
        class="item__storesSelector-storeLabel"
      >{{ storesRef[_store].name.toLowerCase() }}</label>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      store: this.defaultStore || null
    };
  },
  props: ["_id", "stores", "slug", "defaultStore"],
  computed: {
    ...mapState(["storesRef"])
  },
  methods: {
    ...mapActions(["updateItemInUserSelectedItems"]),
    changeStore() {
      this.updateItemInUserSelectedItems({
        _id: this._id,
        key: "store",
        value: this.store
      });
    }
  }
};
</script>
