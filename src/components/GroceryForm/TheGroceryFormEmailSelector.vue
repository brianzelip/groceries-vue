<template>
  <div class="form__emailSelector">
    <input
      class="form__emailSelector--hidden-input"
      id="emailA"
      name="emailTo"
      type="checkbox"
      v-model="recipients"
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
      v-model="recipients"
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
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["emailTo"]),
    recipients: {
      get() {
        return this.emailTo;
      },
      set(payload) {
        this.setEmailTo(payload);
      }
    }
  },
  methods: {
    ...mapActions(["setEmailTo"])
  }
};
</script>

