<template lang="pug">
  body.p1.sm-p2.md-p3.bg-texture.flex.flex-column
    TheHeader
    main
      .container
        router-view
    TheFooter
</template>

<script>
import TheHeader from './components/global/TheHeader.vue';
import TheFooter from './components/global/TheFooter.vue';

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
