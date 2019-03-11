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
      class="btn h3 p0 cursor"
      href
    >&times;</button>
  </div>
</template>

<script>
import FlashViewItemLink from "./FlashViewItemLink.vue";

export default {
  props: ["flash"],
  components: {
    FlashViewItemLink
  },
  methods: {
    success(formType, name) {
      return `Successfully ${formType}ed <strong>${name}</strong>!`;
    }
  }
};
</script>
