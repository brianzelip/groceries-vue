<template>
  <div id="ItemFormWrapper">
    <h2 class="fw400">{{ title }}</h2>
    <hr>
    <TheItemForm></TheItemForm>
  </div>
</template>

<script>
import TheItemForm from './TheItemForm.vue';

export default {
  components: {
    TheItemForm
  },
  props: ['title']
};
</script>
