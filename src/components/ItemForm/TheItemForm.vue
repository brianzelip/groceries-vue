<template lang="pug">
  form(action="/add" method="POST")
    label(for="name").block name
      span.purp *
    input(type="text" name="name" id="name").col-12.sm-col-8.md-col-6.field
    .mt2 stores where we get this item:
      .flex.flex-column.sm-flex-row.sm-flex-wrap.border-bottom
        div(v-for="store in Object.keys(stores)")
          input(
            type="checkbox"
            name="stores"
            :id="`checkbox-${store}`"
            :value="`${store}`")
          label(:for="`checkbox-${store}`").mr2 {{ stores[store].name }}
    .mt2 our default store of choice:
      .flex.flex-column.sm-flex-row.sm-flex-wrap.border-bottom
        div(v-for="store in Object.keys(stores)")
          input(
            type="radio"
            name="defaultStore"
            :id="`radio-${store}`"
            :value="`${store}`")
          label(for="`radio-${store}`").mr2 {{ stores[store].name }}
</template>

<script>
export default {
  data() {
    return {
      stores: {
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
  components: {}
};
</script>
