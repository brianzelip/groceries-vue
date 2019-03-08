<template>
  <section>
    <div
      :key="i"
      v-for="(flash, i) in flashes"
    >
      <div
        :class="[`flash--${flash.type}`]"
        class="container flex flex-center mb3 flash"
      >
        <h1
          class="flex-grow m0 h4 regular"
          v-html="flash.msg"
        ></h1>
        <button
          class="btn h3 p0 cursor"
          href
        >&times;</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["flashes"])
  },
  props: ["_flash"]
};
</script>
