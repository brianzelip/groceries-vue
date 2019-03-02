<template>
  <div
    class="flex flex-auto ml2"
    v-if="tjOrMomsIsSelected"
  >
    <div
      class="col-6 px2"
      id="tj-areas-ref"
      v-if="tjIsSelected"
    >
      <ItemStoresAreasRefsTable store="tj"></ItemStoresAreasRefsTable>
    </div>
    <div
      class="col-6 px2"
      id="moms-areas-ref"
      v-if="momsIsSelected"
    >
      <ItemStoresAreasRefsTable store="moms"></ItemStoresAreasRefsTable>
    </div>
  </div>
</template>

<script>
import ItemStoresAreasRefsTable from "./ItemStoresAreasRefsTable.vue";

export default {
  props: ["tjIsSelected", "momsIsSelected"],
  components: { ItemStoresAreasRefsTable },
  computed: {
    tjOrMomsIsSelected() {
      return this.tjIsSelected ? true : this.momsIsSelected ? true : false;
    }
  }
};
</script>
