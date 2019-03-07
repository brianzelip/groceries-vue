<template>
  <div class="form__emailSelector">
    <input
      class="form__emailSelector--hidden-input"
      id="abbie"
      name="emailTo"
      type="checkbox"
      v-model="recipients"
      value="abbie"
    >
    <label
      class="form__emailSelector--label"
      for="abbie"
    >
      <span class="form__emailSelector--checkbox"></span>
      <span class="form__emailSelector--text">email abbie</span>
    </label>
    <input
      class="form__emailSelector--hidden-input"
      id="brian"
      name="emailTo"
      type="checkbox"
      v-model="recipients"
      value="brian"
    >
    <label
      class="form__emailSelector--label"
      for="brian"
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

