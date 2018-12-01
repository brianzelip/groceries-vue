<template>
  <div class="item__storesSelector col-4">
    <span class="mr1 mono purp">from:</span>
    <div v-for="store in stores" :key="store" class="item__storesSelector-storeWrapper">
      <input
        type="radio"
        v-model="storeChoice"
        :value="store"
        @change="$emit('item-store-change', storeChoice)"
        :name="`${slug}-store`"
        :id="`${slug}-${store}`"
        :checked="((defaultStore && defaultStore === store) || false)"
        class="item__storesSelector-storeInput"
      >
      <label
        :for="`${slug}-${store}`"
        class="item__storesSelector-storeLabel"
      >{{ storesRef[store].name.toLowerCase() }}</label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      storeChoice: this.defaultStore || null
    };
  },
  props: ["_id", "stores", "slug", "defaultStore"],
  computed: {
    ...mapGetters(["storesRef"])
  }
};
</script>
