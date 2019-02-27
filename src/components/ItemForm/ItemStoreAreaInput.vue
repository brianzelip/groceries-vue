<template>
  <input
    :id="`${store}-area`"
    :key="`input-${store}`"
    :name="`${store}Area`"
    class="block field w-90px mb2"
    disabled
    type="number"
  >
</template>

<script>
export default {
  props: ["store"]
};
</script>

