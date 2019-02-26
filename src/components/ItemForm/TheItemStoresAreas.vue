<template>
  <section class="flex mt2">
    <div class="flex flex-column">
      <ItemStoreAreaLabel store="tj"></ItemStoreAreaLabel>
      <ItemStoreAreaInput store="tj"></ItemStoreAreaInput>
      <ItemStoreAreaLabel store="moms"></ItemStoreAreaLabel>
      <ItemStoreAreaInput store="moms"></ItemStoreAreaInput>
    </div>
    <div class="flex flex-auto ml2">
      <div
        :id="`${store}-areas-ref`"
        :key="`${i}-${store}-areas-ref`"
        class="col-6 px2"
        v-for="(store, i) in storesWithAreas"
      >
        <div class="overflow-scroll">
          <table class="table-light overflow-hidden border rounded mono">
            <caption>{{`${storesRef[store].name} areas`}}</caption>
            <thead class="bg-light-grey">
              <tr>
                <th
                  class="fw400"
                  scope="col"
                >area</th>
                <th
                  class="fw400"
                  scope="col"
                >items</th>
              </tr>
            </thead>
            <tbody class="mono">
              <tr
                :key="i"
                v-for="(key, i) in Object.keys(storesAreasRef[`${store}Areas`])"
              >
                <td>{{ key }}</td>
                <td>{{ storesAreasRef[`${store}Areas`][key] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import ItemStoreAreaLabel from "./ItemStoreAreaLabel.vue";
import ItemStoreAreaInput from "./ItemStoreAreaInput.vue";

export default {
  data() {
    return {};
  },
  props: ["tjIsSelected", "momsIsSelected"],
  components: {
    ItemStoreAreaLabel,
    ItemStoreAreaInput
  },
  computed: {
    ...mapState(["storesRef", "storesWithAreas", "storesAreasRef"])
  }
};
</script>

