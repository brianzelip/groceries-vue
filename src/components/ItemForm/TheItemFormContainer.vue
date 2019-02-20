<template>
  <div id="TheItemFormContainer">
    <h2 class="fw400">{{ heading }}</h2>
    <hr>
    <TheItemForm></TheItemForm>
    <NewForm></NewForm>
  </div>
</template>

<script>
import TheItemForm from "./TheItemForm.vue";
import NewForm from "./NewForm.vue";

export default {
  components: {
    TheItemForm,
    NewForm
  },
  props: ["heading"]
};
</script>
