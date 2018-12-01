<template>
  <label
    :for="item.slug"
    class="item__label col-5"
    @click="isSelected = !isSelected"
    v-on:click="$emit('item-selection-change')"
  >
    <span class="item__checkbox"></span>
    <span class="item__text blue">{{ item.name }}</span>
  </label>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isSelected: false
    };
  },
  props: ["item"],
  methods: {
    ...mapActions([
      "addItemToUserSelectedItems",
      "removeItemInUserSelectedItems"
    ])
  },
  watch: {
    isSelected() {
      this.isSelected
        ? this.addItemToUserSelectedItems({
            _id: this.item._id,
            name: this.item.name,
            store: this.item.defaultStore || null,
            tjArea: this.item.tjArea,
            momsArea: this.item.momsArea
          })
        : this.removeItemInUserSelectedItems(this.item._id);
    }
  }
};
</script>
