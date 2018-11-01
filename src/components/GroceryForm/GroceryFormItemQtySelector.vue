<template>
  <div class="item__qtySelector col-3">
    <span class="mr1 mono purp">qty:</span>
    <div
      v-for="num in [2, 3, 4, 5]"
      v-bind:key="num"
      class="item__qtySelector-numWrapper"
    >
      <input
        type="radio"
        v-model.number="qty"
        :value="num"
        :name="`${slug}-qty`"
        :id="`${slug}-${num}`"
        class="item__qtySelector-numInput">
      <label
        :for="`${slug}-${num}`"
        class="item__qtySelector-numLabel">{{ num }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qty: null
    };
  },
  props: ['slug']
};
</script>
