<template lang="pug">
  div(data-vue="app")
    TheHeader
    TheFlashes(v-if="haveAtLeastOneFlash")
    main
      .container
        router-view
    TheFooter
</template>

<script>
import { mapGetters } from "vuex";

import TheHeader from "./components/global/TheHeader.vue";
import TheFooter from "./components/global/TheFooter.vue";
import TheFlashes from "./components/Flashes/TheFlashes.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["haveAtLeastOneFlash"]),
    title() {
      const appTitle = "groceries-vue";
      return this.$route.name === "home"
        ? appTitle
        : `${this.$route.name} item | ${appTitle}`;
    }
  },
  components: {
    TheHeader,
    TheFooter,
    TheFlashes
  },
  metaInfo() {
    return {
      title: this.title
    };
  }
};
</script>
