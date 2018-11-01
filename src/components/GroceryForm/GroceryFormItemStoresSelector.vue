<template>
  <div class="item__storesSelector col-4">
    <span class="mr1 mono purp">from:</span>
    <div
      v-for="store in stores"
      :key="store"
      class="item__storesSelector-storeWrapper"
    >
      <input
        type="radio"
        v-model="storeChoice"
        :value="store"
        :name="`${slug}-store`"
        :id="`${slug}-${store}`"
        :checked="((defaultStore && defaultStore === store) || false)"
        class="item__storesSelector-storeInput"
      >
      <label
        :for="`${slug}-${store}`"
        class="item__storesSelector-storeLabel"
      >{{ storesRef[store].name.toLowerCase() }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeChoice: this.defaultStore || null,
      storesRef: {
        tj: { name: 'TJ', order: 0 },
        moms: { name: 'Moms', order: 1 },
        wineSource: { name: 'Wine Source', order: 2 },
        howl: { name: 'Howl', order: 3 },
        farmersMarket: { name: 'Farmers Market', order: 4 },
        target: { name: 'Target', order: 5 },
        tjMaxx: { name: 'TJ Maxx', order: 6 },
        riteAid: { name: 'Rite Aid', order: 7 }
      }
    };
  },
  props: ['stores', 'slug', 'defaultStore']
};
</script>
