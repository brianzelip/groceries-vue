<template>
  <div
    :class="[`flash--${flash.flashType}`]"
    class="container flex flex-center flash"
  >
    <span class="flex-grow">
      <h1
        class="inline-block m0 h4 regular"
        v-html="flashMsg()"
      ></h1>
      <FlashViewItemLink
        :_id="flash._id"
        v-if="showFVIL"
      ></FlashViewItemLink>
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
  computed: {
    showFVIL() {
      return Object.keys(this.flash).includes("_id");
    }
  },
  methods: {
    ...mapActions(["removeFlash"]),
    flashMsg() {
      if (this.flash.flashType === "success") {
        return `Successfully ${this.flash.formType}ed <strong>${
          this.flash.name
        }</strong>!`;
      }
      if (
        this.flash.flashType === "error" &&
        this.flash.formType === "grocery"
      ) {
        return this.flash.error === "items"
          ? `Add an item to the list will ya!`
          : `Select an email recipient will ya!`;
      }

      if (this.flash.flashType === "error" && this.flash.formType === "item") {
        return `Name the item will ya!`;
      }
    },
    close() {
      this.removeFlash(this.flash._id);
    }
  },
  created() {
    setTimeout(
      () => {
        this.close();
      },
      this.flash.flashType === "success" ? 4500 : 3500
    );
  }
};
</script>

<style lang="postcss">
.flash {
  padding: 1.5rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
}

/* Success */
.flash--success {
  background-color: var(--bg-color-success);
  color: var(--color-success);
  border-color: var(--border-color-success);
}

/* Error */
.flash--error {
  background-color: var(--bg-color-error);
  color: var(--color-error);
  border-color: var(--border-color-error);
}
</style>
