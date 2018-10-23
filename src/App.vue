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
  computed: {
    title() {
      const appTitle = 'groceries-vue';
      return this.$route.name === 'home'
        ? appTitle
        : `${this.$route.name} item | ${appTitle}`;
    }
  },
  components: {
    TheHeader,
    TheFooter
  },
  metaInfo() {
    return {
      title: this.title
    };
  }
};
</script>
