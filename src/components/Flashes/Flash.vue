<template>
  <div
    :class="[`flash--${flash.flashType}`]"
    class="container flex flex-center mb3 flash"
  >
    <span class="flex-grow">
      <h1
        class="inline-block m0 h4 regular"
        v-html="success(flash.formType, flash.name)"
      ></h1>
      <FlashViewItemLink :_id="flash._id"></FlashViewItemLink>
    </span>
    <button
      @click="close"
      class="btn h3 p0 cursor"
    >&times;</button>
  </div>
</template>

<script>
import FlashViewItemLink from "./FlashViewItemLink.vue";
import { mapActions } from "vuex";

export default {
  props: ["flash"],
  components: {
    FlashViewItemLink
  },
  methods: {
    ...mapActions(["removeFlash"]),
    success(formType, name) {
      return `Successfully ${formType}ed <strong>${name}</strong>!`;
    },
    close() {
      this.removeFlash(this.flash._id);
    }
  }
};
</script>
