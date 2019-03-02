<template>
  <section class="flex mt2">
    <TheItemStoresAreasInputs
      :momsIsSelected="momsIsSelected"
      :tjIsSelected="tjIsSelected"
    ></TheItemStoresAreasInputs>
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

import TheItemStoresAreasInputs from "./TheItemStoresAreasInputs.vue";

export default {
  data() {
    return {};
  },
  props: ["tjIsSelected", "momsIsSelected"],
  components: {
    TheItemStoresAreasInputs
  },
  computed: {
    ...mapState(["storesRef", "storesWithAreas", "storesAreasRef"])
  }
};
</script>

