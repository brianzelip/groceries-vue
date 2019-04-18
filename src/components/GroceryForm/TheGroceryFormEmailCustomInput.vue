<template>
  <section>
    <label for="customEmail">send the list here:</label>
    <input
      class="field border"
      id="customEmail"
      placeholder="enter email"
      type="text"
      v-model="customEmail"
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      customEmail: ""
    };
  }
};
</script>
