<template lang="pug">
  .item__qtySelector.col-3
    span.mr1.mono.purp qty:
    - let [num, max] = [2,5];
      while num <= max
        .item__qtySelector-numWrapper
          input(type="radio" name=`${num}-qty` id=`id${num}` value=`${num}`).item__qtySelector-numInput
          label(for=`id${num}`).item__qtySelector-numLabel= num
        - num++
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
