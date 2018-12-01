<template>
  <div class="item__storesSelector col-4">
    <span class="mr1 mono purp">from:</span>
    <div v-for="_store in stores" :key="_store" class="item__storesSelector-storeWrapper">
      <input
        type="radio"
        :id="`${slug}-${_store}`"
        :name="`${slug}-store`"
        :value="_store"
        :checked="((defaultStore && defaultStore === _store) || false)"
        class="item__storesSelector-storeInput"
        v-model="store"
        @change="changeStore"
      >
      <label
        :for="`${slug}-${_store}`"
        class="item__storesSelector-storeLabel"
      >{{ storesRef[_store].name.toLowerCase() }}</label>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      store: this.defaultStore || null
    };
  },
  props: ["_id", "stores", "slug", "defaultStore"],
  computed: {
    ...mapGetters(["storesRef"])
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
