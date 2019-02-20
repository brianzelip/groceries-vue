<template>
  <form>
    <TheItemNameInput v-on:input="updateName"></TheItemNameInput>
    <ItemStoreSelector inputType="checkbox"></ItemStoreSelector>
    <ItemStoreSelector inputType="radio"></ItemStoreSelector>
  </form>
</template>

<script>
import { mapState } from "vuex";

import TheItemNameInput from "./TheItemNameInput.vue";
import ItemStoreSelector from "./ItemStoreSelector.vue";

export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState(["storesRef"])
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  },
  components: {
    TheItemNameInput,
    ItemStoreSelector
  }
};
</script>
