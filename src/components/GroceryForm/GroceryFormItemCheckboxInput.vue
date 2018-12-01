<template>
  <input
    :id="slug"
    :value="slug"
    class="item__hidden-input"
    name="items"
    type="checkbox"
  >
</template>

<script>
export default {
  props: ["slug"]
};
</script>

<style>
.item__hidden-input {
  position: absolute;
  top: -9999px;
  left: -9999px;
  visibility: hidden;
  opacity: 0;
}
</style>
