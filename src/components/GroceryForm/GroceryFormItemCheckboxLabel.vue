<template>
  <label :for="slug" class="item__label col-5">
    <span class="item__checkbox"></span>
    <span class="item__text blue">{{ name }}</span>
  </label>
</template>

<script>
export default {
  props: ['slug', 'name']
};
</script>
