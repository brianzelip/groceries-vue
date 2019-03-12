<template lang="pug">
  div(data-vue="app")
    TheHeader
    TheFlashes(v-if="haveAtLeastOneFlash" ref="flashes")
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
  },
  watch: {
    haveAtLeastOneFlash() {
      if (this.haveAtLeastOneFlash) {
        console.log("YES WE HAVE A FLASH!");
        this.$nextTick(() => {
          console.log("cominag at ya from nextTick!");
          console.log("this.$refs", this.$refs);
          this.$refs.flashes.scrollTop = 0;
        });
      }
    }
  }
};
</script>
