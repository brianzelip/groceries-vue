<template>
  <div class="form__emailSelector">
    <input
      class="form__emailSelector--hidden-input"
      id="emailA"
      name="emailTo"
      type="checkbox"
      v-model="emailTo"
      value="a"
    >
    <label
      class="form__emailSelector--label"
      for="emailA"
    >
      <span class="form__emailSelector--checkbox"></span>
      <span class="form__emailSelector--text">email abbie</span>
    </label>
    <input
      class="form__emailSelector--hidden-input"
      id="emailB"
      name="emailTo"
      type="checkbox"
      v-model="emailTo"
      value="b"
    >
    <label
      class="form__emailSelector--label"
      for="emailB"
    >
      <span class="form__emailSelector--checkbox"></span>
      <span class="form__emailSelector--text">email brian</span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailTo: []
    };
  }
};
</script>

