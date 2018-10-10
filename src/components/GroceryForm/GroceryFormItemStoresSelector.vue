<template lang="pug">
.item__storesSelector.col-4
    span.mr1.mono.purp from:
      each num in 2
        .item__storesSelector-storeWrapper
          input(type="radio" name=`${num}-store` id=`${num}-store` value=`store`).item__storesSelector-storeInput
          label(for=`${num}-store`).item__storesSelector-storeLabel h.stores
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
