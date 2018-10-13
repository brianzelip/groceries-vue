<template>
  <input
    type="checkbox"
    name="items"
    :id="slug"
    :value="slug"
    class="item__hidden-input">
</template>

<script>
export default {
  props: ['slug']
};
</script>

