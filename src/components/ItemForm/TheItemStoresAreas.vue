<template>
  <section class="flex mt2">
    <div class="flex flex-column">
      <template v-for="(store, i) in storesWithAreas">
        <label
          :for="`${store}-area`"
          :key="`label-${store}-${i}`"
          class="block"
        >{{ storesRef[store].name }} area</label>
        <input
          :id="`${store}-area`"
          :key="`input-${store}-${i}`"
          :name="`${store}Area`"
          class="block field w-90px mb2"
          disabled
          type="number"
        >
      </template>
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

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["storesRef", "storesWithAreas", "storesAreasRef"])
  }
};
</script>

