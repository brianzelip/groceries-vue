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
      <div class="flex flex-auto ml2">
        <div
          :id="`${storeName}-areas-ref`"
          class="col-6 px2"
        >
          <div class="overflow-scroll">
            <!-- table(class="table-light overflow-hidden border rounded").mono
                caption= caption
                thead.bg-light-grey
                  tr
                    th(scope="col").fw400 area
                    th(scope="col").fw400 items
                tbody.mono
                  each key in Object.keys(store[1]).sort()
                    tr
                      td= key
            td= store[1][key]-->
          </div>
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
    ...mapState(["storesRef", "storesWithAreas"])
  }
};
</script>

