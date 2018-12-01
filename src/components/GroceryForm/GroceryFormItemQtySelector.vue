<template>
  <div class="item__qtySelector col-3">
    <span class="mr1 mono purp">qty:</span>
    <div
      :key="num"
      class="item__qtySelector-numWrapper"
      v-for="num in qtyRange"
    >
      <input
        :id="`${slug}-${num}`"
        :name="`${slug}-qty`"
        :value="num"
        @change="changeQty"
        class="item__qtySelector-numInput"
        type="radio"
        v-model.number="qty"
      >
      <label
        :for="`${slug}-${num}`"
        class="item__qtySelector-numLabel"
      >{{ num }}</label>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      qtyRange: [2, 3, 4, 5],
      qty: 1
    };
  },
  props: ["_id", "slug"],
  methods: {
    ...mapActions(["updateItemInUserSelectedItems"]),
    changeQty() {
      this.updateItemInUserSelectedItems({
        _id: this._id,
        key: "qty",
        value: this.qty
      });
    }
  }
};
</script>
