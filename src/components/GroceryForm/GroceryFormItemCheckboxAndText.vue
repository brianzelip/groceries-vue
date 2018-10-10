<template lang="pug">
  div
    a(href="#").w-16px.flex.flex-center.mx1.sm-mx2.grey h.icon('edit-solid')
    input(class="item__hidden-input" type="checkbox" id="" name="items" value="")
    label(for="" class="item__label col-5")
      span(class="item__checkbox")
      span(class="item__text blue") item.name
</template>

<script>
export default {};
</script>
