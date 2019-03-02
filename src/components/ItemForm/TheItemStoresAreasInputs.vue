<template>
  <div class="flex flex-column">
    <div v-if="tjIsSelected">
      <ItemStoreAreaLabel store="tj"></ItemStoreAreaLabel>
      <ItemStoreAreaInput store="tj"></ItemStoreAreaInput>
    </div>
    <div v-if="momsIsSelected">
      <ItemStoreAreaLabel store="moms"></ItemStoreAreaLabel>
      <ItemStoreAreaInput store="moms"></ItemStoreAreaInput>
    </div>
  </div>
</template>

<script>
import ItemStoreAreaLabel from "./ItemStoreAreaLabel.vue";
import ItemStoreAreaInput from "./ItemStoreAreaInput.vue";

export default {
  props: ["tjIsSelected", "momsIsSelected"],
  components: {
    ItemStoreAreaLabel,
    ItemStoreAreaInput
  }
};
</script>
