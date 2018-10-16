<template>
  <div class="item__qtySelector col-3">
    <label :for="`${slug}-qty`" class="mr1 mono purp">qty: </label>
    <select :name="`${slug}-qty`" :id="`${slug}-qty`" class="p0">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['slug']
};
</script>
