<template lang="pug">
  form(action="/add" method="POST")
    label(for="name").block name
      span.purp *
    input(type="text" name="name" id="name").col-12.sm-col-8.md-col-6.field
    .mt2 stores where we get this item:
      .flex.flex-column.sm-flex-row.sm-flex-wrap.border-bottom
        div(v-for="store in Object.keys(storesRef)")
          input(
            type="checkbox"
            name="stores"
            :id="`checkbox-${store}`"
            :value="`${store}`")
          label(:for="`checkbox-${store}`").mr2 {{ storesRef[store].name }}
    .mt2 our default store of choice:
      .flex.flex-column.sm-flex-row.sm-flex-wrap.border-bottom
        div(v-for="store in Object.keys(storesRef)")
          input(
            type="radio"
            name="defaultStore"
            :id="`radio-${store}`"
            :value="`${store}`")
          label(for="`radio-${store}`").mr2 {{ storesRef[store].name }}
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("storesRef")
  }
};
</script>
