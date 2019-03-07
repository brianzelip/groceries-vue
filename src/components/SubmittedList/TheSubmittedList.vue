<template>
  <div>
    <h2 class="fw400">it worked 🎉</h2>
    <h3 class="fw400">here's what the email sent to {{ recipients }} looks like:</h3>
    <hr>
    <section v-html="emailBody"></section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["emailTo"]),
    ...mapGetters(["emailBody"]),
    recipients() {
      return this.emailTo.length === 1
        ? this.emailTo[0]
        : this.emailTo.join(" and ");
    }
  }
};
</script>
