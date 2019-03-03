<template>
  <div
    class="flex flex-auto ml2"
    v-if="itemFormTjOrMomsIsSelected"
  >
    <div
      class="col-6 px2"
      id="tj-areas-ref"
      v-if="itemFormStoresTjIsSelected"
    >
      <ItemStoresAreasRefsTable store="tj"></ItemStoresAreasRefsTable>
    </div>
    <div
      class="col-6 px2"
      id="moms-areas-ref"
      v-if="itemFormStoresMomsIsSelected"
    >
      <ItemStoresAreasRefsTable store="moms"></ItemStoresAreasRefsTable>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import ItemStoresAreasRefsTable from "./ItemStoresAreasRefsTable.vue";

export default {
  components: { ItemStoresAreasRefsTable },
  computed: {
    ...mapState(["itemFormStoresTjIsSelected", "itemFormStoresMomsIsSelected"]),
    ...mapGetters(["itemFormTjOrMomsIsSelected"])
  }
};
</script>
