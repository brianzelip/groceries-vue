<template lang="pug">
  main
    Header
    ItemList
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AddItem from './components/AddItem.vue';
import ItemList from './components/ItemList.vue';

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    AddItem,
    ItemList
  }
};
</script>
