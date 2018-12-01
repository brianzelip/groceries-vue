<template>
  <div class="item__qtySelector col-3">
    <span class="mr1 mono purp">qty:</span>
    <div v-for="num in qtyRange" :key="num" class="item__qtySelector-numWrapper">
      <input
        type="radio"
        :name="`${slug}-qty`"
        :id="`${slug}-${num}`"
        :value="num"
        class="item__qtySelector-numInput"
        v-model.number="qty"
        @change="changeQty"
      >
      <label :for="`${slug}-${num}`" class="item__qtySelector-numLabel">{{ num }}</label>
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
