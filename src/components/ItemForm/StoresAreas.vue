<template>
  <section class="flex mt2">
    <!-- .flex.flex-column
      - const storesWithAreas = {tj: 'TJ', moms: 'Moms'}
      each store in Object.keys(storesWithAreas)
        label(for=`${store}-area`).block #{storesWithAreas[store]} area
        input(type="number" id=`${store}-area` name=`${store}Area` disabled=(h.itemHasStore(item, store) ? false : true) value=(item[`${store}Area`])).block.field.w-90px.mb2
    .flex.flex-auto.ml2
      each store in h.storesAreas
        - let caption = store[0];
        - let storeName = store[0].split(' ')[0].toLowerCase();
          div(id=`${storeName}-areas-ref` hidden=((h.itemHasStore(item, storeName) ? false : true))).col-6.px2
            .overflow-scroll
              table(class="table-light overflow-hidden border rounded").mono
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
  </section>
</template>
