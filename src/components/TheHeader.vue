<template lang="pug">
  header
    .container.sm-flex.justify-between.mb2
      .sm-flex.flex-center.flex-wrap.mb2.sm-mb0
        h1.m0.lh1
          a(href="/").fw400 h.site.name
        h2.mt0.mb0.sm-ml1.h3.fw400.lh1
          a(href="/").fw400 h.site.byline.toLowerCase()
      //- block headerAddBtn
      //-   .none.sm-block
      //-     include includes/addItemBtn
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
