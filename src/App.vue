<template lang="pug">
  div(data-vue="app")
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
