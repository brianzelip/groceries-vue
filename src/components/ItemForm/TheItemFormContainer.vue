<template>
  <div id="TheItemFormContainer">
    <h2 class="fw400">{{ heading }}</h2>
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
  props: ['heading']
};
</script>
